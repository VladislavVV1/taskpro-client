import { GoPencil } from 'react-icons/go'
import { FiTrash } from 'react-icons/fi'
import { FiArrowRightCircle } from 'react-icons/fi'
import { PRIORITY_LEVELS } from '@/app/components/modals/form-constants'
// export const PRIORITY_LEVELS = [
//   { id: 'Low', name: 'Low', color: '#8FA1D0' },
//   { id: 'Medium', name: 'Medium', color: '#E09CB5' },
//   { id: 'High', name: 'High', color: '#BEDBB0' },
//   { id: 'Without', name: 'Without', color: 'var' },
// ];

// A reusable component to display a single task card.
export default function Card({ card, onEdit, onDelete, onMove }) {
  const { title, description, priority, deadline } = card
// Fallback to Low
const config = PRIORITY_LEVELS.find((level) => level.id === priority) || PRIORITY_LEVELS[3];
  return (
    <div
      className="
        relative rounded-lg bg-[var(--card-bg)] max-w-[334px] 
        font-poppins text-[var(--card-text)] shadow-md mb-[18px]
      "
    >
      {/* Priority Color Stripe */}
      <div
        style={{ backgroundColor: config.color,
          marginTop: '1px',
          borderTopLeftRadius: '100px',
          borderBottomLeftRadius: '100px',
         }} 
        className="absolute left-0 top-0 h-[calc(100%-2px)] w-1"
      />

      <div className="flex h-full flex-col p-6">
        {/* Card Header & Description */}
        <div>
          <h3 className="truncate font-semibold tracking-tighter">{title}</h3>
          <p className="mt-2 h-8 text-xs leading-tight text-[var(--card-text)]/50 line-clamp-2">
            {description}
          </p>
        </div>

        {/* Divider */}
        <hr className="my-3.5 border-t border-[var(--card-text)]/10" />

        {/* Meta Info & Actions */}
        <div className="flex items-end justify-between">
          {/* Priority & Deadline */}
          <div className="flex gap-4">
            {/* Priority */}
            <div className="flex flex-col gap-1">
              <span className="text-[8px] font-normal text-[var(--card-text)]/50">
                Priority
              </span>
              <div className="flex items-center gap-1.5">
                <span style={{ backgroundColor: config.color }} className={`h-3 w-3 rounded-full`} />
                <span className="text-[10px]">{priority}</span>
              </div>
            </div>
            {/* Deadline */}
            <div className="flex flex-col gap-1">
              <span className="text-[8px] font-normal text-[var(--card-text)]/50">
                Deadline
              </span>
              <span className="text-[10px]">{deadline}</span>
            </div>
          </div>

          {/* Action Icons */}
          <div className="flex items-center gap-2">
            <button
              onClick={onMove}
              className="text-[var(--card-icon)]/50 transition hover:text-[var(--card-icon-hover)]"
            >
              <FiArrowRightCircle size={16} />
            </button>
            <button
              onClick={onEdit}
              className="text-[var(--card-icon)]/50 transition hover:text-[var(--card-icon-hover)]"
            >
              <GoPencil size={16} />
            </button>
            <button
              onClick={onDelete}
              className="text-[var(--card-icon)]/50 transition hover:text-red-500"
            >
              <FiTrash size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}