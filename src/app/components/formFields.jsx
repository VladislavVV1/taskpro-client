import React from "react";
import { Field, ErrorMessage } from "formik";
import { FaEye, FaEyeSlash } from "react-icons/fa";


const authInputStyles = "w-full h-[49px] px-4 py-2 bg-[#1F1F1F] border border-[#BEDBB0] rounded-lg text-white placeholder-white focus:outline-none focus:border-green-500 shadow-[0_4px_16px_rgba(22,22,22,0.08)]";

export function NameField() {
    return (
                      <div>
                        <Field
                          type="text"
                          name="name"
                          placeholder="Enter your name"
                          className={authInputStyles}
                          aria-label="Name"
                        />
                        <ErrorMessage name="name" component="div" className="text-red-500 text-xs mt-1" />
                      </div>
    );
}

export function EmailField() {
    return (
            <div>
                <Field
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className={authInputStyles}
                  aria-label="Email"
                />
                <ErrorMessage name="email" component="div" className="text-red-500 text-xs mt-1" />
              </div>
    );
}

export function PasswordField() {
          const [showPassword, setShowPassword] = React.useState(false);
    return (
<div>
              {/* The relative container for ONLY the input and the icon */}
              <div className="relative">
                <Field
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  placeholder="Create a password"
                  className={`${authInputStyles} pr-10`}
                  aria-label="Password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  // This centering logic is correct and does not need to change
                  className="absolute top-1/2 right-4 -translate-y-1/2 text-white/50 hover:text-white"
                  aria-label="Toggle password visibility"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
              
              {/* The error message is now grouped with the input */}
              <ErrorMessage name="password" component="div" className="text-red-500 text-xs mt-1" />
            </div>
    );
}

export function ModalField({ name, label, type = 'text', as = 'input' }) {
  const inputStyles = `
    mt-1 block w-full bg-gray-700 border-gray-600 
    rounded-md shadow-sm p-2 text-white
    focus:border-indigo-500 focus:ring-indigo-500
  `

  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-gray-300">
        {label}
      </label>
      <Field
        id={name}
        name={name}
        type={type}
        as={as} // 'input' or 'textarea'
        className={inputStyles}
      />
      <div className="text-red-400 text-xs mt-1">
        <ErrorMessage name={name} />
      </div>
    </div>
  )
}