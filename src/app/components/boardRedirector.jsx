'use client';
import { useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useBoardsStore } from '@/app/stores/boardsStore'; // Zustand store

export default function BoardsRedirector() {
  const router = useRouter();
  const pathname = usePathname();
  const { boards, activeBoardId, isLoaded, loadBoards } = useBoardsStore();

  useEffect(() => {
    // Load boards once when component mounts
    loadBoards();
  }, [loadBoards]);

  useEffect(() => {
    // ✅ Only run after boards have been loaded
    if (!isLoaded) return;

    // If we're exactly on /board and have boards, redirect
    if (pathname === '/board' && boards.length > 0) {
      router.replace(`/board/${activeBoardId}`);
    }
  }, [pathname, boards, activeBoardId, isLoaded, router]);

  return null; // This component doesn't render UI, only handles redirect
}