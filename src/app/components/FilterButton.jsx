'use client'
import { useModal } from '@/app/components/modals/ModalContext';
import { CiFilter } from "react-icons/ci";


export default function FilterButton({ filters, setFilters }) {
  const { openModal } = useModal()
  return (
    <button
      onClick={() => openModal('Filters', { filters, setFilters })}
      className="flex items-center gap-1 ml-2 text-[var(--secondary-text)] hover:text-green-700"
    >
        <CiFilter />
      Filters
    </button>
  )
}

