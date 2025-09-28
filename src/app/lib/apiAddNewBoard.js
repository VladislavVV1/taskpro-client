import Cookies from 'js-cookie';
export async function AddNewBoard(data) {
  try {
    const token = Cookies.get('auth_token');
    const response = await fetch('https://taskpro-backend-74ub.onrender.com/dashboard', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token ? `Bearer ${token}` : '',
      }
    });
    const newBoard = await response.json();
    const parsedNewBoard = {
      id: newBoard.id.toString(),
      name: newBoard.name,
      icon: newBoard.icon,
      background: newBoard.background
    };
    return parsedNewBoard; // Should be the created board object
  } catch (error) {
    console.error('Error fetching boards:', error);
    return [];
  }
}