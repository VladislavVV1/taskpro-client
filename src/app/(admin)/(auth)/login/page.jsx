'use client';
import {Form, Formik} from "formik";
import React from "react";
import { loginValidationSchema} from "@/app/lib/validationSchemas";
import AuthLayout from "@/app/components/authLayout";
import {EmailField, PasswordField } from "@/app/components/formFields";
import { fakeAuthLogin } from "@/app/lib/authService";
import { useRouter } from 'next/navigation'
export default function LoginPage() {
  const router = useRouter();

// Function to handle REG operation
//   const logIn = async () => {
//   try {
//     const res = await fetch('https://f1a85f6b5fe6.ngrok-free.app/users/', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({
//         username: 'vlad',
//         email: 'vlad@gmail.com', 
//         password: '12345678',
//       }),
//     });

//     console.log('res', res);

//   } catch (err) {
//     console.error('error', err);
//   }
// };
// Function to handle login

//private API endpoint for login
const your_full_auth_token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ2bGFkIiwiZXhwIjoxNzUzNTU4NzY3fQ.XKOWdKEheGZ9hgn1FhxLFelaD5NWLOKX6cJ8eVK8fLQ';

const logIn = async () => {
  try {
    const res = await fetch('https://f1a85f6b5fe6.ngrok-free.app/users/me/', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json', 
        'Authorization': `Bearer ${your_full_auth_token}`,
        'ngrok-skip-browser-warning': 'true'
      },
    });

    console.log('res', res);

  } catch (err) {
    console.error('error', err);
  }
};
// "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ2bGFkIiwiZXhwIjoxNzUzNTU4NzY3fQ.XKOWdKEheGZ9hgn1FhxLFelaD5NWLOKX6cJ8eVK8fLQ"
// const logIn = async () => {
//   try {
//     // 1. Create a new URLSearchParams object
//     const formData = new URLSearchParams();
//     formData.append('username', 'vlad');
//     formData.append('password', '12345678');

//     const res = await fetch('https://f1a85f6b5fe6.ngrok-free.app/token', {
//       method: 'POST',
//       // 2. The body is now the formData object
//       body: formData,
//       // 3. Remove the 'Content-Type': 'application/json' header.
//       // The browser will automatically set the correct header for URLSearchParams.
//     });

//     if (!res.ok) {
//       // Handle non-200 responses
//       const errorData = await res.json();
//       console.error('API Error:', errorData.detail);
//       return;
//     }

//     const data = await res.json();
//     console.log('Success:', data);

//   } catch (err) {
//     console.error('Network or other error:', err);
//   }
// };


  return (
      <AuthLayout activeTab="login">
        <Formik
          initialValues={{email: '', password: '' }}
          validationSchema={loginValidationSchema}
          onSubmit={(values) => {
            fakeAuthLogin(router); // Call the fakeAuthLogin function to simulate login
            alert(JSON.stringify(values, null, 2));
          }}
        >
          {({ errors, touched }) => (
            <Form className="flex flex-col gap-y-3.5">
              {/* Email Field */}
              <EmailField/>
              {/* Password Field */}
              
                <PasswordField/>
              {/* Submit Button */}
              <button
                type="submit"
                className="w-full h-[49px] mt-2.5 bg-[#BEDBB0] text-[#161616] font-medium rounded-lg hover:bg-green-500"
              >
                Log In
              </button>
            </Form>
          )}
        </Formik>
      </AuthLayout>

  );
}