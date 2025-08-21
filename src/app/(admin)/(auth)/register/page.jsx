'use client';
import {Form, Formik} from "formik";
import React from "react";
import { registerValidationSchema} from "@/app/lib/validationSchemas";
import AuthLayout from "@/app/components/authLayout";
import { NameField, EmailField, PasswordField } from "@/app/components/formFields";
import { fakeAuthLogin } from "@/app/lib/authService";
import { useRouter } from 'next/navigation'
// RegisterPage component for user registration
export default function RegisterPage() {
  const router = useRouter();
  return (
      <AuthLayout activeTab="register">
        <Formik
          initialValues={{ name: '', email: '', password: '' }}
          validationSchema={registerValidationSchema}
          onSubmit={(values) => {
            fakeAuthLogin(router); // Call the fakeAuthLogin function to simulate login
            alert(JSON.stringify(values, null, 2));
          }}
        >
          {({ errors, touched }) => (
            <Form className="flex flex-col gap-y-3.5">
              {/* Name Field */}
                <NameField />

              {/* Email Field */}
              <EmailField/>

              {/* Password Field */}
              
                <PasswordField/>
              {/* Submit Button */}
              <button
                type="submit"
                className="w-full h-[49px] mt-2.5 bg-[#BEDBB0] text-[#161616] font-medium rounded-lg hover:bg-green-500"
              >
                Register Now
              </button>
            </Form>
          )}
        </Formik>
      </AuthLayout>

  );
}