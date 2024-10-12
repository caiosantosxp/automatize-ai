import { HeaderClient } from '@/components/pages/cliente/HeaderClient'
import { SideBarClient } from '@/components/pages/cliente/SidebarClient'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Separator } from '@/components/ui/separator'

export default function NewUser() {
  return (
    <div className="flex">
      <div className="h-[calc(100vh)] min-w-60 bg-muted">
        <SideBarClient />
      </div>
      <div className="h-[calc(100vh-4rem)] w-full overflow-auto bg-background">
        <HeaderClient />
        <div className="m-auto flex w-[70%] flex-col flex-wrap gap-4 p-4 font-[family-name:var(--font-geist-sans)]">
          <h1>Novo Usuario</h1>
          <form action="">
            <fieldset>
              <legend></legend>

              <div>
                <Label htmlFor="name">Nome</Label>
                <Input type="text" id="name" />
              </div>

              <div>
                <Label htmlFor="mail">Email</Label>
                <Input type="email" id="mail" />
              </div>

              <div>
                <Label htmlFor="password">Password</Label>
                <Input type="password" id="password" />
              </div>

              <div>
                <Label>Gênero</Label>
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Selecione seu gênero" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Gêneros</SelectLabel>
                      <SelectItem value="male">Masculino</SelectItem>
                      <SelectItem value="female">Feminino</SelectItem>
                      <SelectItem value="others">
                        Prefiro nao responder
                      </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>

              <Separator orientation="horizontal" className="my-4" />

              <div>
                <Label>Permissões: </Label>

                <div className="flex items-center gap-4">
                  <Input type="checkbox" id="faturamento" className="h-8 w-4" />
                  <Label htmlFor="faturamento">Administrador</Label>
                </div>
                <div className="flex items-center gap-4">
                  <Input type="checkbox" id="faturamento" className="h-8 w-4" />
                  <Label htmlFor="faturamento">Financeiro</Label>
                </div>
                <div className="flex items-center gap-4">
                  <Input type="checkbox" id="faturamento" className="h-8 w-4" />
                  <Label htmlFor="faturamento">Desenvolvedor</Label>
                </div>

                <div className="flex items-center gap-4">
                  <Input type="checkbox" id="faturamento" className="h-8 w-4" />
                  <Label htmlFor="faturamento">Básicos</Label>
                </div>

                <Separator orientation="horizontal" className="my-4" />

                <div>
                  <Label htmlFor="function">Função</Label>
                  <Input type="text" id="function" />
                </div>
              </div>
            </fieldset>

            <div className="flex justify-center">
              <Button className="mt-4">Criar Usuário</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
