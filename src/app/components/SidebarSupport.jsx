import React from 'react'
import { IoMdHelpCircleOutline } from "react-icons/io"
import Cactus from "@/assets/icons/cactus.svg"
import { useModal } from './modals/ModalContext'
import { NeedHelp } from '@/app/lib/apiNeedHelp'

export default function SidebarSupport() {
  const { openModal } = useModal()

  const handleNeedHelp = () => {
    openModal('NeedHelp', {
      onSubmit: async (values) => {
        console.log('Sending help request:', values);
        NeedHelp({email: values.email, comment: values.comment});
      },
    });
  };

  return (
    <div className="
      bg-[var(--need-help-bg)] text-[var(--text)]
      rounded-2xl p-[14px] sm:p-[20px] mb-[24px] mt-[14px]
      ml-[14px] mr-[14px] sm:ml-[24px] sm:mr-[24px]
    ">
      <Cactus className="w-[54px] h-[78px] mb-[14px] z-50 bg-amber-100/20" />
      <p className="text-[12px] sm:text-[14px] mb-[18px]">
        If you need help with <span className="text-[var(--link)]">TaskPro</span>, 
        check our support resources or contact our support team.
      </p>
      <div className="flex items-center">
        <IoMdHelpCircleOutline className="mr-2" />
        <button onClick={handleNeedHelp} className="text-[var(--text)] hover:text-[var(--link)] transition">
          Need help?
        </button>
      </div>
    </div>
  )
}