/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'

const formSchema = z.object({
  username: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
})

interface PositionProps {
  position?: number
  handlePosition: (position: number) => void // Certifique-se de que o tipo é correto
}

export function Merchandise({ handlePosition }: PositionProps) {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
    },
  })

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

  function handlePositionChange(num: number) {
    handlePosition(num)
  }

  return (
    <>
      <div className="p-4">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <>
                  <div className="rounded border p-2">
                    <FormDescription>
                      Dados Gerais da Mercadoria
                    </FormDescription>

                    <FormItem>
                      <FormLabel>NCM :</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>

                    <FormItem>
                      <FormLabel>Unid. Medida Estatística :</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>

                    <FormItem>
                      <FormLabel>NALADI/SH</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>

                    <FormItem>
                      <FormLabel>Moeda Negociada</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>

                    <FormItem>
                      <FormLabel>INCOTERM</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  </div>

                  <div className="rounded border p-2">
                    <FormDescription>Condição da Mercadoria</FormDescription>

                    <FormItem>
                      <FormLabel>Tipo da Condição da Mercadoria :</FormLabel>
                      <FormControl>
                        <Select>
                          <SelectTrigger className="w-[300px]">
                            <SelectValue placeholder="Nenhuma" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="light">
                              Fabricante/Produtor é Exportador
                            </SelectItem>
                            <SelectItem value="dark">
                              Fabricante/Produtor é Exportador
                            </SelectItem>
                            <SelectItem value="system">
                              Fabricante/Produtor é Exportador
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  </div>

                  <div className="rounded border p-2">
                    <FormDescription>Destaque NCM :</FormDescription>

                    <FormItem>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  </div>

                  <div className="rounded border p-2">
                    <FormDescription>Processo Anuente</FormDescription>

                    <FormItem>
                      <FormLabel>Numero do processo :</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                    <FormItem>
                      <FormLabel>Orgão Anuente :</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  </div>

                  <div className="rounded border p-2">
                    <FormDescription>Drawback</FormDescription>

                    <FormItem>
                      <FormLabel>Modalidade :</FormLabel>
                      <FormControl>
                        <Select>
                          <SelectTrigger className="w-[300px]">
                            <SelectValue placeholder="Não tem Drawback" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="light">
                              Fabricante/Produtor é Exportador
                            </SelectItem>
                            <SelectItem value="dark">
                              Fabricante/Produtor é Exportador
                            </SelectItem>
                            <SelectItem value="system">
                              Fabricante/Produtor é Exportador
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  </div>

                  <form action="">
                    <div className="rounded border p-2">
                      <FormDescription>Informações do Produto</FormDescription>

                      <div className="my-2 border p-2">
                        <FormMessage>
                          É recomendado preencher o Regime de Tributação na aba
                          Negociação, pois poderá ser necessário informar novas
                          informações para o produto.
                        </FormMessage>
                      </div>

                      <FormItem>
                        <FormLabel>Unidade Comercializada :</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>

                      <FormItem>
                        <FormLabel>Peso Liquido Kg :</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>

                      <FormItem>
                        <FormLabel>Qtde. na unidade Comercializada :</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>

                      <FormItem>
                        <FormLabel>Qtde. na Medida Estatística :</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>

                      <FormItem>
                        <FormLabel>Valor no Local do Embarque :</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>

                      <FormItem>
                        <FormLabel>
                          Valor Unitário na Condição de Venda :
                        </FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>

                      <FormItem>
                        <FormLabel>Especificações</FormLabel>
                        <FormControl>
                          <Textarea rows={5} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>

                      <div className="mt-4 flex justify-center gap-4">
                        <Button type="button">Iniciar</Button>
                        <Button type="button">Cancelar</Button>
                      </div>

                      <div>
                        <table className="mb-4 mt-4 w-full rounded border p-2 text-xs">
                          <thead className="border">
                            <tr className="p-1">
                              <th className="border p-2">Sequencial Produto</th>
                              <th className="border p-2">
                                Qtde. na Unidade Comercializada
                              </th>
                              <th className="border p-2">
                                Unidade Comercializada
                              </th>
                              <th className="border p-2">
                                Valor Unitário na Condução de Venda
                              </th>
                              <th className="border p-2">
                                Peso do Produto no Local do Embarque
                              </th>
                              <th className="border p-2">
                                Valor do produto na Condição de Venda
                              </th>
                              <th className="border p-2">Visualizar</th>
                              <th className="border p-2">Alterar</th>
                              <th className="border p-2">Excluir</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td colSpan={9} className="h-20 text-center">
                                Nenhum item registrado.
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div className="rounded border">
                        <ul className="flex flex-col gap-3 p-6">
                          <li className="flex gap-4">
                            <h3 className="w-full">
                              Qtde. Total na Medida Estatística :
                            </h3>
                            <span className="w-full text-red-500">0.00000</span>
                          </li>
                          <li className="flex gap-4">
                            <h3 className="w-full">
                              Peso Líquido Total em Kg :
                            </h3>
                            <span className="w-full text-red-500">0.00000</span>
                          </li>
                          <li className="flex gap-4">
                            <h3 className="w-full">
                              Valor Total no Local no Embarque :
                            </h3>
                            <span className="w-full text-red-500">0.00000</span>
                          </li>
                          <li className="flex gap-4">
                            <h3 className="w-full">
                              Valor Total na Condição de Venda :
                            </h3>
                            <span className="w-full text-red-500">0.00000</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </form>
                </>
              )}
            />
            <div className="flex justify-between">
              <Button type="button" onClick={() => handlePositionChange(1)}>
                Voltar
              </Button>
              <div className="flex gap-4">
                <Button
                  onClick={() => handlePositionChange(3)}
                  variant={'outline'}
                  type="button"
                >
                  Proximo
                </Button>
                <Button type="submit">Salvar</Button>
              </div>
            </div>
          </form>
        </Form>
      </div>
    </>
  )
}
