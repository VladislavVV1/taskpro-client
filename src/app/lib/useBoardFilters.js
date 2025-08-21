import { useEffect, useState, useCallback } from "react";
import { useRouter, usePathname } from 'next/navigation';

export function useBoardFilters() {
  const router = useRouter();
  const pathname = usePathname();
  const currentBoardId = pathname.split('/').pop(); // Assuming boardId is third segment

  const [filters, setFilters] = useState({
    [currentBoardId]: { priority: 'ALL' }
  });

  // Load filter from localStorage on board change
  useEffect(() => {
    const saved = localStorage.getItem(`boardFilters:${currentBoardId}`);
    if (saved) {
      const parsed = JSON.parse(saved);
      setFilters(prev => ({
        ...prev,
        [currentBoardId]: parsed
      }));
      updateUrlPriority(parsed.priority);
    } else {
      // No saved filter, default to ALL
      setFilters(prev => ({
        ...prev,
        [currentBoardId]: { priority: 'ALL' }
      }));
      updateUrlPriority('ALL');
    }
    // eslint-disable-next-line
  }, [currentBoardId]);

  const updateUrlPriority = (priority) => {
    const params = new URLSearchParams(window.location.search);
    params.set('priority', priority);
    router.replace(`?${params.toString()}`);
  };

  const handleSetFilters = useCallback((priority) => {
    const newFilter = { priority };
    setFilters(prev => ({
      ...prev,
      [currentBoardId]: newFilter
    }));
    localStorage.setItem(`boardFilters:${currentBoardId}`, JSON.stringify(newFilter));
    updateUrlPriority(priority);
// eslint-disable-next-line
  }, [currentBoardId]);

  return {
    filters,
    currentBoardId,
    handleSetFilters,
  };
}