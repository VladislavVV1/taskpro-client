'use client'

import { createContext, useContext, useState, useCallback } from 'react'
import ModalRoot from './ModalRoot'

const ModalContext = createContext(null)

export function ModalProvider({ children }) {
  const [modal, setModal] = useState(null) 
  // modal = { name: 'Filters', props: {...} } or null

  const openModal = useCallback((name, props = {}) => {
    setModal({ name, props })
  }, [])

  const closeModal = useCallback(() => {
    setModal(null)
  }, [])

  return (
    <ModalContext.Provider value={{ modal, openModal, closeModal }}>
      {children}
      {/* Modal Root is always at the top of the DOM */}
      {modal && <ModalRoot modal={modal} closeModal={closeModal} />}
    </ModalContext.Provider>
  )
}

export const useModal = () => useContext(ModalContext)