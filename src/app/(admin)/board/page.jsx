'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { IoReturnUpBackOutline } from 'react-icons/io5';

export default function Boards() {
 return (
        <div className="flex flex-col h-full">
        <p className="text-[var(--secondary-text)] text-center m-auto max-w-[calc(100%/2)]">
          Before starting your project, it is essential <span className="text-[var(--link)]">to create a board</span> to visualize and track all the necessary tasks and milestones. This board serves as a powerful tool to organize the workflow and ensure effective collaboration among team members.
        </p>
      </div>
    );
}