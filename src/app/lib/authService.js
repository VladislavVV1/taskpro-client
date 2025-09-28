import Cookies from 'js-cookie';
// This function will be called on successful login/registration
export const fakeAuthLogin = (router, token) => {
  // Set a cookie to simulate a session.
  // In a real app, this would be a JWT or session token from your backend.
  Cookies.set('auth_token', token, { expires: 7 });

  // Redirect to the protected page
  router.push('/board');
};

// This function will be called on logout
export const fakeAuthLogout = (router) => {
  // Remove the cookie
  Cookies.remove('auth_token');
  localStorage.clear();
  // Redirect to the login page
  router.push('/login');
};
