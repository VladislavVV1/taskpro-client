'use client'

import { useField } from 'formik'
import { BOARD_ICONS } from '@/app/components/modals/form-constants'

export default function IconPicker({ name }) {
  const [field, , helpers] = useField(name)
  const { setValue } = helpers

  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-[var(--modal-title)]">Icons</label>
      <div className="flex flex-wrap gap-2">
        {BOARD_ICONS.map(({ id, Component }) => (
          <button
            key={id}
            type="button"
            onClick={() => setValue(id)}
            className={`
              flex h-7 w-7 items-center justify-center rounded
              transition-colors
              ${field.value === id ? 'bg-[var(--modal-title)]/30' : 'bg-transparent hover:bg-[var(--modal-title)]/10'}
            `}
          >
            <Component className="h-4 w-4 text-[var(--modal-icons)]" />
          </button>
        ))}
      </div>
    </div>
  )
}