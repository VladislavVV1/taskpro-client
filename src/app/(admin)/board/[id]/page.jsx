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
import { loadBoard } from "@/app/stores/loadBoard";
import { AddNewColumn } from "@/app/lib/apiAddNewColumn";
import { EditColumn } from "@/app/lib/apiEditColumn";
import { DeleteColumn } from "@/app/lib/apiDeleteColumn";
import { AddNewCard } from "@/app/lib/apiAddNewCard";
import { EditCard } from "@/app/lib/apiEditCard"; // Not used currently
import { DeleteCard } from "@/app/lib/apiDeleteCard"; 


const formatDate = (dateString) => {
  return new Date(dateString).toISOString().slice(0, 10);
}

export default function BoardPage() {
  const pathname = usePathname();
  const currentBoardId = pathname.split('/').pop();
  const board = useBoardView(currentBoardId);
  const openModal = useModal().openModal;
  const editColumn = useColumnsStore.getState().editColumn;

  useEffect(() => {
    loadBoard(currentBoardId);
    useColumnsStore.getState().loadColumns();
    useCardsStore.getState().loadCards();
  }, []);

  const editCard = useCardsStore.getState().editCard;
  const priority = useSearchParams().get('priority') || 'Low';
  
  const handleAddColumn = () => {
    openModal('AddNewColumn', {
      onSubmit: (values) => {
        AddNewColumn(currentBoardId, { name: values.title }).then(newColumn => {
          createColumnOnBoard(currentBoardId, newColumn.id, { name: newColumn.name });
        });
      }
    });
  }

  const handleColumnEdit = (columnId, columnName) => {
    openModal('EditColumn', {
      onSubmit: (values) => {
        // Call the API to update the column
        EditColumn(columnId, { name: values.title }).then((newColumn) => {
          editColumn(newColumn.id, { name: newColumn.name });
        });
      },
      initialValues: { title: columnName },
    });
  }

  const handleColumnDelete = (columnId, columnName) => {
    openModal('ConfirmDelete', {
      onConfirm: () => {
        // Call the API to delete the column
        DeleteColumn(columnId).then(() => {
          deleteColumnFromBoard(currentBoardId, columnId, { cascadeCards: true });
        });
      },
      resourceName: columnName
    });
  }

  const handleAddCard = (columnId) => {
    openModal('AddNewCard', {
      onSubmit: (values) => {
        // Call the API to create the card
        AddNewCard(columnId, { name: values.title, description: values.description, status: values.priority, deadline: formatDate(values.deadline) }).then(newCard => {
          createCardInColumn(columnId, { id: newCard.id, title: newCard.name, description: newCard.description, priority: newCard.priority, deadline: newCard.deadline });
        });
      }
    });
  }

  const handleCardDelete = (columnId, cardId) => {
    openModal('ConfirmDelete', {
      onConfirm: async () => {
        const response = await DeleteCard(cardId);
        if (response.result) {
          deleteCardFromColumn(columnId, cardId);
        }
      },
      resourceName: 'card'
    });
  }

  const handleCardEdit = (cardId) => {
    const card = useCardsStore.getState().cards.find(card => card.id === cardId);
    if (!card) return;

    openModal('EditCard', {
      onSubmit: (values) => {
        EditCard(cardId, { name: values.title, description: values.description, status: values.priority, deadline: formatDate(values.deadline) }).then((updatedCard) => {
          editCard(cardId, updatedCard);
        });
      },
      initialValues: { title: card.title, description: card.description, priority: card.priority, deadline: card.deadline },
    });
  }

  const filterCardsByPriority = (cards, priority) => {

  if (priority === 'ALL') return cards;
if (!cards || !Array.isArray(cards)) return [];
const filtered = cards.filter(card => {
  if (!card || !card.priority) return false;
  return card.priority.toUpperCase() === priority.toUpperCase();
});

  return filtered;
}

  if (!board) {
    return <div>Loading...</div>;
  }
  if (board.error) {
    return <div>Error loading board: {board.error}</div>;
  }
  return (

    <div
      className="background-img min-h-screen pt-[10px] pb-[10px] pr-[18px] pl-[18px]"
      style={
        board.background !== 'default'
          ? {
              backgroundImage: `url(/background-pc/${board.background}.webp)`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }
          : undefined
      }
    >
      <h1 className="text-[14px] sm:text-[18px] text-[var(--profile-title)] font-medium mb-[10px]">{board.name}</h1>
      {/* Render columns and add column button */}
      <div className="flex gap-[18px] overflow-x-auto max-h-[calc(100vh-115px)] h-full card-scroll ">
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
                <div className="overflow-hidden max-h-[calc(100vh-280px)] overflow-y-auto card-scroll gap-[10px]">
                  <div className="flex flex-col flex-wrap ">
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