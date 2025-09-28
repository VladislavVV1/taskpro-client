import Cookies from 'js-cookie';
export async function DeleteBoard(id) {
  try {
    const token = Cookies.get('auth_token');

    const response = await fetch(`https://taskpro-backend-74ub.onrender.com/dashboard/${id}?board_id=${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token ? `Bearer ${token}` : '',
      }
    });
    const result = await response.json();
    return result; // Should be the deleted board object or a success message

  } catch (error) {
    console.error('Error deleting board:', error);
    return [];
  }
}