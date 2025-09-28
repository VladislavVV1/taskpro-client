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
const handleLogin = async (values) => {
  const { email, password } = values;
  const bodyData = new URLSearchParams({ username: email, password })
  async function loginUser() {
      console.log('Attempting to log in with:', { email, password });
    try {
      const response = await fetch('https://taskpro-backend-74ub.onrender.com/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: bodyData,
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  }
  const token = await loginUser();
  console.log('Login response token:', token);
  if (token) {
    fakeAuthLogin(router, token.access_token);
  } else {
    alert('Login failed. Please check your credentials and try again.');
  }
};

  return (
    <AuthLayout activeTab="login">
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={loginValidationSchema}
        onSubmit={(values) => {
          handleLogin(values);
        }}
      >
        {({ errors, touched }) => (
          <Form className="flex flex-col gap-y-3.5">
            {/* Email Field */}
            <EmailField />
            {/* Password Field */}
            <PasswordField />
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