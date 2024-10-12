import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import { List, Plus } from 'lucide-react'
import Link from 'next/link'

interface Responsavel {
  id: string
  avatar: string
}

export type liProps = {
  id: string
  number_li: string
  status: 'pending' | 'pending payment' | 'to analyze' | 'granted'
  referencia: string
  client: string
  ncm: string
  data_registro: string
  responsavel?: Responsavel[] // vai vim em lista
}

type Props = {
  data: liProps[] // Propriedade esperada
}

export function SideBarLis({ data }: Props) {
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
                href="/processes"
                className="flex items-center gap-2 font-bold text-ring hover:underline"
              >
                <List size={16} />
                Todas Clientes
              </Link>
            </li>
            <li className="mb-2">
              <Link
                href="/lis/new"
                className="flex items-center gap-2 font-bold text-ring hover:underline"
              >
                <Plus size={16} />
                Novo Cliente
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

            {data.map((item, index) => (
              <li
                key={item.id + index}
                className="mb-1 font-[family-name:var(--font-geist-mono)] text-xs"
              >
                <Link
                  href={`/processes/${item.referencia}`}
                  className="flex items-center gap-2"
                >
                  <span className="flex h-5 w-5 items-center justify-center rounded bg-emerald-500 p-1 font-[family-name:var(--font-geist-mono)] text-xs uppercase text-muted">
                    {item.client.slice(0, 2)}
                  </span>
                  {item.number_li}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}
