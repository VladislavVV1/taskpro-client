'use client'

import { useField } from 'formik'
import { useRef, useState } from 'react'
import Image from 'next/image'
import { IoIosAdd } from 'react-icons/io'
import { FaUserCircle } from 'react-icons/fa'

export default function AvatarUploader({ name }) {
  const [field, , helpers] = useField(name)
  const { setValue } = helpers
  const [preview, setPreview] = useState(null)
  const fileInputRef = useRef(null)

  const handleChange = (event) => {
    const file = event.currentTarget.files[0]
    if (file && file.type.startsWith('image/')) {
      setValue(file) // Set the file object in Formik state
      setPreview(URL.createObjectURL(file))
    }
  }

  const imageUrl = preview || (typeof field.value === 'string' ? field.value : null)

  return (
    <div className="relative mx-auto flex h-[79px] w-[68px] flex-col items-center">
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleChange}
        className="hidden"
        accept="image/*"
      />
      {/* Avatar Image Preview */}
      <div className="relative h-[68px] w-[68px] overflow-hidden rounded-lg">
        {imageUrl ? (
          <Image
  src={`https://taskpro-backend-74ub.onrender.com${imageUrl}`}
  alt="Avatar preview"
  width={100}
  height={100}
  className="absolute inset-0 w-full h-full object-cover"
/>
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-[var(--profile-logo)]">
            <FaUserCircle className="h-12 w-12 text-[var(--profile-logo-icon)]" />
          </div>
        )}
      </div>
      {/* Upload Button */}
      <button
        type="button"
        onClick={() => fileInputRef.current?.click()}
        className="absolute -bottom-1 flex h-6 w-6 items-center justify-center rounded-md bg-[var(--modal-avatar-icon-bg)]"
      >
        <IoIosAdd className="h-4 w-4 text-[var(--modal-avatar-icon)]" />
      </button>
    </div>
  )
}