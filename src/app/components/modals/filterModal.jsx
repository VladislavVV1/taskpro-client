'use client'

import { IoClose } from "react-icons/io5";

export default function Filters({ filters, setFilters, onClose }) {
  const filtersOptions = [
    { value: 'WITHOUT', label: 'Without priority', color: '#fff' },
    { value: 'LOW', label: 'Low', color: '#8FA1D0' },
    { value: 'MEDIUM', label: 'Medium', color: '#E09CB5' },
    { value: 'HIGH', label: 'High', color: '#BEDBB0' },
  ];

  return (
    <div className="relative bg-[#111] rounded-xl border border-[#232323] shadow-2xl w-[400px] max-w-full p-8">
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-3xl text-white/80 hover:text-white"
        aria-label="Close"
      >
        <IoClose />
      </button>

      <h2 className="text-white text-2xl font-bold mb-6">Filters</h2>
      <hr className="border-t border-[#232323] mb-6" />

      <div className="flex items-center justify-between mb-4">
        <span className="text-white text-lg font-semibold">Label color</span>
        <button
          className="text-gray-400 underline text-sm hover:text-white"
          onClick={() => { 
            setFilters({ ...filters, priority: 'ALL' })
            onClose()
          }}
        >
          Show all
        </button>
      </div>

      <div className="flex flex-col gap-4">
        {filtersOptions.map(opt => (
          <button
            key={opt.value}
            onClick={() => {
              setFilters({ ...filters, priority: opt.value });
              onClose()
            }}
            className="flex items-center gap-3 text-left group"
          >
            <span className="flex items-center justify-center">
              <span
                className="w-5 h-5 rounded-full flex items-center justify-center"
                style={{ background: opt.color }}
              >
                {filters.priority === opt.value && (
                  <span
                    className="w-3 h-3 rounded-full border-2 bg-transparent"
                    style={{ borderColor: '#151515' }}
                  />
                )}
              </span>
            </span>
            <span className={`text-base font-medium ${filters.priority === opt.value ? 'text-white' : 'text-gray-400'}`}>
              {opt.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  )
}
          {/* {filters.map((f) => (
            <button
              key={f}
              onClick={() => {
                setFilters(f)
                setOpen(false)
              }}
              className={`block w-full text-left px-3 py-1.5 rounded-md transition 
                ${
                  filters.priority.includes(f)
                    ? 'text-green-300 font-medium'
                    : 'hover:bg-gray-800 hover:text-white'
                }`}
            >
              {f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
          ))} */}