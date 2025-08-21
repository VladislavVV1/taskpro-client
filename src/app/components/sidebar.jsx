'use client'

import SidebarLogo from './SidebarLogo'
import SidebarBoards from './SidebarBoards'
import SidebarSupport from './SidebarSupport'
import SidebarLogout from './SidebarLogout'

export default function Sidebar() {
  return (
    <aside className="
      sticky top-0 h-screen 
      bg-[var(--sidebar-bg)] w-64 
      flex-shrink-0 flex flex-col justify-between
      z-50
      pt-[24px] pb-[24px]
    ">
      <div className="">
      {/* Logo */}
      <SidebarLogo />

      {/* Boards */}
      <SidebarBoards />
      </div>

      <div className="ml-6 mr-6">
      {/* Customer Support */}
      <SidebarSupport />
      {/* Logout Button */}
      <SidebarLogout />
      </div>
    </aside>
  );
}

// 'use client'

// import SidebarLogo from './SidebarLogo'
// import SidebarBoards from './SidebarBoards'
// import SidebarSupport from './SidebarSupport'
// import SidebarLogout from './SidebarLogout'

// export default function Sidebar() {
//   return (
//     <aside className="
//       sticky top-0 h-screen
//       bg-[var(--sidebar-bg)] w-64
//       p-6 flex-shrink-0 flex flex-col
//       z-50
//     ">
//       <SidebarLogo />
//       <SidebarBoards />
//       <SidebarSupport />
//       <SidebarLogout />
//     </aside>
//   )
// }