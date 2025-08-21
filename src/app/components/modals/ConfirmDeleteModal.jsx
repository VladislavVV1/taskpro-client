'use client'

import { IoWarningOutline } from 'react-icons/io5'

// A generic modal for confirming a destructive action.
export default function ConfirmDeleteModal({
  onConfirm,
  onClose,
  resourceName = 'this item', // A prop to make the message specific
}) {
  const handleConfirm = () => {
    onConfirm() // Run the delete logic
    onClose()   // Close the modal
  }

  return (
    <div className="p-6 text-center">
      <IoWarningOutline className="mx-auto h-12 w-12 text-red-500" />
      <h3 className="mt-4 text-lg font-medium text-[var(--text)]">
        Delete {resourceName}?
      </h3>
      <div className="mt-2 text-sm text-gray-400">
        <p>Are you sure you want to delete this? This action cannot be undone.</p>
      </div>
      <div className="mt-6 flex justify-center gap-4">
        {/* Cancel Button */}
        <button
          type="button"
          onClick={onClose}
          className="w-full rounded-lg border border-gray-600 bg-transparent px-4 py-2 text-sm font-medium text-[var(--text)] shadow-sm hover:bg-white/10 focus:outline-none"
        >
          Cancel
        </button>
        {/* Delete Button */}
        <button
          type="button"
          onClick={handleConfirm}
          className="w-full rounded-lg border border-transparent bg-red-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none"
        >
          Delete
        </button>
      </div>
    </div>
  )
}