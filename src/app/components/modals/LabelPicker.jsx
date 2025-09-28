'use client'

import { useField } from 'formik'
import { PRIORITY_LEVELS } from '@/app/components/modals/form-constants'

export default function PriorityPicker({ name, priority }) {
  const [field, , helpers] = useField(name);
  const { setValue } = helpers;
  return (
    <div className="mt-[10px]">
      <label className="mb-2 block text-xs font-medium text-[var(--modal-title)]/50">
        Label color
      </label>
      <div className="flex gap-2">
        {PRIORITY_LEVELS.map((priority) => (
          <button
            key={priority.id}
            type="button"
            onClick={() => setValue(priority.id)}
            className="h-4 w-4 rounded-full transition"
            style={{
              backgroundColor: priority.id === 'Without' ? 'var(--modal-title)' : priority.color,
              opacity: priority.id === 'Without' ? '0.3' : '1',
              boxShadow: field.value === priority.id
                ? `0 0 0 2px ${priority.id === 'Without' ? 'var(--modal-title)' : priority.color}`
                : undefined
            }}
          />
        ))}
      </div>
    </div>
  );
}