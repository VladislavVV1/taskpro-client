'use client'

import { motion } from 'framer-motion'
import { IoIosAdd } from 'react-icons/io'

// A reusable button component styled to match your design.
// It accepts an 'icon' prop and 'children' for the text.
export default function Button({
  children,
  onClick,
  type = 'button',
  disabled = false,
  icon: IconComponent = IoIosAdd, // Default icon is a plus
}) {
  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      // Base styles for the button
      className="
        flex w-full h-[49px] items-center justify-center gap-2 
        rounded-lg bg-[#BEDBB0] font-medium text-[#161616]
        transition-colors hover:bg-[#9DC888] 
        disabled:bg-gray-500 disabled:text-white disabled:cursor-not-allowed
      "
      // Animation from framer-motion
      whileTap={{ scale: disabled ? 1 : 0.97 }}
      transition={{ duration: 0.1 }}
    >
      {/* Icon Wrapper */}
      <span className="flex h-7 w-7 items-center justify-center rounded-md bg-[#161616]">
        <IconComponent className="h-5 w-5 text-white" />
      </span>

      {/* Text */}
      <span className="text-sm font-poppins tracking-tighter">{children}</span>
    </motion.button>
  )
}