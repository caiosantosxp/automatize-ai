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
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

interface PositionProps {
  position?: number
  handlePosition: (position: number) => void // Certifique-se de que o tipo é correto
}

const formSchema = z.object({
  username: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
})

export function BasicForm({ handlePosition }: PositionProps) {
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
                  <div className="border p-2">
                    <FormDescription className="mb-2">
                      Para uso do importador
                    </FormDescription>
                    <FormItem>
                      <FormLabel>Identificação da Solicitação de LI</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  </div>

                  <div className="border p-2">
                    <FormDescription className="mb-2">
                      Tipo do importador
                    </FormDescription>
                    <FormItem className="mb-2 flex items-center gap-2">
                      <FormControl>
                        <Select>
                          <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Tipo" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectLabel>Tipo</SelectLabel>
                              <SelectItem value="apple">
                                Pessoa Física
                              </SelectItem>
                              <SelectItem value="banana">
                                Pessoa Jurídica
                              </SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                      </FormControl>
                    </FormItem>

                    <FormItem>
                      <FormLabel>CNPJ do Estabelecimento :</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                    </FormItem>
                  </div>

                  <div className="border p-2">
                    <FormDescription className="mb-2">
                      Dados Auxiliares
                    </FormDescription>
                    <FormItem>
                      <FormLabel>País de Procedência</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                    </FormItem>
                    <FormItem>
                      <FormLabel>UF de Despacho</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                    </FormItem>
                    <FormItem>
                      <FormLabel>URF de Entrada</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                    </FormItem>
                  </div>
                  <div className="border p-2">
                    <FormDescription className="mb-2">
                      Informações Complementares
                    </FormDescription>
                    <FormItem>
                      <FormControl>
                        <Textarea
                          rows={5}
                          placeholder="Type your message here."
                        />
                      </FormControl>
                    </FormItem>
                  </div>
                </>
              )}
            />
            <div className="flex justify-between gap-4">
              <Button variant={'outline'} type="submit">
                Cancelar
              </Button>
              <div className="flex gap-4">
                <Button
                  variant={'outline'}
                  type="button"
                  onClick={() => handlePositionChange(1)}
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
