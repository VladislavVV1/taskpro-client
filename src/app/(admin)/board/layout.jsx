'use client';
import React, { useEffect, useState, useCallback } from "react";
import Header from "@/app/components/header";
import Sidebar from "@/app/components/sidebar";
import { ModalProvider } from "@/app/components/modals/ModalContext";
import FilterButton from "@/app/components/FilterButton";
import { useBoardFilters } from "@/app/lib/useBoardFilters";
import BoardsRedirector from "@/app/components/boardRedirector"; // <-- Redirector component
export default function BoardLayout({ children }) {
  const { filters, currentBoardId, handleSetFilters } = useBoardFilters();

  return (
    <ModalProvider>
      <BoardsRedirector />
      <div className="h-screen w-screen flex overflow-hidden bg-[var(--main-bg)]">
        <Sidebar />
        <div className="flex flex-col flex-1 min-w-0 min-h-0">
          <Header />
          <main className="flex-1 overflow-x pt-[10px] pb-[10px] pl-[18px] pr-[18px]">
            <div className="flex relative flex-col h-full w-full">
              <div className="absolute top-0 right-0 p-[4px] ml-0.5">
                <FilterButton
                  filters={filters[currentBoardId]}
                  setFilters={(newFilter) => handleSetFilters(newFilter.priority)}
                />
              </div>
              {children}
            </div>
          </main>
        </div>
      </div>
    </ModalProvider>
  );
}
