'use client'

import { BlForm } from '@/components/pages/new-processes/bl-form'
import { InvoiceForm } from '@/components/pages/new-processes/invoice-form'
import { PackListForm } from '@/components/pages/new-processes/packlist-form'

import { BasicForm } from '@/components/pages/new-processes/basic-form'
import { useState } from 'react'
import { Header } from '@/components/pages/new-processes/Header'

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
      formComponent = <BlForm handlePosition={handlePosition} />
      break

    case 2:
      formComponent = <InvoiceForm handlePosition={handlePosition} />
      break

    case 3:
      formComponent = <PackListForm handlePosition={handlePosition} />
      break

    default:
      formComponent = null // ou outro componente padrão
      break
  }

  // Função para capturar o arquivo

  return (
    <>
      <div className="w-full overflow-auto bg-background">
        <Header position={position} handlePosition={handlePosition} />

        <div className="h-[calc(100vh-4rem)] w-full px-24">{formComponent}</div>
      </div>
    </>
  )
}
