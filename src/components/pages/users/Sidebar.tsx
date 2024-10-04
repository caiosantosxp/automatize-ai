import { Input } from '@/components/ui/input'
import { Plus, UserPlus, Users } from 'lucide-react'
import Link from 'next/link'

export function SideBarUsers() {
  return (
    <>
      <div className="h-screen w-full p-4">
        <Input type="text" className="bg-background" placeholder="Procurar" />

        <div className="mt-4 flex justify-between">
          <h3 className="text-sm font-bold text-muted-foreground">Processos</h3>
          <Plus className="text-muted-foreground" size={16} />
        </div>
        <div className="mt-2 text-sm">
          <ul>
            <li className="mb-2">
              <Link
                href="/processes"
                className="flex items-center gap-2 font-bold text-ring"
              >
                <Users size={16} />
                Todos Usuários
              </Link>
            </li>
            <li className="mb-2">
              <Link
                href="/processes"
                className="flex items-center gap-2 font-bold text-ring"
              >
                <UserPlus size={16} />
                Novo Usuários
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}
