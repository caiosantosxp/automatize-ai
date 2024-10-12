'use client'

import { Button } from '@/components/ui/button'
import { ChevronLeftCircle } from 'lucide-react'
import { useRouter } from 'next/navigation'

interface PositionProps {
  position?: number
  handlePosition: (position: number) => void
}

export function Header({ position, handlePosition }: PositionProps) {
  const router = useRouter()

  const handleBack = () => {
    router.back() // Volta para a página anterior
  }

  function handlePositionSet(num: number) {
    handlePosition(num)
  }
  return (
    <>
      <header className="border-b border-border">
        <div className="flex items-center gap-4 p-4 font-[family-name:var(--font-geist-sans)]">
          <Button onClick={handleBack} variant={'hidden'}>
            <ChevronLeftCircle className="text-primary" />
          </Button>
          <h1 className="text-background-foreground text-2xl leading-relaxed">
            Nova LI
          </h1>
        </div>
        <div>
          <Button
            data-current={position === 0}
            variant={'hidden'}
            className="rounded-none border-b-4 border-transparent hover:border-b-border data-[current=true]:border-primary"
            onClick={() => handlePositionSet(0)}
          >
            Básicas
          </Button>

          <Button
            data-current={position === 1}
            variant={'hidden'}
            className="rounded-none border-b-4 border-transparent hover:border-b-border data-[current=true]:border-primary"
            onClick={() => handlePositionSet(1)}
          >
            Fornecedor
          </Button>

          <Button
            data-current={position === 2}
            variant={'hidden'}
            className="rounded-none border-b-4 border-transparent hover:border-b-border data-[current=true]:border-primary"
            onClick={() => handlePositionSet(2)}
          >
            Mercadoria
          </Button>

          <Button
            data-current={position === 3}
            variant={'hidden'}
            className="rounded-none border-b-4 border-transparent hover:border-b-border data-[current=true]:border-primary"
            onClick={() => handlePositionSet(3)}
          >
            Negociação
          </Button>
        </div>
      </header>
    </>
  )
}
