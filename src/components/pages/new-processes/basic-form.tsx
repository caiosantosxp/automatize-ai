import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

interface PositionProps {
  position?: number
  handlePosition: (position: number) => void // Certifique-se de que o tipo é correto
}

export function BasicForm({ handlePosition }: PositionProps) {
  function handlePositionChange(num: number) {
    handlePosition(num)
  }

  return (
    <>
      <form>
        <fieldset className="mt-6">
          <legend className="my-6 flex w-full justify-start text-2xl">
            Dados Basicos
          </legend>

          <div>
            <Label htmlFor="referencia">Referencia</Label>
            <Input type="text" id="referencia" />
          </div>

          <div>
            <Label htmlFor="referencia">Importador</Label>
            <Input type="text" id="referencia" />
          </div>

          <div className="flex gap-4">
            <div className="w-full"></div>
          </div>

          <div>
            <Label htmlFor="referencia">Tipo</Label>
            <Input type="text" id="referencia" />
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
              onClick={() => handlePositionChange(1)}
            >
              Proximo
            </Button>
          </div>
        </div>
      </form>
    </>
  )
}
