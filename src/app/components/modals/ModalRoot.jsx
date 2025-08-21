'use client'

import { AnimatePresence } from 'framer-motion'
import BaseModal from './BaseModal'
import EntityFormModal from './EntityFormModal'
import FiltersModal from './filterModal'
import { modalConfigs } from './modal-configs' // Adjust path if needed
import ConfirmDeleteModal from './ConfirmDeleteModal'

export default function ModalRoot({ modal, closeModal }) {
  const { name, props } = modal

  const renderModal = () => {
    // Check if the modal name exists in our config file
    if (modalConfigs[name]) {
      const config = modalConfigs[name]
      return <EntityFormModal config={config} {...props} onClose={closeModal} />
    }
    
    // Handle non-form modals separately
    switch (name) {
      case 'Filters':
        return <FiltersModal {...props} onClose={closeModal} />
      // Add other non-form modals here, e.g., a confirmation dialog
      case 'ConfirmDelete':
        return <ConfirmDeleteModal {...props} onClose={closeModal} />
      default:
        console.warn(`Modal with name "${name}" not found.`);
        return null
    }
  }

  return (
    <AnimatePresence>
      {modal && (
        <BaseModal open={true} onClose={closeModal}>
          {renderModal()}
        </BaseModal>
      )}
    </AnimatePresence>
  )
}