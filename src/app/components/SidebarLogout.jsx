'use client';
import { AiOutlineLogin } from "react-icons/ai";

import { useRouter } from 'next/navigation';
import { fakeAuthLogout } from '@/app/lib/authService';

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = () => {
    fakeAuthLogout(router);
    // router.push('/login');
  };

  return (
    <button
      onClick={handleLogout}
      className="group flex items-center px-4 py-2 rounded-lg text-[var(--text)] bg-[var(--bg)]"
    >
      <AiOutlineLogin className="w-6 h-6 inline-block mr-2 text-[var(--active-board-bg)] group-hover:text-[var(--logOut-hover)]" />
      Log Out
    </button>
  );
}