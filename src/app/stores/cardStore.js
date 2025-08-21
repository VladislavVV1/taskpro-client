import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { mockCards } from '@/app/mockData/storeMockData';

export const useCardsStore = create(
  persist(
    (set, get) => ({
      cards: [], // [{ id, title, description, priority, deadline }]
      isLoaded: false,

      loadCards: () => {
        if (get().isLoaded) return;
        set({ cards: mockCards, isLoaded: true });
      },

      addCard: (card) =>
        set((s) => ({ cards: [...s.cards, card] })),

      editCard: (id, patch) =>
        set((s) => ({ cards: s.cards.map(card => card.id === id ? { ...card, ...patch } : card) })),

      deleteCard: (id) =>
        set((s) => ({ cards: s.cards.filter(card => card.id !== id) })),
    }),
    { name: 'cards', storage: createJSONStorage(() => localStorage) }
  )
);