'use client'

import { Field, ErrorMessage } from 'formik'
import { useState } from 'react'
import { FiEye, FiEyeOff } from 'react-icons/fi'

export default function PasswordInput({ name, placeholder }) {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div>
<div className="relative">
        <Field
        name={name}
        type={showPassword ? 'text' : 'password'}
        placeholder={placeholder}
        className="
          h-[49px] w-full rounded-lg border border-[var(--modal-input-border)] bg-[var(--modal-bg)]
          px-4 text-sm text-[var(--modal-title)] shadow-inner
          focus:border-[var(--modal-button-bg-hover)] focus:outline-none"
      />
      <button
        type="button"
        onClick={() => setShowPassword(!showPassword)}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-[var(--modal-icons)] hover:text-[var(--modal-icon-hover)]"
      >
        {showPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
      </button>
  </div>
      <div className="mt-1 text-xs text-red-400">
        <ErrorMessage name={name} />
      </div>
    </div>
  )
}