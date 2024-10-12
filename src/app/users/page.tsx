import { HeaderUser } from '@/components/pages/users/HeaderUsers'
import { SideBarUser } from '@/components/pages/users/SidebarUsers'
import { User } from '@/components/users/User'

export default function Users() {
  return (
    <div className="flex">
      <div className="h-[calc(100vh)] min-w-60 bg-muted">
        <SideBarUser />
      </div>
      <div className="h-[calc(100vh-4rem)] w-full overflow-auto bg-background">
        <HeaderUser />
        <div className="m-auto flex w-[70%] flex-wrap gap-4 p-4 font-[family-name:var(--font-geist-sans)]">
          <User />
        </div>
      </div>
    </div>
  )
}
