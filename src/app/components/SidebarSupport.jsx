// import Cactus from "@/assets/icons/cactus.svg";
// import { IoMdHelpCircleOutline } from "react-icons/io";

// export default function CustomerSupport() {
//   return (
//     <div className="p-[20px] bg-[var(--main-bg)] text-[var(--text)] rounded-2xl">
//         <Cactus className="mb-[14px]" />
//       <p className="mb-2">If you need help with {<span className="text-[var(--link)]">TaskPro</span>}, check out our support resources or reach out to our customer support team.</p>
//     <div className="flex items-center">
//         <IoMdHelpCircleOutline />
//         <button className="text-[var(--text)] ml-2">
//           Need help?
//         </button>
//     </div>
//     </div>
//   );
// }

import React from 'react'
import { IoMdHelpCircleOutline } from "react-icons/io"
import Cactus from "@/assets/icons/cactus.svg"

export default function SidebarSupport() {
  return (
    <div className="
      bg-[var(--main-bg)] text-[var(--text)]
      rounded-2xl p-4 mb-6
    ">
      <Cactus className="mb-[14px]" />
      <p className="text-[14px] mb-[18px]">
        If you need help with <span className="text-[var(--link)]">TaskPro</span>, 
        check our support resources or contact our support team.
      </p>
      <div className="flex items-center">
        <IoMdHelpCircleOutline className="mr-2" />
        <button className="text-[var(--text)] hover:text-[var(--link)] transition">
          Need help?
        </button>
      </div>
    </div>
  )
}