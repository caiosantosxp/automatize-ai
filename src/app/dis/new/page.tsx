'use client'

import { BasicForm } from '@/components/pages/new-lis/basic-form'
import { Supplier } from '@/components/pages/new-lis/Supplier'
import { Header } from '@/components/pages/new-lis/Header'
import { Merchandise } from '@/components/pages/new-lis/Merchandise'
import { Negotiation } from '@/components/pages/new-lis/Negotiation'

import { useState } from 'react'

export default function NewProcesses() {
  const [position, setPosition] = useState(0)

  function handlePosition(newPosition: number) {
    setPosition(newPosition)
  }

  let formComponent

  switch (position) {
    case 0:
      formComponent = <BasicForm handlePosition={handlePosition} />
      break

    case 1:
      formComponent = <Supplier handlePosition={handlePosition} />
      break

    case 2:
      formComponent = <Merchandise handlePosition={handlePosition} />
      break

    case 3:
      formComponent = <Negotiation handlePosition={handlePosition} />
      break

    default:
      formComponent = null // ou outro componente padrão
      break
  }

  return (
    <>
      <div className="w-full overflow-auto bg-background">
        <Header position={position} handlePosition={handlePosition} />

        <div className="h-[calc(100vh-4rem)] w-full px-24">{formComponent}</div>
      </div>
    </>
  )
}
