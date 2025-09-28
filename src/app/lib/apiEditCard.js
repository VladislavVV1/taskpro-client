import Cookies from 'js-cookie';
export async function EditCard(cardId, data) {
  try {
    const token = Cookies.get('auth_token');
    const response = await fetch(`https://taskpro-backend-74ub.onrender.com/card/${cardId}`, {
      method: 'PATCH',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token ? `Bearer ${token}` : '',
      }
    });

    const newCard = await response.json();
    const parsedNewCard = {
      id: newCard.id.toString(),
      name: newCard.name,
      description: newCard.description,
      priority: newCard.status,
      deadline: newCard.deadline,
    };
    return parsedNewCard; // Should be the created card object
  } catch (error) {
    console.error('Error editing card:', error);
    return [];
  }
}