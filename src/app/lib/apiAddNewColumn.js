import Cookies from 'js-cookie';
export async function AddNewColumn(boardId, data) {
  try {
    const token = Cookies.get('auth_token');

    const response = await fetch(`https://taskpro-backend-74ub.onrender.com/dashboard/${boardId}/column`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token ? `Bearer ${token}` : '',
      }
    });


    const newColumn = await response.json();
    const parsedNewColumn = {
      id: newColumn.id.toString(),
      name: newColumn.name,
    };
    return parsedNewColumn; // Should be the created column object
  } catch (error) {
    console.error('Error fetching columns:', error);
    return [];
  }
}