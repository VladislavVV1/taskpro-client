'use client'
import React, { useEffect, useState } from 'react'
import { SlPuzzle } from "react-icons/sl"
import { IoIosAdd } from "react-icons/io"
import { useRouter } from 'next/navigation'
import { GoPencil } from "react-icons/go";
import { FiTrash } from "react-icons/fi";
import { useBoardsStore } from '../stores/boardsStore'
import { useModal } from './modals/ModalContext'
export default function SidebarBoards() {
  const boards = useBoardsStore((state) => state.boards);
  const setActiveBoard = useBoardsStore((state) => state.setActiveBoard);
  const activeId = useBoardsStore((state) => state.activeBoardId);
  const router = useRouter();
  const openModal = useModal().openModal;
  const addBoard = useBoardsStore((state) => state.addBoard);
  const editBoard = useBoardsStore((state) => state.editBoard);
  const deleteBoard = useBoardsStore((state) => state.deleteBoard);
  const activeBoardId = useBoardsStore((state) => state.activeBoardId);

  const handleDashboardClick = (id) => {    
    if (id === activeId) return; // Don't re-set if already active
    setActiveBoard(id)
    router.push(`/board/${id}`)
  }

const handleAddNewBoard = () => {
  openModal('AddNewBoard', {
    onSubmit: (values) => {
      const id = "board-" + Date.now();
      console.log('Adding new board:', values);
      addBoard({
        id,
        name: values.title,
        icon: values.icon,
        background: values.background,
      });
      router.push(`/board/${id}`);
    },
  });
};

  const handleBoardUpdate = (title, id) => {
    openModal('EditBoard', {
      onSubmit: async (values) => {
        editBoard(id, { name: values.title });
        // await api.boards.update(id, values)
      },
      initialValues: { title },
    })
  }

const handleBoardDelete = ({ id, name }) => {
  openModal('ConfirmDelete', {
    // Both props are now inside this single object
    onConfirm: async () => {
      console.log('Deleting board:', id);
      deleteBoard(id);
      // await api.boards.delete(id)
      // Redirect if needed
      if (activeBoardId === id) {
    const newActiveId = useBoardsStore.getState().activeBoardId;
    if (newActiveId) {
      router.push(`/board/${newActiveId}`);
    } else {
      router.push(`/board`); // Or a "no boards" page
    }
  }
    },
    resourceName: `the board "${name}"`,
  });
};
  console.log('Boards in Sidebar:', boards);
  return (
    <div className="mb-6">
      <p className="text-[12px] text-[var(--text)] opacity-50 mb-[8px] ml-6 mr-6">My boards</p>
      {boards.length > 0 ? (
        <>
        {/* Create New Board Button */}
          <div className="relative w-[212px] h-[70px] mb-[40px] ml-6 mr-6">
            {/* Top border */}
            <div className="absolute left-0 top-0 w-full border-t" style={{ borderColor: 'var(--text)', opacity: 0.1 }} />
            {/* Bottom border */}
            <div className="absolute left-0 bottom-0 w-full border-t" style={{ borderColor: 'var(--text)', opacity: 0.1 }} />

            <div className="flex items-center justify-between h-full px-0">
              {/* Text */}
              <span
                className="absolute left-0 top-[14px] w-[76px] h-[42px] font-medium text-[14px] leading-[21px] tracking-[-0.02em] text-[var(--text)]"
                style={{ whiteSpace: 'pre-line' }}
              >
                Create a
                <br />
                new board
              </span>
              {/* Plus button */}
              <button
                onClick={handleAddNewBoard}
                className="absolute right-0 top-[19px] w-[40px] h-[36px] bg-[var(--add-board-bg)] hover:bg-[var(--add-board-bg-hover)] rounded-[6px] flex items-center justify-center"
              >
                <IoIosAdd className="w-[20px] h-[20px] text-[var(--add-board-icon)]" />
              </button>
            </div>
          </div>
          {/* Dashboard List */}
          <ul className="space-y-2 max-h-[calc(100vh-560px)] overflow-y-auto board-scroll">
            {boards.map((dashboard) => (
              <li className={`relative group  h-[61px] pr-2 rounded-[4px] ${dashboard.id === activeId ? 'bg-[var(--main-bg)]' : 'ml-6 mr-6'}`} key={dashboard.id} onClick={() => handleDashboardClick(dashboard.id)}>
                {/* Background for active board */}
                {dashboard.id === activeId && (
                  <>
                    <div className="absolute inset-0" />
                    {/* Right highlight for active board */}
                    <div className="absolute top-0 right-0 w-[4px] h-full bg-[var(--active-board-bg)] rounded-l-[4px]" />
                    {/* Content */}
                <div className="relative flex items-center h-full px-6">
                  {/* Icon */}
                  <span className="mr-4 flex items-center justify-center w-[18px] h-[18px]">
                    {/* Replace with your SVG or icon */}
                    <SlPuzzle className="w-[18px] h-[18px] text-[var(--text)]" />
                  </span>
                  {/* Board name */}
                  <span className="font-poppins font-medium text-[14px] leading-[21px] tracking-[-0.02em] text-[var(--text)]">
                    {dashboard.name}
                  </span>
                  {/* Action icons */}
                  <div className="flex items-center gap-2 ml-auto">
                    <button className="w-4 h-4 flex items-center justify-center" onClick={() => handleBoardUpdate(dashboard.name, dashboard.id)}>
                      <GoPencil className="w-4 h-4 text-[var(--text)]/50 hover:text-[var(--link)]" />
                    </button>
                    <button className="w-4 h-4 flex items-center justify-center" onClick={() => handleBoardDelete({ name: dashboard.name, id: dashboard.id })}>
                      <FiTrash className="w-4 h-4 text-[var(--text)]/50 hover:text-[var(--link)]" />
                    </button>
                  </div>
                </div>
                  </>
                )}
                {/* Default content for non-active boards */}
                {dashboard.id !== activeId && (
                  <div className="relative flex items-center h-full transition cursor-pointer">
                    <span className="mr-4 flex items-center justify-center w-[18px] h-[18px]">
                      <SlPuzzle className="w-[18px] h-[18px] text-[var(--text)]/50 group-hover:text-[var(--logOut-hover)]" />
                    </span>
                    <span className="font-poppins font-medium text-[14px] leading-[21px] tracking-[-0.02em] text-[var(--text)]">
                      {dashboard.name}
                    </span>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </>
      ) : (
        /* Empty State */
        <button
          onClick={handleAddNewBoard}
          className="
            flex items-center w-full px-3 py-2 rounded-lg
            text-[var(--text)] hover:bg-white/10 transition
          "
        >
          <IoIosAdd className="w-5 h-5 mr-2 text-[var(--link)]" />
          Create a new board
        </button>
      )}
    </div>
  )
}