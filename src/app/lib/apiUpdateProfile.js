import Cookies from 'js-cookie';
export async function UpdateProfile(data) {
  try {
    const token = Cookies.get('auth_token');
    const response = await fetch(`https://taskpro-backend-74ub.onrender.com/auth/users/me`, {
      method: 'PATCH',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token ? `Bearer ${token}` : '',
      }
    });
    const newProfile = await response.json();
    console.log('Updated profile response:', newProfile);
    const parsedNewProfile = {
      username: newProfile.username,
      email: newProfile.email,
      avatar: newProfile.avatar,
    };
    return parsedNewProfile;
  } catch (error) {
    console.error('Error updating profile avatar:', error);
    return [];
  }
}
export async function UpdateProfileWithAvatar(formData) {
  try {
    const token = Cookies.get('auth_token');
    const response = await fetch(`https://taskpro-backend-74ub.onrender.com/auth/users/me/avatar`, {
      method: 'PUT',
      body: formData,
      headers: {
        'Authorization': token ? `Bearer ${token}` : '',
      }
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const newProfile = await response.json();
    const parsedNewProfile = {
      avatar: newProfile.avatar,
    };
    return parsedNewProfile;
  } catch (error) {
    console.error('Error fetching columns:', error);
    return [];
  }
}