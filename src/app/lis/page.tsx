import { HeaderLis } from '@/components/pages/lis/HeaderLis'
import { LiList } from '@/components/pages/lis/Lis'
import { SideBarLis } from '@/components/pages/lis/SidebarLis'

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

const data: liProps[] = [
  {
    id: 'asd65as6d56asd',
    number_li: '24/25652545-6',
    referencia: 'INV-BR-20241003-1',
    status: 'pending payment',
    client: 'MAERSK',
    ncm: '4011.20.90',
    data_registro: '10-10-2024',
    responsavel: [
      {
        id: 'responsavel2',
        avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
      },
    ],
  },
  {
    id: 'asd65as6d56asd',
    number_li: '24/25652545-6',
    referencia: 'INV-BR-20241003-1',
    status: 'granted',
    client: 'MAERSK',
    ncm: '4011.20.90',
    data_registro: '10-10-2024',
    responsavel: [
      {
        id: 'responsavel2',
        avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
      },
    ],
  },
  {
    id: 'asd65as6d56asd',
    number_li: '24/25652545-6',
    referencia: 'INV-BR-20241003-1',
    status: 'pending',
    client: 'MAERSK',
    ncm: '4011.20.90',
    data_registro: '10-10-2024',
    responsavel: [
      {
        id: 'responsavel2',
        avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
      },
    ],
  },
  {
    id: 'asd65as6d56asd',
    number_li: '24/25652545-6',
    referencia: 'INV-BR-20241003-1',
    status: 'granted',
    client: 'MAERSK',
    ncm: '4011.20.90',
    data_registro: '10-10-2024',
    responsavel: [
      {
        id: 'responsavel2',
        avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
      },
    ],
  },
  {
    id: 'asd65as6d56asd',
    number_li: '24/25652545-6',
    referencia: 'INV-BR-20241003-1',
    status: 'to analyze',
    client: 'MAERSK',
    ncm: '4011.20.90',
    data_registro: '10-10-2024',
    responsavel: [
      {
        id: 'responsavel2',
        avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
      },
    ],
  },
  {
    id: 'asd65as6d56asd',
    number_li: '24/25652545-6',
    referencia: 'INV-BR-20241003-1',
    status: 'to analyze',
    client: 'MAERSK',
    ncm: '4011.20.90',
    data_registro: '10-10-2024',
    responsavel: [
      {
        id: 'responsavel2',
        avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
      },
    ],
  },
  {
    id: 'asd65as6d56asd',
    number_li: '24/25652545-6',
    referencia: 'INV-BR-20241003-1',
    status: 'pending payment',
    client: 'MAERSK',
    ncm: '4011.20.90',
    data_registro: '10-10-2024',
    responsavel: [
      {
        id: 'responsavel2',
        avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
      },
    ],
  },
  {
    id: 'asd65as6d56asd',
    number_li: '24/25652545-6',
    referencia: 'INV-BR-20241003-1',
    status: 'pending payment',
    client: 'MAERSK',
    ncm: '4011.20.90',
    data_registro: '10-10-2024',
    responsavel: [
      {
        id: 'responsavel2',
        avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
      },
    ],
  },
  {
    id: 'asd65as6d56asd',
    number_li: '24/25652545-6',
    referencia: 'INV-BR-20241003-1',
    status: 'granted',
    client: 'MAERSK',
    ncm: '4011.20.90',
    data_registro: '10-10-2024',
    responsavel: [
      {
        id: 'responsavel2',
        avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
      },
    ],
  },
  {
    id: 'asd65as6d56asd',
    number_li: '24/25652545-6',
    referencia: 'INV-BR-20241003-1',
    status: 'pending payment',
    client: 'MAERSK',
    ncm: '4011.20.90',
    data_registro: '10-10-2024',
    responsavel: [
      {
        id: 'responsavel2',
        avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
      },
    ],
  },
]

export default function Li() {
  return (
    <div className="flex">
      <div className="h-[calc(100vh)] min-w-60 bg-muted">
        <SideBarLis data={data} />
      </div>
      <div className="h-[calc(100vh-4rem)] w-full overflow-auto bg-background text-foreground">
        <HeaderLis />

        <LiList data={data} />
      </div>
    </div>
  )
}
