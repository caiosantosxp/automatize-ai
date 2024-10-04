import { Input } from '@/components/ui/input'
import { List, Plus } from 'lucide-react'
import Link from 'next/link'

interface Responsavel {
  id: string
  avatar: string
}

export type Payment = {
  id: string
  situation: 'started' | 'finalized'
  status: 'pending ce' | 'pending ship' | 'pending li' | 'pending transport'
  referencia: string
  client: string
  type: 'importation' | 'exportation'
  importador: string
  invoice_number?: string
  fornecedor?: string
  li?: string // vai vim como uma lista
  obs_li?: string
  ce_master?: number
  ce_house?: number
  hbl?: string
  mbl?: string
  container?: string // vai vim como lista
  armador?: string
  agente?: string
  data_final_free_time?: string
  navio?: string
  chegada_terminal?: string
  descargar?: boolean
  presença?: boolean
  mapa?: string
  di?: string
  due?: string
  data_di?: string
  canal?: string
  desembaraco?: string
  fluxo?: string
  originais?: string
  demanda_cliente?: string
  operacional?: string
  data_numerario?: string
  tempo_free_time?: number
  economia?: string
  responsavel?: Responsavel[] // vai vim em lista
}

type Props = {
  data: Payment[] // Propriedade esperada
}

export function SideBarProcesses({ data }: Props) {
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
                <List size={16} />
                Todos processos
              </Link>
            </li>
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
              <li key={item.id + index} className="mb-1">
                <Link
                  href={`/processes/${item.referencia}`}
                  className="flex items-center gap-2"
                >
                  <span className="flex h-5 w-5 items-center justify-center rounded bg-emerald-500 p-1 text-xs uppercase text-muted">
                    {item.client.slice(0, 2)}
                  </span>
                  {item.referencia}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}
