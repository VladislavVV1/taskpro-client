'use client';

export default function Boards() {
 return (
        <div className="flex flex-col h-full">
        <p className="text-[var(--secondary-text)] text-[12px] sm:text-[14px] text-center m-auto px-[20px] sm:px-[0px] sm:max-w-[calc(100%-20%)] md:max-w-[calc(100%-40%)] lg:max-w-[calc(100%-60%)]">
          Before starting your project, it is essential <span className="text-[var(--link)]">to create a board</span> to visualize and track all the necessary tasks and milestones. This board serves as a powerful tool to organize the workflow and ensure effective collaboration among team members.
        </p>
      </div>
    );
}