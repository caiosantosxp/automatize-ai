'use client'

import { Header } from '@/components/pages/processes-details/Header'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Check, Eye, EyeOff, X } from 'lucide-react'
import Image from 'next/image'
import { useParams } from 'next/navigation'

export default function Processes() {
  const { id } = useParams()

  return (
    <>
      <div className="w-full overflow-hidden bg-muted">
        <header>
          <Header />
        </header>
        <main className="m-auto h-[calc(100vh-5rem)] w-[80%] overflow-auto p-3">
          <div className="flex gap-4">
            {/* Mapa do navio do processo */}
            <div className="w-[50%] rounded border border-accent-foreground">
              {/* Use a URL relativa a partir da pasta public */}
              <Image
                src="https://i.ibb.co/nwbQv2n/tracking.png" // Caminho absoluto
                alt="Tracking Image"
                width={600} // Defina a largura desejada
                height={600} // Defina a altura desejada
                className="h-full w-full object-cover"
              />
            </div>

            {/* Inputs do topo ref, cliente, tipo e data de chegada */}
            <div className="flex w-[50%] flex-col justify-evenly gap-2">
              <div>
                <Label htmlFor="referencia">Referencia: </Label>
                <Input
                  type="text"
                  value={`${id}`}
                  className="mt-1 border-accent-foreground"
                  id="referencia"
                />
              </div>
              <div>
                <Label htmlFor="referencia">Cliente: </Label>
                <Input
                  type="text"
                  value="MAERSK"
                  className="mt-1 border-accent-foreground"
                  id="referencia"
                />
              </div>
              <div>
                <Label htmlFor="referencia">Tipo: </Label>
                <Input
                  type="text"
                  value="Importação"
                  className="mt-1 border-accent-foreground"
                  id="referencia"
                />
              </div>
              <div>
                <Label htmlFor="referencia">Previsão de Chegada: </Label>
                <Input
                  type="date"
                  value={'2024-12-24'}
                  className="mt-1 border-accent-foreground"
                  id="referencia"
                />
              </div>
            </div>
          </div>

          <div className="my-4 flex w-full gap-4">
            {/** Check List do processo */}
            <div className="w-[50%] rounded border border-accent-foreground p-6">
              <ul className="flex flex-col gap-2">
                <li className="flex justify-between">
                  <h3>Recebimento de BL</h3>
                  <Check className="text-emerald-600" />
                </li>

                <li className="flex justify-between">
                  <h3>Recebimento de Invoice</h3>
                  <Check className="text-emerald-600" />
                </li>

                <li className="flex justify-between">
                  <h3>Recebimento de PackList</h3>
                  <Check className="text-emerald-600" />
                </li>

                <li className="flex justify-between">
                  <h3>Recebimento de Emissão Li</h3>
                  <Check className="text-emerald-600" />
                </li>

                <li className="flex justify-between">
                  <h3>Chegada de CE</h3>
                  <Check className="text-emerald-600" />
                </li>

                <li className="flex justify-between">
                  <h3>Montagem de DI</h3>
                  <Check className="text-emerald-600" />
                </li>

                <li className="flex justify-between">
                  <h3>Desbloqueio SHIVA</h3>
                  <X className="text-red-600" />
                </li>

                <li className="flex justify-between">
                  <h3>Recebimento de BL</h3>
                  <X className="text-red-600" />
                </li>

                <li className="flex justify-between">
                  <h3>Chegada Porto</h3>
                  <X className="text-red-600" />
                </li>
              </ul>
            </div>

            {/** Inputs de mais dados do processo */}
            <div className="flex w-[50%] flex-col gap-2">
              <div className="flex items-end gap-4">
                <div className="w-full">
                  <Label htmlFor="referencia">Numero LI: </Label>
                  <Input
                    type="text"
                    value="24/8625446-5"
                    className="border-accent-foreground"
                    id="referencia"
                  />
                </div>
                <div className="flex flex-col">
                  <Button className="mt-3 flex items-center justify-center gap-2 text-xs">
                    <Eye size={18} />
                  </Button>
                </div>
              </div>

              <div className="flex items-end gap-4">
                <div className="w-full">
                  <Label htmlFor="referencia">Numero DI: </Label>
                  <Input
                    type="text"
                    value="24/8586586-6"
                    className="border-accent-foreground"
                    id="referencia"
                  />
                </div>
                <div className="flex flex-col">
                  <Button className="mt-3 flex items-center justify-center gap-2 text-xs">
                    <Eye size={18} />
                  </Button>
                </div>
              </div>

              <div className="flex w-full items-center gap-6">
                <div className="w-full">
                  <Label htmlFor="referencia">CE Master: </Label>
                  <Input
                    type="text"
                    value="186952252455254"
                    className="border-accent-foreground"
                    id="referencia"
                  />
                </div>
                <div className="w-full">
                  <Label htmlFor="referencia">CE House: </Label>
                  <Input
                    type="text"
                    value="186952252455254"
                    className="border-accent-foreground"
                    id="referencia"
                  />
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="w-full">
                  <Label htmlFor="referencia">BL Master: </Label>
                  <Input
                    type="text"
                    value="186952252455254"
                    className="border-accent-foreground"
                    id="referencia"
                  />
                </div>
                <div className="w-full">
                  <Label htmlFor="referencia">BL House: </Label>
                  <Input
                    type="text"
                    value="186952252455254"
                    className="border-accent-foreground"
                    id="referencia"
                  />
                </div>
              </div>

              <div className="flex w-full items-end gap-4">
                <div className="w-full">
                  <Label htmlFor="referencia">MAPA: </Label>
                  <Input
                    type="text"
                    value="Aguardando.."
                    className="border-accent-foreground"
                    id="referencia"
                  />
                </div>
                <div className="flex flex-col">
                  <Button
                    disabled
                    className="mt-3 flex items-center justify-center gap-2 text-xs"
                  >
                    <EyeOff size={18} />
                  </Button>
                </div>
              </div>
              <div>
                <Label htmlFor="referencia">canal: </Label>
                <Input
                  type="text"
                  value="Verde"
                  className="border-accent-foreground"
                  id="referencia"
                />
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}
