import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import { List, Plus } from 'lucide-react'
import Link from 'next/link'

export function SideBarUser() {
  return (
    <>
      <div className="h-screen w-full p-4">
        <Input type="text" className="bg-background" placeholder="Procurar" />

        <div className="mt-4 flex justify-between">
          <h3 className="text-sm font-bold text-muted-foreground">LIs</h3>
          <Plus className="text-muted-foreground" size={16} />
        </div>
        <div className="mt-2 text-sm">
          <ul>
            <li className="mb-2">
              <Link
                href="/users"
                className="flex items-center gap-2 font-bold text-ring hover:underline"
              >
                <List size={16} />
                Todos os Usuários
              </Link>
            </li>
            <li className="mb-2">
              <Link
                href="/users/new"
                className="flex items-center gap-2 font-bold text-ring hover:underline"
              >
                <Plus size={16} />
                Novo Usuários
              </Link>
            </li>

            <Separator orientation="horizontal" className="my-2" />
            {/* <li className="mb-2">
              <Link
                href="/processes/new"
                className="flex items-center gap-2 font-bold"
              >
                <Plus size={16} />
                Novo processos
              </Link>
            </li> */}
          </ul>
        </div>
      </div>
    </>
  )
}
