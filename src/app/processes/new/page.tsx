'use client'

import { Header } from '@/components/pages/processes/Header'
import { SideBarProcesses } from '@/components/pages/processes/Sidebar'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import { Download, Trash2 } from 'lucide-react'
import { useState } from 'react'

interface Responsavel {
  id: string
  avatar: string
}

export type Payment = {
  id: string
  situation: 'started' | 'finalized'
  status: 'pending ce' | 'pending ship' | 'pending li' | 'pending transport'
  referencia: string
  client: string
  type: 'importation' | 'exportation'
  importador: string
  invoice_number?: string
  fornecedor?: string
  li?: string // vai vim como uma lista
  obs_li?: string
  ce_master?: number
  ce_house?: number
  hbl?: string
  mbl?: string
  container?: string // vai vim como lista
  armador?: string
  agente?: string
  data_final_free_time?: string
  navio?: string
  chegada_terminal?: string
  descargar?: boolean
  presença?: boolean
  mapa?: string
  di?: string
  due?: string
  data_di?: string
  canal?: string
  desembaraco?: string
  fluxo?: string
  originais?: string
  demanda_cliente?: string
  operacional?: string
  data_numerario?: string
  tempo_free_time?: number
  economia?: string
  responsavel?: Responsavel[] // vai vim em lista
}

const data: Payment[] = [
  {
    id: 'm5gr84i9',
    referencia: 'm5gr84i9',
    situation: 'started',
    client: 'ALFA',
    importador: 'maxx',
    type: 'importation',
    chegada_terminal: '03/10/2024',
    mapa: 'liberado',
    canal: 'verde',
    status: 'pending ce',
    responsavel: [
      {
        id: 'responsavel2',
        avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
      },
      {
        id: 'responsavel3',
        avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
      },
      {
        id: 'responsavel4',
        avatar: 'https://randomuser.me/api/portraits/men/3.jpg',
      },
      {
        id: 'responsavel5',
        avatar: 'https://randomuser.me/api/portraits/women/4.jpg',
      },
      {
        id: 'responsavel1',
        avatar: 'https://randomuser.me/api/portraits/men/5.jpg',
      },
    ],
  },
]

interface FilesProps {
  name: string
}

export default function NewProcesses() {
  const [selectedFile, setSelectedFile] = useState(null) // Armazena o arquivo selecionado temporariamente
  const [files, setFiles] = useState<FilesProps[]>([])

  // Função para capturar o arquivo quando o usuário seleciona
  // tipificar event e name
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function handleFileChange(event: any) {
    setSelectedFile(event.target.files[0])
  }

  // Função para adicionar o arquivo ao estado de arquivos quando o botão Enviar é clicado
  function handleAddFile() {
    if (selectedFile) {
      setFiles((prevFiles) => [...prevFiles, selectedFile])
      setSelectedFile(null) // Limpa a seleção após adicionar
    }
  }

  return (
    <>
      <div className="flex">
        <div className="h-[calc(100vh)] min-w-60 bg-muted">
          <SideBarProcesses data={data} />
        </div>
        <div className="relative h-[calc(100vh-4rem)] w-full overflow-auto bg-background">
          <div>
            <Header />
          </div>

          <div className="max-h-[calc(100vh - 4rem)] w-full">
            <h1 className="my-6 flex w-full justify-center text-2xl">
              Novo Processos
            </h1>
            <form className="m-auto w-[60%]">
              <fieldset>
                <legend></legend>

                <div>
                  <Label htmlFor="referencia">Referencia</Label>
                  <Input type="text" id="referencia" />
                </div>

                <div>
                  <Label htmlFor="referencia">Importador</Label>
                  <Input type="text" id="referencia" />
                </div>

                <div className="flex gap-4">
                  <div className="w-full">
                    <Label htmlFor="referencia">BL</Label>
                    <Input type="text" id="referencia" />
                  </div>

                  <div className="w-full">
                    <Label htmlFor="referencia">Invoice Number</Label>
                    <Input type="text" id="referencia" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="referencia">Tipo</Label>
                  <Input type="text" id="referencia" />
                </div>
              </fieldset>

              <Separator orientation="horizontal" className="mt-6 bg-primary" />

              <fieldset className="mt-4">
                <div>
                  <Label htmlFor="documents">Arquivos</Label>
                  <div className="flex gap-4">
                    <Input
                      type="file"
                      id="documents"
                      onChange={handleFileChange}
                    />
                    <Button type="button" onClick={handleAddFile}>
                      Enviar
                    </Button>
                  </div>
                </div>

                <div className="mt-2 min-h-24 w-full p-4">
                  {files.length > 0 ? (
                    <ul>
                      {files.map((file, index) => (
                        <li
                          key={index}
                          className="mt-2 flex items-center justify-between border-b pb-1"
                        >
                          <h3 className="text-sm">{file.name || 'vazio'}</h3>
                          <div className="flex gap-4">
                            <Button className="flex h-6 w-6 items-center justify-center rounded border border-primary bg-background p-0 text-primary">
                              <Download size={16} />
                            </Button>
                            <Button className="flex h-6 w-6 items-center justify-center rounded border border-destructive bg-background p-0 text-destructive hover:bg-red-700">
                              <Trash2 size={16} />
                            </Button>
                          </div>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <span>Nenhum arquivo adicionado</span>
                  )}
                </div>
              </fieldset>

              <Separator orientation="horizontal" className="mt-4 bg-primary" />

              <fieldset className="mt-6">
                <div>
                  <Label htmlFor="documents">
                    Deseja adicionar Descrições?
                  </Label>
                  <div className="flex gap-4">
                    <div className="flex items-center gap-4">
                      <Input
                        type="radio"
                        id="radio"
                        name="radio"
                        className="h-6 w-6"
                      />
                      <Label>Sim</Label>
                    </div>
                    <div className="flex items-center gap-4">
                      <Input
                        type="radio"
                        id="radio"
                        name="radio"
                        className="h-6 w-6"
                      />
                      <Label>Nao</Label>
                    </div>
                  </div>

                  <div className="mt-4 flex w-full items-end gap-4">
                    <div className="w-[20%] items-center gap-4">
                      <Label>Number</Label>
                      <Input type="text" className="" />
                    </div>
                    <div className="w-full items-center gap-4">
                      <Label>Descrição</Label>
                      <Input type="text" />
                    </div>
                    <Button>+</Button>
                  </div>
                </div>
              </fieldset>

              <Separator orientation="horizontal" className="mt-4 bg-primary" />

              <div className="mt-4 flex items-center gap-4">
                <Button className="bg-primary-foreground text-primary">
                  Salvar
                </Button>
                <Button className="bg-primary text-primary-foreground">
                  Enviar
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
