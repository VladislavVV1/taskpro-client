'use client'

import { IoIosAdd } from 'react-icons/io'

// A button for adding a new column to the board.
export default function AddColumnButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="
        flex-shrink-0 flex h-[56px] w-[334px] items-center justify-center gap-2 
        rounded-lg bg-[#121212] text-white 
        transition-colors hover:bg-gray-800
      "
    >
      <span className="flex h-7 w-7 items-center justify-center rounded-md bg-white">
        <IoIosAdd className="h-5 w-5 text-black" />
      </span>
      <span className="font-medium">Add another column</span>
    </button>
  )
}