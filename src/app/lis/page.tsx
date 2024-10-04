import { Header } from '@/components/pages/lis/Header'
import { SideBarLis } from '@/components/pages/lis/Sidebar'

export default function Li() {
  return (
    <div className="flex">
      <div className="h-[calc(100vh)] min-w-60 bg-muted">
        <SideBarLis />
      </div>
      <div className="h-[calc(100vh-4rem)] w-full overflow-auto bg-background">
        <Header />
      </div>
    </div>
  )
}
