'use client'

import { useField } from 'formik'
import { BOARD_BACKGROUNDS } from '@/app/components/modals/form-constants'
import { FaRegImage } from 'react-icons/fa6'

export default function BackgroundPicker({ name }) {
  const [field, , helpers] = useField(name)
  const { setValue } = helpers

  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-[var(--modal-title)]">Background</label>
      <div className="grid grid-cols-8 gap-1">
        {/* Image options */}
        {BOARD_BACKGROUNDS.map(({ id, Img }) => (
          <button
            key={id}
            type="button"
            onClick={() => setValue(id)}
            style={{ backgroundImage: `url(${Img})`,
           backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat', }}
            className={`
              h-7 w-7 rounded bg-cover bg-center
              transition border-2
              ${field.value === id ? 'border-[var(--modal-title)]' : 'border-transparent hover:border-[var(--modal-title)]/50'}
            `}
          />
        ))}
      </div>
    </div>
  )
}