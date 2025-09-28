import { useBoardsStore } from '@/app/stores/boardsStore';
import { useColumnsStore } from '@/app/stores/columnStore';
import { useCardsStore } from '@/app/stores/cardStore';

export function useBoardView(boardId) {
  const board = useBoardsStore(s =>(s.boards.find(b => b.id.toString() === boardId)));
  const columns = useColumnsStore(s => s.columns);
  const cards = useCardsStore(s => s.cards);
  if (!board) return null;

  const colMap = Object.fromEntries(columns.map(c => [c.id, c]));
  const cardMap = Object.fromEntries(cards.map(c => [c.id, c]));
  return {
    ...board,
    columns: (board.columns || [])
      .map(colId => {
        const col = colMap[colId];
        if (!col) return null;
        return {
          ...col,
          cards: (col.cards || []).map(cardId => cardMap[cardId]).filter(Boolean),
        };
      })
      .filter(Boolean),
  };
}