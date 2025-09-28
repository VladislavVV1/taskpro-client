import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { mockCards } from '@/app/mockData/storeMockData';

export const useCardsStore = create(
  persist(
    (set, get) => ({
      cards: [], // [{ id, title, description, priority, deadline }]
      isLoaded: false,

        loadCards: (cards) => {
          console.log('Loading cards...');
          if (!cards) {
            return;
          }
          const prevCards = get().cards;
          // Check if any card already exists by id
          const newCards = cards.filter(card => !prevCards.some(prev => prev.id === card.id));
          if (newCards.length === 0) {
            return; // All cards already exist
          }
          set({ cards: [...prevCards, ...newCards] });
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