'use client'

import { useField } from 'formik'
import { Popover, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { DayPicker } from 'react-day-picker'
import { format } from 'date-fns'

// Replaced react-icons with an inline SVG for the arrow icon
const ArrowDownIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="6 9 12 15 18 9"></polyline>
  </svg>
);


export default function DatePickerField({ name }) {
  const [field, , helpers] = useField(name)
  const { setValue } = helpers
  const selectedDate = field.value ? new Date(field.value) : undefined
  const today = new Date();
  // Updated displayDate to handle the "Today, " prefix correctly
  const displayDate = selectedDate
    ? `Today, ${format(selectedDate, 'MMMM d')}`
    : 'Select a date'

  return (
    <Popover className="relative">
      {({ open, close }) => (
        <>
          <div>
            <label className="mb-2 block text-xs font-medium text-[var(--modal-title)]/50">
              Deadline
            </label>
            <Popover.Button className="flex w-full items-center justify-between text-left text-sm text-[var(--modal-button-bg)]">
              <span>{displayDate}</span>
              <ArrowDownIcon
                className={`transition duration-200 ${open ? 'rotate-180' : ''}`}
              />
            </Popover.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="absolute z-10 top-0">
              <DayPicker
                mode="single"
                disabled={{ before: today }}
                selected={selectedDate}
                onSelect={(date) => {
                  if (date) {
                    setValue(date.toISOString())
                  }
                  close()
                }}
                autoFocus
                showOutsideDays 
                navLayout="around"
                // // --- STYLING WITH TAILWIND ---
                //  components={{
                //     IconLeft: () => <span className="text-white/80">&lt;</span>,
                //     IconRight: () => <span className="text-[#BEDBB0]">&gt;</span>,
                // }}
              />
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  )
}