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
            Todos os Processos
          </h1>
        </div>
        <div>
          <Link href={'/processes'}>
            <Button
              data-current={location === '/processes'}
              variant={'hidden'}
              className="rounded-none border-b-4 border-transparent hover:border-b-border data-[current=true]:border-ring"
            >
              Todos Processos
            </Button>
          </Link>
          <Link href={'/processes/new'}>
            <Button
              data-current={location === '/processes/new'}
              variant={'hidden'}
              className="rounded-none border-b-4 border-transparent hover:border-b-border data-[current=true]:border-ring"
            >
              Novo Processo
            </Button>
          </Link>
        </div>
      </header>
    </>
  )
}
