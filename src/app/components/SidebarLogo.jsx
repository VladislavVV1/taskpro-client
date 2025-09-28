import React from 'react'
import { BsFillLightningChargeFill } from "react-icons/bs";

export default function SidebarLogo() {
  return (
    <div className="flex items-center mb-[60px] sm:mb-[50px] gap-[8px] mr-6 ml-6">
      <div className="w-[32px] h-[32px] rounded-lg flex items-center justify-center bg-[var(--logo-bg)]">
        <BsFillLightningChargeFill className="w-[12px] h-[16px] text-[var(--logo-icon)]" />
      </div>
      <h1 className="text-[16px] font-semibold text-[var(--logo-text)] font-poppins tracking-[-0.04em]">
        Task Pro
      </h1>
    </div>
  )
}
