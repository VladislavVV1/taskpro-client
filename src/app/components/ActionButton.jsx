'use client'

// A simple, reusable action button for modals.
export default function ActionButton({ children, onClick, type = 'button', disabled = false }) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className="
        flex h-[49px] w-full items-center justify-center 
        rounded-lg bg-[#BEDBB0] font-poppins text-sm font-medium text-[#161616]
        transition-colors hover:bg-[#9DC888]
        disabled:bg-gray-500 disabled:cursor-not-allowed
      "
    >
      {children}
    </button>
  )
}