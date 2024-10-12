/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

import { Plus, Trash2 } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Viewer, Worker } from '@react-pdf-viewer/core'
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout'

// Import styles
import '@react-pdf-viewer/core/lib/styles/index.css'
import '@react-pdf-viewer/default-layout/lib/styles/index.css'

interface FilesProps {
  name: string
  file: File
}

interface ResponseProps {
  ncm?: string
  cnpj?: string
  port_of_loading?: string
  bl_no?: string
  shipped_on_board?: string
  place_of_receiptdate?: string
  container?: string
  port_of_discharge?: string
  freight_payable_at?: string
  number_and_kind_of_packages?: string
  gross_weight?: string
  payable_at?: string
  volume?: string
  weight?: string
}

interface PositionProps {
  position?: number
  handlePosition: (position: number) => void // Certifique-se de que o tipo é correto
}

export function BlForm({ handlePosition }: PositionProps) {
  const defaultLayoutPluginInstance = defaultLayoutPlugin()

  const [data1, setData1] = useState<ResponseProps | null>(null)
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [files, setFiles] = useState<FilesProps[]>([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentFile, setCurrentFile] = useState<string | null>(null) // Armazena a URL do arquivo

  function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0]
    if (file) {
      setSelectedFile(file)
    }
  }

  async function handleSubmit() {
    try {
      const dataResponse = {
        as_agents_carrier: 'CNS INTERTRANS(SHENZHEN) #',
        bairroouro: 'BRANCO',
        bl_no: 'SZX23080421',
        board_the_vessel: '26-Aug-2023',
        cep: '93415080',
        cnpj: '01.717.285/0002-20',
        collect: 'FREIGHT COLLECT',
        container: 'CGMU4941002',
        containernosealno: 'N/M',
        declared_value: '$',
        este: 'SC-492',
        exchange_rate: '',
        free_time: '14 DAYS',
        freight_charges: 'OF USD 1,144.00 THC BRL 1,100.00',
        measurement_m3_gross_weight_kgs: '24270.000 KG 26.730 M3',
        mode: 'CY/CY*',
        ncm: '8302',
        novo: 'HAMBURGO/RS',
        ocean_vessel: 'JONATHAN SWIFT',
        onward_inland_routingexport_instructionfor_the_merchants_reference_only:
          'PORT AUTHORITY AT SUCH PORT SHALI CONSTITUTE DUE DELIVER HEREUNDER AND ALL LIABILITY OF THE CARRIER CONNECTION WITH THE GOODS INCLUDING WITHOUT LIMITATION FOR TIME CARREL SHALL NOT 04 SPONSIBLE FOR DELIVERY PRESENTATION OF THE ORIGINAL BILL OF LADING AS BRAZILIAN',
        packages: '2230',
        payable_at: 'NAVEGANTES BRAZIL',
        per: '',
        place_of_delivery: 'NAVEGANTES BRAZIL',
        place_of_receiptdate: 'SHANTOU CHINA',
        place_of_reot_issuedate: 'SHENZHEN /26-Aug-2023',
        port_and_country_of_originfor_the_merchants_reference_only: '',
        port_of_discharge: 'NAVEGANTES BRAZIL',
        port_of_loading: 'SHANTOU, CHINA',
        prepaid: '',
        rate: '',
        received:
          'by CNS INTERTRANSSHENGHENICO TO his Agent,Indian Carter . Consolidator The goods package(s) hargin stated accurant good order and condition the place of receipt or the port loading herein indicated subject all the the face and back of THE as Liding to the part of place duly endorsed must be sumendered . exchange for goods - delivery',
        revenue_tom: '',
        seals: 'R11689555',
        shipperexporter:
          'CHINA GOLDEN DIAMOND CO., LTD 16A SHANDONG ROAD,SHINAN DISTRICT CHINA',
        so_noref_no: 'SWA0383722',
        stc: '2230',
        tel55: '51 3939-3845',
        total_number_of_containers_or_packages_on_words:
          'SAY TOTAL ONE CONTAINER(S) ONLY',
        type: '40NOR',
        volume: '26,730 M3',
        voyno: 'Oxw3NSIMA',
        weight: '24270.000 KG',
        wooden_packagenot: 'APPLICABLE',
      }

      setData1(dataResponse) // Atualiza o estado com os dados retornados
    } catch (error) {
      console.error('Erro ao buscar dados:')
    }
  }

  function handleAddFile() {
    if (selectedFile) {
      setFiles((prevFiles) => [
        ...prevFiles,
        { name: selectedFile.name, file: selectedFile },
      ])
      setSelectedFile(null) // Limpa a seleção após adicionar
    }
  }

  // Abre o modal e exibe o arquivo
  function handleFileClick(file: File) {
    const fileUrl = URL.createObjectURL(file)
    setCurrentFile(fileUrl)
    setIsModalOpen(true)
  }

  // Fecha o modal e libera a URL criada
  function handleCloseModal() {
    setIsModalOpen(false)
    setCurrentFile(null)
  }

  useEffect(() => {
    handleAddFile()
  }, [selectedFile])

  useEffect(() => {
    console.log('dados', data1)
  }, [data1])

  function handlePositionChange(num: number) {
    handlePosition(num)
  }

  return (
    <div>
      <form action="">
        <fieldset className="mt-4 flex flex-col gap-2">
          <legend className="my-6 flex w-full justify-between text-2xl">
            <h1>Bill of Loading</h1>
            <Label
              htmlFor="documents"
              className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-primary-foreground"
            >
              <Plus className="h-6 w-6" />
            </Label>
          </legend>

          <div className="mt-2 min-h-10">
            {files.length > 0 ? (
              <ul className="flex flex-col gap-2">
                {files.map((file, index) => {
                  return (
                    <li
                      key={index}
                      className="mt-2 flex items-center justify-between rounded border px-3 py-2"
                    >
                      <a
                        href="#"
                        onClick={() => handleFileClick(file.file)}
                        className="font-[family-name:var(--font-geist-mono)] text-sm hover:underline"
                      >
                        {file.name || 'vazio'}
                      </a>
                      <div className="flex gap-4">
                        <Button className="flex h-6 w-6 items-center justify-center rounded border border-destructive bg-background p-0 text-destructive hover:bg-red-700">
                          <Trash2 size={16} />
                        </Button>
                        <Button
                          type="button"
                          onClick={handleSubmit}
                          className="flex h-6 items-center justify-center rounded border border-primary bg-background p-0 px-1 text-primary"
                        >
                          Enviar
                        </Button>
                      </div>
                    </li>
                  )
                })}
              </ul>
            ) : (
              <ul>
                <li className="mt-2 flex items-center justify-between rounded border px-3 py-2">
                  <span>Nenhum arquivo adicionado</span>
                </li>
              </ul>
            )}
          </div>

          <div className="flex gap-4">
            <div className="w-full">
              <Label
                htmlFor="bl-number"
                className="font-[family-name:var(--font-geist-sans)]"
              >
                BL number
              </Label>
              <Input
                type="text"
                id="bl-number"
                value={data1?.bl_no || ''}
                onChange={(e) => setData1({ ...data1, bl_no: e.target.value })}
                className="font-[family-name:var(--font-geist-mono)]"
              />
            </div>
            <div className="w-full">
              <Label
                htmlFor="ncm"
                className="font-[family-name:var(--font-geist-sans)]"
              >
                NCM
              </Label>
              <Input
                id="ncm"
                type="text"
                value={data1?.ncm || ''}
                onChange={(e) => setData1({ ...data1, ncm: e.target.value })}
                className="font-[family-name:var(--font-geist-mono)]"
              />
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-full">
              <Label
                htmlFor="port-loading"
                className="font-[family-name:var(--font-geist-sans)]"
              >
                Porto Carregamento
              </Label>
              <Input
                id="port-loading"
                type="text"
                value={data1?.place_of_receiptdate || ''}
                onChange={(e) =>
                  setData1({ ...data1, place_of_receiptdate: e.target.value })
                }
                className="font-[family-name:var(--font-geist-mono)]"
              />
            </div>
            <div className="w-full">
              <Label
                htmlFor="date-loading"
                className="font-[family-name:var(--font-geist-sans)]"
              >
                Data de Carregamento
              </Label>
              <Input
                id="date-loading"
                type="text"
                value={data1?.port_of_loading || ''}
                onChange={(e) =>
                  setData1({ ...data1, port_of_loading: e.target.value })
                }
                className="font-[family-name:var(--font-geist-mono)]"
              />
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-full">
              <Label
                htmlFor="port-receipt"
                className="font-[family-name:var(--font-geist-sans)]"
              >
                Porto de Descarga
              </Label>
              <Input
                id="port-receipt"
                type="text"
                value={data1?.port_of_discharge || ''}
                onChange={(e) =>
                  setData1({ ...data1, port_of_discharge: e.target.value })
                }
                className="font-[family-name:var(--font-geist-mono)]"
              />
            </div>
            <div className="w-full">
              <Label
                htmlFor="city-receipt"
                className="font-[family-name:var(--font-geist-sans)]"
              >
                Cidade de Destino
              </Label>
              <Input
                id="city-receipt"
                type="text"
                value={data1?.payable_at || ''}
                onChange={(e) =>
                  setData1({ ...data1, payable_at: e.target.value })
                }
                className="font-[family-name:var(--font-geist-mono)]"
              />
            </div>
          </div>

          <div>
            <Label
              htmlFor="containers"
              className="font-[family-name:var(--font-geist-sans)]"
            >
              Containers
            </Label>
            <Input
              id="containers"
              type="text"
              value={data1?.container || ''}
              onChange={(e) =>
                setData1({ ...data1, container: e.target.value })
              }
              className="font-[family-name:var(--font-geist-mono)]"
            />
          </div>

          <div className="flex gap-4">
            <div className="w-full">
              <Label
                htmlFor="number_and_kind_of_packages"
                className="font-[family-name:var(--font-geist-sans)]"
              >
                Volume de Pallets
              </Label>
              <Input
                id="number_and_kind_of_packages"
                type="text"
                value={data1?.volume || ''}
                onChange={(e) =>
                  setData1({
                    ...data1,
                    volume: e.target.value,
                  })
                }
                className="font-[family-name:var(--font-geist-mono)]"
              />
            </div>
            <div className="w-full">
              <Label
                htmlFor="gross_weight"
                className="font-[family-name:var(--font-geist-sans)]"
              >
                Total de Peso
              </Label>
              <Input
                id="gross_weight"
                type="text"
                value={data1?.weight || ''}
                onChange={(e) => setData1({ ...data1, weight: e.target.value })}
                className="font-[family-name:var(--font-geist-mono)]"
              />
            </div>
          </div>
        </fieldset>
        <div className="mt-4 flex w-full items-center justify-between gap-4">
          <div>
            <Button className="bg-primary-foreground text-destructive hover:bg-destructive hover:text-destructive-foreground">
              Cancelar
            </Button>
          </div>
          <div className="flex gap-4">
            <Button className="bg-primary-foreground text-primary hover:text-primary-foreground">
              Salvar
            </Button>
            <Button
              type="button"
              variant={'ghost'}
              className="bg-primary text-primary-foreground hover:text-primary"
              onClick={() => handlePositionChange(0)}
            >
              Voltar
            </Button>
            <Button
              type="button"
              variant={'ghost'}
              className="bg-primary text-primary-foreground hover:text-primary"
              onClick={() => handlePositionChange(2)}
            >
              Proximo
            </Button>
          </div>
        </div>
      </form>
      <div className="relative">
        <Input
          type="file"
          id="documents"
          className="sr-only"
          onChange={handleFileChange}
        />
      </div>
      <div>
        {/* Modal */}
        {isModalOpen && currentFile && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.js">
              <div className="relative w-[80%] rounded-lg bg-muted p-6 shadow-lg">
                <h2 className="mb-4 text-xl font-semibold">Visualizar PDF</h2>
                <div className="h-[80vh] w-full">
                  <Viewer
                    fileUrl={currentFile}
                    plugins={[defaultLayoutPluginInstance]} // Usa o plugin de layout
                  />
                </div>
                <div className="mt-4">
                  <Button onClick={handleCloseModal} className="bg-red-500">
                    Fechar
                  </Button>
                </div>
              </div>
            </Worker>
          </div>
        )}
      </div>
    </div>
  )
}
