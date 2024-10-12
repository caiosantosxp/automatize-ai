'use client'

import {
  Anchor,
  Bell,
  Bot,
  ChevronDown,
  CircleUserRound,
  Cpu,
  House,
  KeyRound,
  LayoutTemplate,
  Mail,
  Rocket,
  Settings2,
  ShieldCheck,
  UserPlus,
  Users,
  Webhook,
} from 'lucide-react'
import Link from 'next/link'
import { ToggleButton } from '../theme.provider/ToggleButton'

export function Sidebar() {
  return (
    <>
      <div className="flex h-full w-full flex-col justify-between p-3 font-[family-name:var(--font-geist-sans)] text-gray-200">
        <div>
          <div className="mb-4 px-1 py-2">
            <Bot size={32} />
          </div>

          <h1 className="flex items-center px-4 text-xs font-bold">
            MY ORGANIZATION <ChevronDown size={16} />
          </h1>
          <button className="my-2 flex w-full items-center gap-4 rounded px-4 py-2 text-sm hover:bg-[rgba(0,0,0,0.2)]">
            <House size={18} />
            Main Dashboard
          </button>

          <h1 className="mb-2 mt-4 flex items-center px-4 text-xs font-bold">
            MY DASHBOARD{' '}
          </h1>
          <ul className="flex w-full flex-col items-center">
            <li className="w-full">
              <Link href="/processes">
                <button className="flex w-full items-center gap-4 rounded px-4 py-2 text-sm hover:bg-[rgba(0,0,0,0.2)] data-[current=true]:bg-[rgba(0,0,0,0.4)]">
                  <Cpu size={18} />
                  Processos
                </button>
              </Link>
            </li>

            <li className="w-full">
              <Link href="/lis">
                <button className="flex w-full items-center gap-4 rounded px-4 py-2 text-sm hover:bg-[rgba(0,0,0,0.2)]">
                  <ShieldCheck size={18} />
                  LI&apos;s
                </button>
              </Link>
            </li>

            <li className="w-full">
              <Link href="/dis">
                <button className="flex w-full items-center gap-4 rounded px-4 py-2 text-sm hover:bg-[rgba(0,0,0,0.2)]">
                  <LayoutTemplate size={18} />
                  DI&apos;s
                </button>
              </Link>
            </li>

            <li className="w-full">
              <button className="flex w-full items-center gap-4 rounded px-4 py-2 text-sm hover:bg-[rgba(0,0,0,0.2)]">
                <Webhook size={18} />
                Processes 2
              </button>
            </li>

            <li className="w-full">
              <button className="flex w-full items-center gap-4 rounded px-4 py-2 text-sm hover:bg-[rgba(0,0,0,0.2)]">
                <Webhook size={18} />
                Processes 2
              </button>
            </li>

            <li className="w-full">
              <button className="flex w-full items-center gap-4 rounded px-4 py-2 text-sm hover:bg-[rgba(0,0,0,0.2)]">
                <KeyRound size={18} />
                Processes 2
              </button>
            </li>

            <li className="w-full">
              <button className="flex w-full items-center gap-4 rounded px-4 py-2 text-sm hover:bg-[rgba(0,0,0,0.2)]">
                <Anchor size={18} />
                Tracking
              </button>
            </li>

            <li className="w-full">
              <Link href="/client">
                <button className="flex w-full items-center gap-4 rounded px-4 py-2 text-sm hover:bg-[rgba(0,0,0,0.2)]">
                  <Users size={18} />
                  Clientes
                </button>
              </Link>
            </li>

            <li className="w-full">
              <Link href="/users">
                <button className="flex w-full items-center gap-4 rounded px-4 py-2 text-sm hover:bg-[rgba(0,0,0,0.2)]">
                  <UserPlus size={18} />
                  Usuários
                </button>
              </Link>
            </li>

            <div className="mx-auto my-4 w-[85%] border-t-[0.01px] border-muted" />

            <li className="w-full">
              <button className="flex w-full items-center gap-4 rounded px-4 py-2 text-sm hover:bg-[rgba(0,0,0,0.2)]">
                <Settings2 size={18} />
                Processes 2
              </button>
            </li>
          </ul>
        </div>

        <ul className="flex w-full flex-col items-end justify-end">
          <div className="mx-auto my-4 w-[85%] border-t-[0.01px] border-muted" />
          <li className="w-full">
            <button className="flex w-full items-center gap-4 rounded px-4 py-2 text-sm hover:bg-[rgba(0,0,0,0.2)]">
              <Mail size={18} />
              Emails
            </button>
          </li>

          <li className="w-full">
            <button className="flex w-full items-center gap-4 rounded px-4 py-2 text-sm hover:bg-[rgba(0,0,0,0.2)]">
              <Bell size={18} />
              Notifications
            </button>
          </li>

          <li className="w-full">
            <button className="flex w-full items-center gap-4 rounded px-4 py-2 text-sm hover:bg-[rgba(0,0,0,0.2)]">
              <Rocket size={18} />
              Whats&apos;s New
            </button>
          </li>

          <li className="w-full">
            <ToggleButton />
          </li>

          <li className="w-full">
            <button className="flex w-full items-center gap-4 rounded px-4 py-2 text-sm hover:bg-[rgba(0,0,0,0.2)]">
              <CircleUserRound size={18} />
              Caio Santos
            </button>
          </li>
        </ul>
      </div>
    </>
  )
}
