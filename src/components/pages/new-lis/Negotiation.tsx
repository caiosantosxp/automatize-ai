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

export function Negotiation({ handlePosition }: PositionProps) {
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
                    <FormDescription>Regime de Tributação</FormDescription>
                    <FormItem>
                      <FormLabel>Código :</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>

                    <FormItem>
                      <FormLabel>Fundamento Legal :</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  </div>

                  <div className="rounded border p-2">
                    <FormDescription>Acordo Tarifário</FormDescription>
                    <FormItem>
                      <FormLabel>Tipo :</FormLabel>
                      <FormControl>
                        <Select>
                          <SelectTrigger className="w-[300px]">
                            <SelectValue placeholder="Selecione" />
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
                    <FormDescription>Acordo Tarifário</FormDescription>
                    <FormItem>
                      <FormLabel>Tipo :</FormLabel>
                      <FormControl>
                        <Select>
                          <SelectTrigger className="w-[300px]">
                            <SelectValue placeholder="Selecione" />
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

                    <div className="mt-2 border p-2">
                      <FormDescription className="mb-2">
                        Detalhes Cobertura Cambial
                      </FormDescription>
                      <FormItem>
                        <FormLabel>Modalidade de Pagamento :</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>

                      <FormItem>
                        <FormLabel>Qtde. Dias Limite pagto :</FormLabel>
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
                <Button type="submit">Concluir</Button>
              </div>
            </div>
          </form>
        </Form>
      </div>
    </>
  )
}
