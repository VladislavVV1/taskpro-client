'use client'

import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/react'
import { useTheme } from 'next-themes'

const themes = ['light', 'dark', 'violet']

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()

  return (
    <Menu as="div" className="relative mr-4">
      <MenuButton className="flex items-center gap-1 text-[var(--theme-text)] hover:text-[var(--link)]">
        Theme
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </MenuButton>

      <MenuItems className="absolute top-full mt-2 w-32 bg-[var(--theme-background)] rounded-xl p-2 shadow-lg z-50 border-[1px] border-[var(--theme-border)]">
        {themes.map((t) => (
          <MenuItem key={t}>
            {({ active }) => (
              <button
                onClick={() => setTheme(t)}
                className={`block w-full text-left px-3 py-1.5 rounded-md transition 
                  ${theme === t ? 'text-[var(--link)] font-medium' : ''}
                  ${active && theme !== t ? 'text-[var(--theme-hover)]' : ''}
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