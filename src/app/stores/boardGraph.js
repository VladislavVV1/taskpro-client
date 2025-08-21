import { nanoid } from 'nanoid';
import { useBoardsStore } from '@/app/stores/boardsStore';
import { useColumnsStore } from '@/app/stores/columnStore';
import { useCardsStore } from '@/app/stores/cardStore';

/** Create a column and attach its id to a board */
export function createColumnOnBoard(boardId, data) {
  const id = data.id || `col-${nanoid(6)}`;
  console.log('Creating column:', id, data);
  useColumnsStore.getState().addColumn({ id, name: data.name, cards: [] });
  useBoardsStore.getState().attachColumn(boardId, id);
  return id;
}

/** Delete a column: optionally cascade delete its cards, and detach from board */
export function deleteColumnFromBoard(boardId, columnId, { cascadeCards = true } = {}) {
  const { columns } = useColumnsStore.getState();
  const col = columns.find(c => c.id === columnId);

  if (cascadeCards && col?.cards?.length) {
    const { deleteCard } = useCardsStore.getState();
    col.cards.forEach(deleteCard);
  }

  useColumnsStore.getState().deleteColumn(columnId);
  useBoardsStore.getState().detachColumn(boardId, columnId);
}

/** Create a card and attach its id to a column */
export function createCardInColumn(columnId, data) {
  const id = data.id || `card-${nanoid(6)}`;
  useCardsStore.getState().addCard({ id, ...data });
  useColumnsStore.getState().addCardIdToColumn(columnId, id);
  return id;
}

/** Delete a card and detach id from its column */
export function deleteCardFromColumn(columnId, cardId) {
  useColumnsStore.getState().removeCardIdFromColumn(columnId, cardId);
  useCardsStore.getState().deleteCard(cardId);
}