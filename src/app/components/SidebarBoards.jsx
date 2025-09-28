'use client'
import React from 'react'
import { SlPuzzle } from "react-icons/sl"
import { GoPencil } from "react-icons/go";
import { FiTrash } from "react-icons/fi";
import { useBoardsStore } from '../stores/boardsStore'
import { useRouter } from 'next/navigation'
import { useModal } from './modals/ModalContext'
import { BOARD_ICONS } from '@/app/components/modals/form-constants'
import { EditBoard } from '../lib/apiEditBoard'
import { DeleteBoard } from '../lib/apiDeleteBoard'

export default function SidebarBoards() {
  const boards = useBoardsStore((state) => state.boards);
  const setActiveBoard = useBoardsStore((state) => state.setActiveBoard);
  const activeId = useBoardsStore((state) => state.activeBoardId);
  const router = useRouter();
  const openModal = useModal().openModal;
  const editBoard = useBoardsStore((state) => state.editBoard);
  const deleteBoard = useBoardsStore((state) => state.deleteBoard);
  const activeBoardId = useBoardsStore((state) => state.activeBoardId);

  const getIconComponent = (iconId) => {
    const iconObj = BOARD_ICONS.find(icon => icon.id === iconId);
    const IconComponent = iconObj ? iconObj.Component : SlPuzzle;
    return <IconComponent className="w-[18px] h-[18px] text-[var(--text)]/50 group-hover:text-[var(--logOut-hover)]" />;
  };

  const handleDashboardClick = (id) => {
    if (id === activeId) return;
    setActiveBoard(id)
    router.push(`/board/${id}`)
  }

  const handleBoardUpdate = (title, id, { icon, background }) => {
    openModal('EditBoard', {
      onSubmit: async (values) => {
        const updatedBoard = await EditBoard(id, { name: values.title, icon: values.icon, background: values.background });
        editBoard(id, updatedBoard);
      },
      initialValues: { title, icon: icon || 'puzzle', background: background || 'default' },
    })
  }

  const handleBoardDelete = ({ id, name }) => {
    openModal('ConfirmDelete', {
      onConfirm: async () => {
        const response = await DeleteBoard(id);
        if (response.result) {
          deleteBoard(id);
          if (activeBoardId === id) {
            const newActiveId = useBoardsStore.getState().activeBoardId;
            if (newActiveId) {
              router.push(`/board/${newActiveId}`);
            } else {
              router.push(`/board`);
            }
          }
        }
      },
      resourceName: `the board "${name}"`,
    });
  };

  return (
    <div className="mb-6">
      <ul className="space-y-2">
        {boards.map((dashboard) => (
          <li className={`relative group  h-[61px] pr-2 rounded-[4px] ${dashboard.id === activeId ? 'bg-[var(--selected-board-bg)]' : 'ml-[14px] mr-[14px] sm:ml-[24px] sm:mr-[24px]'}`} key={dashboard.id} onClick={() => handleDashboardClick(dashboard.id)}>
            {dashboard.id === activeId && (
              <>
                <div className="absolute inset-0" />
                <div className="absolute top-0 right-0 w-[4px] h-full bg-[var(--active-board-bg)] rounded-l-[4px]" />
                <div className="relative flex items-center h-full px-[14px] sm:px-[24px] transition cursor-pointer">
                  <span className="mr-4 flex items-center justify-center w-[18px] h-[18px]">
                    {getIconComponent(dashboard.icon)}
                  </span>
                  <span className="font-poppins font-medium text-[14px] leading-[21px] tracking-[-0.02em] text-[var(--text)]">
                    {dashboard.name}
                  </span>
                  <div className="flex items-center gap-2 ml-auto">
                    <button className="w-4 h-4 flex items-center justify-center" onClick={() => handleBoardUpdate(dashboard.name, dashboard.id, { icon: dashboard.icon, background: dashboard.background })}>
                      <GoPencil className="w-4 h-4 text-[var(--text)]/50 hover:text-[var(--link)]" />
                    </button>
                    <button className="w-4 h-4 flex items-center justify-center" onClick={() => handleBoardDelete({ name: dashboard.name, id: dashboard.id })}>
                      <FiTrash className="w-4 h-4 text-[var(--text)]/50 hover:text-red-500" />
                    </button>
                  </div>
                </div>
              </>
            )}
            {dashboard.id !== activeId && (
              <div className="relative flex items-center h-full transition cursor-pointer">
                <span className="mr-4 flex items-center justify-center w-[18px] h-[18px]">
                  {getIconComponent(dashboard.icon)}
                </span>
                <span className="font-poppins font-medium text-[14px] leading-[21px] tracking-[-0.02em] text-[var(--text)]">
                  {dashboard.name}
                </span>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}