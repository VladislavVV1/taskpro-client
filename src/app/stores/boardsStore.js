import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { mockDashboards } from '../mockData/storeMockData'; // Adjust the path as needed

export const useBoardsStore = create(
  persist(
    (set, get) => ({
      boards: [],                 // [{ id, name, columns: [colId, ...] }]
      isLoaded: false,
      activeBoardId: null,

      loadBoards: () => {
        if (get().isLoaded) return;
        // first-time boot from mocks (persist keeps it later)
        const boards = mockDashboards;
        set({ boards, isLoaded: true, activeBoardId: boards[0]?.id ?? null });
      },

      setActiveBoard: (id) => set({ activeBoardId: id }),

      addBoard: (board) =>
        set((s) => ({ boards: [...s.boards, { ...board, columns: [] }], activeBoardId: board.id })),

      editBoard: (id, patch) =>
        set((s) => ({ boards: s.boards.map(b => b.id === id ? { ...b, ...patch } : b) })),

      deleteBoard: (id) =>
        set((s) => {
          const boards = s.boards.filter(b => b.id !== id);
          return { boards, activeBoardId: boards[0]?.id ?? null };
        }),

      // 🔗 attach/detach column IDs (no column data here)
      attachColumn: (boardId, columnId) =>
        set((s) => ({
          boards: s.boards.map(b => {
            if (b.id !== boardId) return b;
            const already = new Set(b.columns);
            if (already.has(columnId)) return b;
            const cols = [...b.columns];
            cols.push(columnId);
            return { ...b, columns: cols };
          })
        })),

      detachColumn: (boardId, columnId) =>
        set((s) => ({
          boards: s.boards.map(b =>
            b.id === boardId ? { ...b, columns: b.columns.filter(id => id !== columnId) } : b
          )
        })),

      reorderColumns: (boardId, from, to) =>
        set((s) => ({
          boards: s.boards.map(b => {
            if (b.id !== boardId) return b;
            const cols = [...b.columns];
            const [moved] = cols.splice(from, 1);
            cols.splice(to, 0, moved);
            return { ...b, columns: cols };
          })
        })),
    }),
    { name: 'boards', storage: createJSONStorage(() => localStorage) }
  )
);