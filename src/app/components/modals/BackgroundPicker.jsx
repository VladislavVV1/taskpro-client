'use client'

import { useField } from 'formik'
import { BOARD_BACKGROUNDS } from '@/app/components/modals/form-constants'
import { FaRegImage } from 'react-icons/fa6'

export default function BackgroundPicker({ name }) {
  const [field, , helpers] = useField(name)
  const { setValue } = helpers

  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-white">Background</label>
      <div className="grid grid-cols-8 gap-1">
        {/* Default 'no background' option */}
        <button
          type="button"
          onClick={() => setValue('default')}
          className={`
            flex h-7 w-7 items-center justify-center rounded bg-[#1F1F1F]
            transition border-2
            ${field.value === 'default' ? 'border-white' : 'border-transparent hover:border-white/50'}
          `}
        >
          <FaRegImage className="h-4 w-4 text-white/50" />
        </button>
        {/* Image options */}
        {BOARD_BACKGROUNDS.map(({ id, Img }) => (
          <button
            key={id}
            type="button"
            onClick={() => setValue(id)}
            style={{ backgroundImage: `url(${Img})` }}
            className={`
              h-7 w-7 rounded bg-cover bg-center
              transition border-2
              ${field.value === id ? 'border-white' : 'border-transparent hover:border-white/50'}
            `}
          />
        ))}
      </div>
    </div>
  )
}