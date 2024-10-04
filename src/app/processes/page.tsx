'use client'

import { SideBarProcesses } from '@/components/pages/processes/Sidebar'
import { ProcessesList } from '@/components/pages/processes/ProcessesList'
import { Header } from '@/components/pages/processes/Header'

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

const data: Payment[] = [
  {
    id: 'INV-BR-20241003-1',
    referencia: 'INV-BR-20241003-1',
    situation: 'started',
    client: 'MAERSK',
    importador: 'COSCO',
    type: 'importation',
    chegada_terminal: '03/10/2024',
    mapa: 'liberado',
    canal: 'verde',
    status: 'pending ce',
    responsavel: [
      {
        id: 'responsavel2',
        avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
      },
      {
        id: 'responsavel3',
        avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
      },
    ],
  },
  {
    id: 'INV-BR-20240903-2',
    referencia: 'INV-BR-20241003-1',
    situation: 'started',
    client: 'MAERSK',
    importador: 'COSCO',
    type: 'importation',
    chegada_terminal: '03/10/2024',
    mapa: 'liberado',
    canal: 'verde',
    status: 'pending ce',
    responsavel: [
      {
        id: 'responsavel2',
        avatar: 'https://randomuser.me/api/portraits/men/4.jpg',
      },
      {
        id: 'responsavel3',
        avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
      },
    ],
  },
  {
    id: 'INV-BR-20241003-6',
    referencia: 'INV-BR-20241003-1',
    situation: 'started',
    client: 'COSCO',
    importador: 'maxx',
    type: 'importation',
    chegada_terminal: '03/10/2024',
    mapa: 'liberado',
    canal: 'verde',
    status: 'pending ce',
    responsavel: [
      {
        id: 'responsavel2',
        avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
      },
      {
        id: 'responsavel3',
        avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
      },
    ],
  },
  {
    id: 'INV-BR-20241003-1',
    referencia: 'INV-BR-20241003-1',
    situation: 'started',
    client: 'CLIPPPER',
    importador: 'maxx',
    type: 'importation',
    chegada_terminal: '03/10/2024',
    mapa: 'liberado',
    canal: 'verde',
    status: 'pending ce',
    responsavel: [
      {
        id: 'responsavel2',
        avatar: 'https://github.com/caiosantosxp.png',
      },
      {
        id: 'responsavel3',
        avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
      },
      {
        id: 'responsavel3',
        avatar: 'https://randomuser.me/api/portraits/women/3.jpg',
      },
      {
        id: 'responsavel3',
        avatar: 'https://randomuser.me/api/portraits/women/3.jpg',
      },
    ],
  },
  {
    id: 'INV-BR-20241003-9',
    referencia: 'INV-BR-20241003-1',
    situation: 'started',
    client: 'CLIPPER',
    importador: 'maxx',
    type: 'importation',
    chegada_terminal: '03/10/2024',
    mapa: 'liberado',
    canal: 'verde',
    status: 'pending ce',
    responsavel: [
      {
        id: 'responsavel2',
        avatar: 'https://randomuser.me/api/portraits/men/6.jpg',
      },
    ],
  },
  {
    id: 'INV-BR-20241003-1',
    referencia: 'INV-BR-20241003-1',
    situation: 'started',
    client: 'MAERSK',
    importador: 'maxx',
    type: 'importation',
    chegada_terminal: '03/10/2024',
    mapa: 'liberado',
    canal: 'verde',
    status: 'pending ce',
    responsavel: [
      {
        id: 'responsavel2',
        avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
      },
    ],
  },
  {
    id: 'INV-BR-20241003-1',
    referencia: 'INV-BR-20241003-1',
    situation: 'started',
    client: 'COSCO',
    importador: 'maxx',
    type: 'importation',
    chegada_terminal: '03/10/2024',
    mapa: 'liberado',
    canal: 'verde',
    status: 'pending ce',
    responsavel: [
      {
        id: 'responsavel2',
        avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
      },
      {
        id: 'responsavel3',
        avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
      },
    ],
  },
  {
    id: 'INV-BR-20241003-8',
    referencia: 'INV-BR-20241003-1',
    situation: 'started',
    client: 'COSCO',
    importador: 'maxx',
    type: 'importation',
    chegada_terminal: '03/10/2024',
    mapa: 'liberado',
    canal: 'verde',
    status: 'pending ce',
    responsavel: [
      {
        id: 'responsavel2',
        avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
      },
      {
        id: 'responsavel3',
        avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
      },
    ],
  },
  {
    id: 'INV-BR-20241003-1',
    referencia: 'INV-BR-20241003-1',
    situation: 'started',
    client: 'HAMBUGER',
    importador: 'maxx',
    type: 'importation',
    chegada_terminal: '03/10/2024',
    mapa: 'liberado',
    canal: 'verde',
    status: 'pending ce',
    responsavel: [
      {
        id: 'responsavel2',
        avatar: 'https://randomuser.me/api/portraits/men/3.jpg',
      },
      {
        id: 'responsavel3',
        avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
      },
      {
        id: 'responsavel3',
        avatar: 'https://randomuser.me/api/portraits/women/4.jpg',
      },
    ],
  },
  {
    id: 'INV-BR-20241003-1',
    referencia: 'INV-BR-20241003-1',
    situation: 'started',
    client: 'CLIPPER',
    importador: 'maxx',
    type: 'importation',
    chegada_terminal: '03/10/2024',
    mapa: 'liberado',
    canal: 'verde',
    status: 'pending ce',
    responsavel: [
      {
        id: 'responsavel2',
        avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
      },
      {
        id: 'responsavel3',
        avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
      },
    ],
  },
  {
    id: 'INV-BR-20241003-1',
    referencia: 'INV-BR-20241003-1',
    situation: 'started',
    client: 'ALFA',
    importador: 'maxx',
    type: 'importation',
    chegada_terminal: '03/10/2024',
    mapa: 'liberado',
    canal: 'verde',
    status: 'pending ce',
    responsavel: [
      {
        id: 'responsavel2',
        avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
      },
      {
        id: 'responsavel3',
        avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
      },
    ],
  },
]

export default function Processes() {
  return (
    <div className="flex">
      <div className="h-[calc(100vh)] min-w-60 bg-muted">
        <SideBarProcesses data={data} />
      </div>
      <div className="h-[calc(100vh-4rem)] w-full overflow-auto bg-background">
        <Header />

        <ProcessesList data={data} />
      </div>
    </div>
  )
}
