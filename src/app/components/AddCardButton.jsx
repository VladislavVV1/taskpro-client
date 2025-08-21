'use client'

import { IoIosAdd } from 'react-icons/io'

// A specific button for adding a new card to a column.
export default function AddCardButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="
        flex h-[56px] w-[334px] items-center justify-center gap-2 
        rounded-lg bg-[#BEDBB0] font-poppins font-medium text-[#161616]
        transition-colors hover:bg-[#9DC888]
      "
    >
      {/* Icon Wrapper */}
      <span className="flex h-7 w-7 items-center justify-center rounded-md bg-[#161616]">
        <IoIosAdd className="h-5 w-5 text-white" />
      </span>

      {/* Text */}
      <span className="text-sm tracking-tighter">Add another card</span>
    </button>
  )
}