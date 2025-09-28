import Link from "next/link";
import React, { use } from "react";

export default function AuthLayout({ children, activeTab }) {
  return (
    // Main container to center the form
    <div className="flex items-center justify-center min-h-screen p-[20px]">
      {/* Form container from Figma */}
      <div className="bg-[#151515] rounded-lg p-10 w-[424px]">
        {/* Tab-like navigation */}
        <div className="flex gap-4 mb-10">
          {activeTab === 'register' ? (
            <>
              <h2 className="font-medium text-lg text-white tracking-tight">Registration</h2>
              <Link href="/login" className="font-medium text-lg text-white/30 hover:text-white tracking-tight">
                Log In
              </Link>
            </>
          ) : (
            <>
              <h2 className="font-medium text-lg text-white tracking-tight">Log in</h2>
              <Link href="/register" className="font-medium text-lg text-white/30 hover:text-white tracking-tight">
                Registration
              </Link>
            </>
          )}
        </div>
        {children}


      </div>
    </div>
  );
}