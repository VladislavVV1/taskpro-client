'use client';
import React from "react";
import { useBoardView } from "@/app/stores/useBoardView";
import { usePathname, useSearchParams} from "next/navigation";
import { useEffect } from "react";
import { useColumnsStore } from "@/app/stores/columnStore";
import { useCardsStore } from "@/app/stores/cardStore";
import AddColumnButton from "@/app/components/AddColumnButton";
import { createColumnOnBoard, deleteColumnFromBoard, createCardInColumn, deleteCardFromColumn } from "@/app/stores/boardGraph";
import { useModal } from "@/app/components/modals/ModalContext";
import ColumnItem from "@/app/components/ColumnItem";
import Card from "@/app/components/CardItem";
import AddCardButton from "@/app/components/AddCardButton";

export default function BoardPage() {
  useEffect(() => {
    useColumnsStore.getState().loadColumns();
    useCardsStore.getState().loadCards();
  }, []);
  
  const pathname = usePathname();
  const currentBoardId = pathname.split('/').pop();
  const board = useBoardView(currentBoardId);
  const openModal = useModal().openModal;
  const editColumn = useColumnsStore.getState().editColumn;
  const editCard = useCardsStore.getState().editCard;
  const priority = useSearchParams().get('priority') || 'Low';
  const handleAddColumn = () => {
    openModal('AddNewColumn', {
      onSubmit: (values) => {
        const columnId = createColumnOnBoard(currentBoardId, { name: values.title });
      }
    });
  }

  const handleColumnEdit = (columnId, columnName) => {
    openModal('EditColumn', {
      onSubmit: (values) => {
        // Call the API to update the column
        editColumn(columnId, { name: values.title });  
      },
      initialValues: { title: columnName },
    });
  }

  const handleColumnDelete = (columnId, columnName) => {
    openModal('ConfirmDelete', {
      onConfirm: () => {
        // Call the API to delete the column
        deleteColumnFromBoard(currentBoardId, columnId, { cascadeCards: true });
        console.log('Column deleted:', columnId);
      },
      resourceName: columnName
    });
  }

  const handleAddCard = (columnId) => {
    openModal('AddNewCard', {
      onSubmit: (values) => {
        // Call the API to create the card
        const priority = values.priority || 'Without';
        const deadline = values.deadline || 'NONE';
        const cardId = createCardInColumn(columnId, { title: values.title, description: values.description, priority, deadline });
      }
    });
  }

  const handleCardDelete = (columnId, cardId) => {
    openModal('ConfirmDelete', {
      onConfirm: () => {
        // Call the API to delete the card
        deleteCardFromColumn(columnId, cardId);
      },
      resourceName: 'card'
    });
  }

  const handleCardEdit = (cardId) => {
    const card = useCardsStore.getState().cards.find(card => card.id === cardId);
    if (!card) return;

    openModal('EditCard', {
      onSubmit: (values) => {
        // Call the API to update the card
        editCard(cardId, { title: values.title, description: values.description, priority: values.priority, deadline: values.deadline });
      },
      initialValues: { title: card.title, description: card.description, priority: card.priority, deadline: card.deadline },
    });
  }

  const filterCardsByPriority = (cards, priority) => {

  if (priority === 'ALL') return cards;
  return cards.filter(card => card.priority.toUpperCase() === priority.toUpperCase());
}

  if (!board) {
    return <div>Loading...</div>;
  }
  if (board.error) {
    return <div>Error loading board: {board.error}</div>;
  }
  return (

    <div>
      <h1 className="text-[18px] mb-[10px]">{board.name}</h1>
      {/* Render columns and add column button */}
      <div className="flex gap-[18px]">
      {board.columns.length !== 0 ? (
        <ul className="flex gap-[18px]">
          {board.columns.map(column => (
            <div key={column.id} className="max-w-[350px]">
              <ColumnItem
                id={column.id}
                text={column.name}
                onEdit={() => handleColumnEdit(column.id, column.name)}
                onDelete={() => handleColumnDelete(column.id, column.name)}
              />
              {column.cards.length > 0 && (
                <div className="mt-[10px] mb-[14px] overflow-hidden max-h-[calc(100vh-270px)] overflow-y-auto gap-[10px]">
                  <div className="flex flex-col flex-wrap gap-[18px] mt-[10px]">
                      {filterCardsByPriority(column.cards, priority).map(card => (
                        <Card 
                          key={card.id}
                          card={card}
                          onEdit={() => handleCardEdit(card.id)}
                          onDelete={() => handleCardDelete(column.id, card.id)}
                          onMove={() => handleMove(card.id)}
                        />
                      ))}
                  </div>
                </div>
              )}
              <AddCardButton onClick={() => handleAddCard(column.id)} />
            </div>
          ))}
        </ul>
      ): null}
      <AddColumnButton onClick={handleAddColumn} />
    </div>
  </div>
  );
}