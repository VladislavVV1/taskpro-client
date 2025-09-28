'use client'

import { motion, AnimatePresence } from "framer-motion"
import SidebarLogo from './SidebarLogo'
import SidebarBoards from './SidebarBoards'
import SidebarSupport from './SidebarSupport'
import SidebarLogout from './SidebarLogout'
import SidebarCreateBoard from './SidebarCreateBoard'

export default function Sidebar({ isOpen, onClose }) {
  return (
    <>
      {/* Desktop sidebar (always visible from md and up) */}
      <aside
        className="
          hidden md:flex
          sticky top-0 h-screen 
          bg-[var(--sidebar-bg)] w-[260px] 
          flex-col flex-shrink-0
          pt-[24px] pb-[24px]
          z-30
        "
      >
        <SidebarLogo />
        <SidebarCreateBoard />
        <div className="flex-1 overflow-y-auto card-scroll">
          <SidebarBoards />
        </div>
          <SidebarSupport />
          <SidebarLogout />
      </aside>

      {/* Mobile sidebar (slide-in/out) */}
      <AnimatePresence>
        {isOpen && (
              <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      onClick={onClose} // outside click
    >
            {/* Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
      />

            {/* Sidebar */}
            <motion.aside
              className="
                fixed left-0 top-0 h-screen 
                bg-[var(--sidebar-bg)] w-[225px] sm:w-[260px]
                flex flex-col flex-shrink-0
                z-49 pt-[14px] pb-[14px]
                sm:pt-[24px] sm:pb-[24px]
                md:hidden
              "
              initial={{ x: -300 }}
              animate={{ x: 0 }}
              exit={{ x: -300 }}
              transition={{ type: "tween", duration: 0.3 }}
            >
              <SidebarLogo />
              <SidebarCreateBoard />
              <div className="flex-1 overflow-y-auto board-scroll">
                <SidebarBoards />
              </div>
                <SidebarSupport />
                <SidebarLogout />

            </motion.aside>
    </div>
        )}
      </AnimatePresence>
    </>
  )
}