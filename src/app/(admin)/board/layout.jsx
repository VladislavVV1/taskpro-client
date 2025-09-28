'use client';
import Header from "@/app/components/header";
import Sidebar from "@/app/components/sidebar";
import { ModalProvider } from "@/app/components/modals/ModalContext";
import FilterButton from "@/app/components/FilterButton";
import { useBoardFilters } from "@/app/lib/useBoardFilters";
import BoardsRedirector from "@/app/components/boardRedirector";
import { useState } from "react";

export default function BoardLayout({ children }) {
  const { filters, currentBoardId, handleSetFilters } = useBoardFilters();
const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <ModalProvider>
      <BoardsRedirector />
      <div className="h-screen w-screen flex overflow-hidden bg-[var(--main-bg)]">

        {/* Sidebar (mobile/slide) */}
        <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

        {/* Main Content */}
        <div className="flex flex-col flex-1 min-w-0 min-h-0">
          <Header
            isSidebarOpen={isSidebarOpen}
            setSidebarToggle={() => setIsSidebarOpen((prev) => !prev)}
          />
          <main className="flex-1">
            <div className="flex relative flex-col h-full w-full">
              <div
                style={{
                  zIndex: 10,
                  paddingTop: "14px",
                  paddingRight: "24px",
                }}
                className="absolute top-0 right-0"
              >
                <FilterButton
                  filters={filters[currentBoardId]}
                  setFilters={(newFilter) =>
                    handleSetFilters(newFilter.priority)
                  }
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