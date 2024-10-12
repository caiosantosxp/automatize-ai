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

const formSchema = z.object({
  username: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
})

interface PositionProps {
  position?: number
  handlePosition: (position: number) => void // Certifique-se de que o tipo é correto
}

export function Supplier({ handlePosition }: PositionProps) {
  function handlePositionChange(num: number) {
    handlePosition(num)
  }

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
                    <FormItem>
                      <FormDescription>Tipo de Fornecedor</FormDescription>
                      <FormControl>
                        <Select>
                          <SelectTrigger className="w-[300px]">
                            <SelectValue placeholder="Tipo" />
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
                    <FormItem>
                      <FormLabel>Nome</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>

                    <FormItem>
                      <FormLabel>E-Mail</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>

                    <FormItem>
                      <FormLabel>Responsavel</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>

                    <FormItem>
                      <FormLabel>País de Aquisição/Origem</FormLabel>
                      <FormControl>
                        <Select>
                          <SelectTrigger className="w-[300px]">
                            <SelectValue placeholder="Selecione um país..." />
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
                    <FormItem>
                      <FormLabel>Logradouro</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>

                    <div className="flex gap-4">
                      <FormItem className="w-full">
                        <FormLabel>Número :</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                      <FormItem className="w-full">
                        <FormLabel>Complemento</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    </div>

                    <div className="flex gap-4">
                      <FormItem className="w-full">
                        <FormLabel>Cidade :</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                      <FormItem className="w-full">
                        <FormLabel>Estado :</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    </div>
                  </div>
                </>
              )}
            />
            <div className="flex justify-between">
              <Button type="submit" onClick={() => handlePositionChange(0)}>
                Voltar
              </Button>
              <div className="flex gap-4">
                <Button
                  onClick={() => handlePositionChange(2)}
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
