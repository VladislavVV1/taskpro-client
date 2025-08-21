'use client'
import React from 'react'
import { GoPencil } from "react-icons/go";
import { FiTrash } from "react-icons/fi";


// A button for adding a new column to the board.
export default function ColumnItem({ id, text, onEdit, onDelete }) {
  return (
    <li
      key={id}
      className="
        flex-shrink-0 flex p-[18px] h-[56px] w-[334px] items-center justify-center gap-2 
        rounded-lg bg-[#121212] text-white 
        transition-colors hover:bg-gray-800
      "
    >
       <p>{text}</p>
        <div className="flex items-center gap-2 ml-auto">
                           <button className="w-4 h-4 flex items-center justify-center" onClick={onEdit}>
                             <GoPencil className="w-4 h-4 text-[var(--text)]/50 hover:text-[var(--link)]" />
                           </button>
                           <button className="w-4 h-4 flex items-center justify-center" onClick={onDelete}>
                             <FiTrash className="w-4 h-4 text-[var(--text)]/50 hover:text-[var(--link)]" />
                           </button>
        </div>
    </li>
  )
}