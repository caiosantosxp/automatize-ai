'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export function Header() {
  const [location, setLocation] = useState('')

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setLocation(window.location.pathname) // Só acessa o `window` no cliente
    }
  }, [])

  return (
    <>
      <header className="border-b border-border">
        <div className="flex w-full items-center gap-4 p-4 font-[family-name:var(--font-geist-sans)]">
          <h1 className="text-2xl leading-relaxed text-muted-foreground">
            Todas as LIs
          </h1>
        </div>
        <div>
          <Link href={'/lis'}>
            <Button
              data-current={location === '/lis'}
              variant={'hidden'}
              className="rounded-none border-b-4 border-transparent hover:border-b-border data-[current=true]:border-ring"
            >
              Todas LIs
            </Button>
          </Link>
          <Link href={'/processes/new'}>
            <Button
              data-current={location === '/processes/new'}
              variant={'hidden'}
              className="rounded-none border-b-4 border-transparent hover:border-b-border data-[current=true]:border-ring"
            >
              Nova LI - IA
            </Button>
          </Link>

          <Link href={'/processes/new'}>
            <Button
              data-current={location === '/processes/new'}
              variant={'hidden'}
              className="rounded-none border-b-4 border-transparent hover:border-b-border data-[current=true]:border-ring"
            >
              Nova LI - Manual
            </Button>
          </Link>
        </div>
      </header>
    </>
  )
}
