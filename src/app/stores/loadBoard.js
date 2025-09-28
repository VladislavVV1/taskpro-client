import Cookies from 'js-cookie';
import {useBoardsStore} from '@/app/stores/boardsStore'
import {useColumnsStore} from '@/app/stores/columnStore'
import {useCardsStore} from '@/app/stores/cardStore'
const getBoard = async (id) => {
  try {
    const token = Cookies.get('auth_token');
    const response = await fetch(`https://taskpro-backend-74ub.onrender.com/dashboard/${id}/full`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      let errorMessage = `Failed to load board (status: ${response.status})`;
      if (response.status === 401) {
        errorMessage = 'Unauthorized: Invalid or expired authentication token.';
      } else if (response.status === 404) {
        errorMessage = 'Board not found.';
      } else if (response.status === 500) {
        errorMessage = 'Server error occurred while loading the board.';
      }
      throw new Error(errorMessage);
    }

    const boardData = await response.json();
    return boardData;
  } catch (error) {
    console.error('Error loading board:', error.message || error);
    throw error;
  }
};


export const loadBoard = async (id) => {
  const boardData = await getBoard(id);
  console.log ('Loaded board data:', boardData);
  const attachColumn = useBoardsStore.getState().attachColumn;
  const loadColumns = useColumnsStore.getState().loadColumns;
  const loadCards = useCardsStore.getState().loadCards;
  const parsedColumns = boardData.columns.map(column => ({
    id: column.id.toString(),
    name: column.name,
    cards: column.cards.map(card => card.id.toString())
  }));
  const parsedCards = boardData.columns.flatMap(column =>
    column.cards.map(card => ({
      id: card.id.toString(),
      title: card.name,
      description: card.description,
      priority: card.status,
      deadline: card.deadline
    }))
  );
  loadColumns(parsedColumns);
  loadCards(parsedCards);
  boardData.columns.map(column => {
    attachColumn(id, column.id.toString());
  });
};