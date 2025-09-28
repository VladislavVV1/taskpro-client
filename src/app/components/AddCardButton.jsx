'use client'

import { IoIosAdd } from 'react-icons/io'

// A specific button for adding a new card to a column.
export default function AddCardButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="
        flex h-[56px] w-[334px] items-center justify-center gap-2 mb-[10px]
        rounded-lg bg-[var(--add-card-bg)] font-poppins font-medium text-[var(--add-card-text)]
        transition-colors hover:bg-[var(--add-card-hover)]
      "
    >
      {/* Icon Wrapper */}
      <span className="flex h-7 w-7 items-center justify-center rounded-md bg-[var(--add-card-icon-bg)]">
        <IoIosAdd className="h-5 w-5 text-[var(--add-card-icon)]" />
      </span>

      {/* Text */}
      <span className="text-sm tracking-tighter">Add another card</span>
    </button>
  )
}