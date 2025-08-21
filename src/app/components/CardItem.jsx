import { GoPencil } from 'react-icons/go'
import { FiTrash } from 'react-icons/fi'
import { FiArrowRightCircle } from 'react-icons/fi'

// A map to associate priority levels with specific Tailwind CSS color classes.
const priorityConfig = {
  Low: {
    color: 'bg-[#8FA1D0]', // Blueish purple from your design
    textColor: 'text-white',
  },
  Medium: {
    color: 'bg-[#E09CB5]',
    textColor: 'text-white',
  },
  High: {
    color: 'bg-[#BEDBB0]',
    textColor: 'text-white',
  },
  Without: {
    color: 'bg-[#FFF]/30',
    textColor: 'text-white',
  },
  // Add more priorities as needed
}

// A reusable component to display a single task card.
export default function Card({ card, onEdit, onDelete, onMove }) {
  const { title, description, priority, deadline } = card
  const config = priorityConfig[priority] || priorityConfig.Low // Fallback to Low

  return (
    <div
      className="
        relative rounded-lg bg-[#121212] 
        font-poppins text-white shadow-md
      "
    >
      {/* Priority Color Stripe */}
      <div
        className={`absolute left-0 top-0 h-full w-1 rounded-l-lg ${config.color}`}
      />

      <div className="flex h-full flex-col p-6">
        {/* Card Header & Description */}
        <div>
          <h3 className="truncate font-semibold tracking-tighter">{title}</h3>
          <p className="mt-2 h-8 text-xs leading-tight text-white/50 line-clamp-2">
            {description}
          </p>
        </div>

        {/* Divider */}
        <hr className="my-3.5 border-t border-white/10" />

        {/* Meta Info & Actions */}
        <div className="flex items-end justify-between">
          {/* Priority & Deadline */}
          <div className="flex gap-4">
            {/* Priority */}
            <div className="flex flex-col gap-1">
              <span className="text-[8px] font-normal text-white/50">
                Priority
              </span>
              <div className="flex items-center gap-1.5">
                <span className={`h-3 w-3 rounded-full ${config.color}`} />
                <span className="text-[10px]">{priority}</span>
              </div>
            </div>
            {/* Deadline */}
            <div className="flex flex-col gap-1">
              <span className="text-[8px] font-normal text-white/50">
                Deadline
              </span>
              <span className="text-[10px]">{deadline}</span>
            </div>
          </div>

          {/* Action Icons */}
          <div className="flex items-center gap-2">
            <button
              onClick={onMove}
              className="text-white/50 transition hover:text-white"
            >
              <FiArrowRightCircle size={16} />
            </button>
            <button
              onClick={onEdit}
              className="text-white/50 transition hover:text-white"
            >
              <GoPencil size={16} />
            </button>
            <button
              onClick={onDelete}
              className="text-white/50 transition hover:text-red-500"
            >
              <FiTrash size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}