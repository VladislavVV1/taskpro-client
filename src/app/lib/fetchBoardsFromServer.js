import Cookies from 'js-cookie';

export async function fetchBoardsFromServer() {
  try {
    const token = Cookies.get('auth_token');

    const response = await fetch('https://taskpro-backend-74ub.onrender.com/dashboard', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token ? `Bearer ${token}` : '',
      }
    });


    const text = await response.text();


    // Try to parse as JSON
    try {
      const boards = JSON.parse(text);
      // Parsed board data received from server
      return boards;
    } catch {
      throw new Error('Response was not JSON. Maybe backend is returning HTML or an error page.');
    }

  } catch (error) {
    console.error('Error fetching boards:', error);
    return [];
  }
}