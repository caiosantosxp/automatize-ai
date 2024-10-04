import { Header } from '@/components/pages/users/Header'
import { SideBarUsers } from '@/components/pages/users/Sidebar'
import { User } from '@/components/users/User'

export default function Users() {
  return (
    <div className="flex">
      <div className="h-[calc(100vh)] min-w-60 bg-muted">
        <SideBarUsers />
      </div>
      <div className="h-[calc(100vh-4rem)] w-full overflow-auto bg-background">
        <Header />
        <div className="m-auto flex w-[70%] flex-wrap gap-4 p-4 font-[family-name:var(--font-geist-sans)]">
          <User />
          <User />
          <User />
          <User />
          <User />
          <User />
          <User />
        </div>
      </div>
    </div>
  )
}
