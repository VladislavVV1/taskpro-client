'use client'

import { useEffect } from 'react'
import { motion } from 'framer-motion'

export default function BaseModal({ open, onClose, children }) {
  // 1. Lock body scroll
  useEffect(() => {
    if (open) {
      const original = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      return () => { document.body.style.overflow = original }
    }
  }, [open])

  // 2. Close on ESC key
  useEffect(() => {
    const handleEsc = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', handleEsc)
    return () => document.removeEventListener('keydown', handleEsc)
  }, [onClose])

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center px-[5px]"
      onClick={onClose} // outside click
    >
      {/* Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
      />

      {/* Modal content (stop propagation to prevent outside-close) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.2 }}
        onClick={(e) => e.stopPropagation()}
        className="relative z-10 bg-[var(--main-bg)] text-[var(--text)]
                    rounded-xl shadow-xl w-[335px] sm:w-[350px]"
      >
        {children}
      </motion.div>
    </div>
  )
}
