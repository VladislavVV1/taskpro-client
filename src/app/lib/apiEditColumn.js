import Cookies from 'js-cookie';
export async function EditColumn(columnId, data) {
  try {
    const token = Cookies.get('auth_token');
    const response = await fetch(`https://taskpro-backend-74ub.onrender.com/dashboard/column/${columnId}`, {
      method: 'PATCH',
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
    console.error('Error editing column:', error);
    return [];
  }
}