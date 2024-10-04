'use client'

import { CircleArrowLeft } from 'lucide-react'
import { Button } from '../ui/button'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export function Header() {
  const router = useRouter()

  function handleGoBak() {
    router.back()
  }

  return (
    <>
      <div className="flex w-full items-center justify-between border-b border-muted-foreground p-4 font-[family-name:var(--font-geist-sans)]">
        <div>
          <Button
            className="text bg-transparent shadow-none hover:bg-transparent"
            onClick={handleGoBak}
          >
            <CircleArrowLeft className="text-ring" />
          </Button>
        </div>
        <div>
          <h1></h1>
        </div>
        <Link href="/processes/new">
          <Button>Criar Novo Processo</Button>
        </Link>
      </div>
    </>
  )
}
