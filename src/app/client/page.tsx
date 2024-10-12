import { Client } from '@/components/pages/cliente/Client'
import { HeaderClient } from '@/components/pages/cliente/HeaderClient'
import { SideBarClient } from '@/components/pages/cliente/SidebarClient'

export default function Users() {
  return (
    <div className="flex">
      <div className="h-[calc(100vh)] min-w-60 bg-muted">
        <SideBarClient />
      </div>
      <div className="h-[calc(100vh-4rem)] w-full overflow-auto bg-background">
        <HeaderClient />
        <div className="m-auto flex w-[70%] flex-wrap gap-4 p-4 font-[family-name:var(--font-geist-sans)]">
          <Client />
          <Client />
          <Client />
          <Client />
          <Client />
          <Client />
        </div>
      </div>
    </div>
  )
}
