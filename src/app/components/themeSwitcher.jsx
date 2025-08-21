'use client'

import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/react'
import { useTheme } from 'next-themes'

const themes = ['light', 'dark', 'violet']

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()

  return (
    <Menu as="div" className="relative mr-4">
      <MenuButton className="flex items-center gap-1 text-[var(--secondary-text)] hover:text-green-700">
        Theme
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </MenuButton>

      <MenuItems className="absolute top-full mt-2 w-32 bg-[#111] text-gray-400 rounded-xl p-2 shadow-lg z-50">
        {themes.map((t) => (
          <MenuItem key={t}>
            {({ active }) => (
              <button
                onClick={() => setTheme(t)}
                className={`block w-full text-left px-3 py-1.5 rounded-md transition 
                  ${theme === t ? 'text-green-300 font-medium' : ''}
                  ${active && theme !== t ? 'bg-gray-800 text-white' : ''}
                `}
              >
                {t.charAt(0).toUpperCase() + t.slice(1)}
              </button>
            )}
          </MenuItem>
        ))}
      </MenuItems>
    </Menu>
  )
}