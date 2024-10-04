'use client'

import { Button } from '@/components/ui/button'

export function Header() {
  return (
    <>
      <header className="border-b border-border">
        <div className="flex w-full items-center justify-between gap-4 p-4 font-[family-name:var(--font-geist-sans)]">
          <h1 className="text-2xl leading-relaxed text-muted-foreground">
            Todos os Usuários
          </h1>
          <div>
            <Button>Criar novo usuário</Button>
          </div>
        </div>
      </header>
    </>
  )
}
