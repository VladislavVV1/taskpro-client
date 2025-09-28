'use client'
import { IoIosAdd } from "react-icons/io";
import { useModal } from './modals/ModalContext';
import { AddNewBoard } from '../lib/apiAddNewBoard';
import { useBoardsStore } from '../stores/boardsStore';
import { useRouter } from 'next/navigation';

export default function SidebarCreateBoard() {
  const openModal = useModal().openModal;
  const addBoard = useBoardsStore((state) => state.addBoard);
  const router = useRouter();

  const handleAddNewBoard = () => {
    openModal('AddNewBoard', {
      onSubmit: async (values) => {
        const data = { name: values.title, icon: values.icon, background: values.background };
        const newBoard = await AddNewBoard(data);
        addBoard(newBoard);
        router.push(`/board/${newBoard.id}`);
      },
    });
  };

  return (
    <div className="relative w-[197px] sm:w-[212px] h-full max-h-[70px] mb-[40px] ml-[14px] mr-[14px] sm:ml-[24px] sm:mr-[24px] pb-[10px]">
      <div className="absolute left-0 top-0 w-full border-t" style={{ borderColor: 'var(--text)', opacity: 0.1 }} />
      <div className="absolute left-0 bottom-0 w-full border-t" style={{ borderColor: 'var(--text)', opacity: 0.1 }} />
      <div className="flex items-center justify-between h-full px-0 mb-[20px]">
        <span
          className="absolute left-0 top-[14px] w-[76px] h-[42px] font-medium text-[14px] leading-[21px] tracking-[-0.02em] text-[var(--text)]"
          style={{ whiteSpace: 'pre-line' }}
        >
          Create a
          <br />
          new board
        </span>
        <button
          onClick={handleAddNewBoard}
          className="absolute right-0 top-[19px] w-[40px]  h-[36px] bg-[var(--add-board-bg)] hover:bg-[var(--add-board-bg-hover)] rounded-[6px] flex items-center justify-center"
        >
          <IoIosAdd className="w-[20px] h-[20px] text-[var(--add-board-icon)]" />
        </button>
      </div>
      <p className="text-[12px] text-[var(--text)] opacity-50">My boards</p>
    </div>
  );
}