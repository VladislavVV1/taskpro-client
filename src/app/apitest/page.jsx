'use client';

import LogoutButton from "@/app/components/SidebarLogout";
import React, { use, useState } from "react";
import ApiTestButton from "@/app/components/apiTestButton";

export default function Boards() {
  const [token, setToken] = useState('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ2bGFkIiwiZXhwIjoxNzUzNTU4NzY3fQ.XKOWdKEheGZ9hgn1FhxLFelaD5NWLOKX6cJ8eVK8fLQ');
  // Function to handle REG operation
  const register = async () => {
    try {
      const res = await fetch('https://f1a85f6b5fe6.ngrok-free.app/users/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: 'vlad',
          email: 'vlad@gmail.com', 
          password: '12345678',
        }),
      });

      console.log('res', res);

    } catch (err) {
      console.error('error', err);
    }
  };

  //private API endpoint for login

  const getPrivateInfo = async () => {
    console.log('token', token);
    try {
      const res = await fetch('https://f1a85f6b5fe6.ngrok-free.app/users/me/', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json', 
          'Authorization': `Bearer ${token}`,
          'ngrok-skip-browser-warning': 'true'
        },
      });

      console.log('res', res);
    } catch (err) {
      console.error('error', err);
    }
  };


const logIn = async () => {
  try {
    // 1. Create a new URLSearchParams object
    const formData = new URLSearchParams();
    formData.append('username', 'vlad');
    formData.append('password', '12345678');

    const res = await fetch('https://f1a85f6b5fe6.ngrok-free.app/token', {
      method: 'POST',
      // 2. The body is now the formData object
      body: formData,
      // 3. Remove the 'Content-Type': 'application/json' header.
      // The browser will automatically set the correct header for URLSearchParams.
    });

    if (!res.ok) {
      // Handle non-200 responses
      const errorData = await res.json();
      console.error('API Error:', errorData.detail);
      return;
    }

    const data = await res.json();
    console.log('token', data.access_token);
    setToken(data.access_token);
    console.log('Success:', data);

  } catch (err) {
    console.error('Network or other error:', err);
  }
};
  return (
    
    <div>
      <h1>Boards Page</h1>
      <p>This is the board page content.</p>
      <LogoutButton />
      <ApiTestButton onClick={register} label="Test Register API" />
      <ApiTestButton onClick={logIn} label="Test Login API" />
      <ApiTestButton onClick={getPrivateInfo} label="Test Private Info API" />
    </div>
  );
}