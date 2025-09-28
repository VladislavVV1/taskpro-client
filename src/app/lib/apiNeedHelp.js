import Cookies from 'js-cookie';
export async function NeedHelp(data) {
  try {
    console.log('NeedHelp called with data:', data);
    const token = Cookies.get('auth_token');
    const response = await fetch(`https://taskpro-backend-74ub.onrender.com/support/help/`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token ? `Bearer ${token}` : '',
      }
    });

    const responseData = await response.json();
    console.log('Help request response:', responseData);
    return responseData; // Should be the created column object
  } catch (error) {
    console.error('Error sending help request:', error);
    return [];
  }
}