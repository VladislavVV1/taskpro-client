import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { mockColumns } from '@/app/mockData/storeMockData';

export const useColumnsStore = create(
  persist(
    (set, get) => ({
      columns: [], // [{ id, name, cards: [cardId, ...] }]
      isLoaded: false,

        loadColumns: (columns) => {
          if (!columns) {
            return;
          }
          const prevColumns = get().columns;
          // Check if any column already exists by id
          const newColumns = columns.filter(col => !prevColumns.some(prev => prev.id === col.id));
          if (newColumns.length === 0) {
            return; // All columns already exist
          }
          set({ columns: [...prevColumns, ...newColumns] });
        },

      addColumn: (column) =>
        set((s) => ({ columns: [...s.columns, { ...column, cards: column.cards ?? [] }] })),

      editColumn: (id, patch) =>
        set((s) => ({ columns: s.columns.map(c => c.id === id ? { ...c, ...patch } : c) })),

      deleteColumn: (id) =>
        set((s) => ({ columns: s.columns.filter(c => c.id !== id) })),

      // 🔗 attach/detach card IDs in a column
      addCardIdToColumn: (columnId, cardId, index) =>
        set((s) => ({
          columns: s.columns.map(c => {
            if (c.id !== columnId) return c;
            if (c.cards.includes(cardId)) return c;
            const cards = [...c.cards];
            if (typeof index === 'number') cards.splice(index, 0, cardId);
            else cards.push(cardId);
            return { ...c, cards };
          })
        })),

      removeCardIdFromColumn: (columnId, cardId) =>
        set((s) => ({
          columns: s.columns.map(c =>
            c.id === columnId ? { ...c, cards: c.cards.filter(id => id !== cardId) } : c
          )
        })),

      reorderCards: (columnId, from, to) =>
        set((s) => ({
          columns: s.columns.map(c => {
            if (c.id !== columnId) return c;
            const cards = [...c.cards];
            const [moved] = cards.splice(from, 1);
            cards.splice(to, 0, moved);
            return { ...c, cards };
          })
        })),
    }),
    { name: 'columns', storage: createJSONStorage(() => localStorage) }
  )
);