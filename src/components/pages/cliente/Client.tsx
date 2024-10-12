import backgroundUser from '../../../public/assets/background-user.svg'
import { Button } from '@/components/ui/button'

export function Client() {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${backgroundUser.src})`, // backgroundImage correctly applied
        }}
        className="flex max-w-80 flex-col items-center justify-start rounded-md border bg-cover bg-center" // added bg-cover and bg-center to properly display background
      >
        <div className="flex h-24 w-full items-center justify-center rounded-t border-b bg-primary">
          <h1 className="text-2xl font-bold">MAERSK</h1>
        </div>
        <div>
          <ul className="flex flex-col p-2 text-sm">
            <li className="flex gap-2">
              <h3 className="text-primary">Nome :</h3>
              <span className="font-[family-name:var(--font-geist-mono)]">
                MAERSK LTDA
              </span>
            </li>
            <li className="flex gap-2">
              <h3 className="text-primary">CNPJ :</h3>
              <span className="font-[family-name:var(--font-geist-mono)]">
                92.547.598/0001-51
              </span>
            </li>
            <li className="flex gap-2">
              <h3 className="text-primary">Inscrição Estadual :</h3>
              <span className="font-[family-name:var(--font-geist-mono)]">
                505.853.042.158
              </span>
            </li>
            <li className="flex gap-2">
              <h3 className="text-primary">E-Mail:</h3>
              <span className="font-[family-name:var(--font-geist-mono)]">
                representantes@maersk.com.br
              </span>
            </li>

            <li className="mt-2">
              <div className="rounded border p-2">
                <ul>
                  <li className="flex gap-2">
                    <h3 className="text-primary">Endereço:</h3>
                    <span className="font-[family-name:var(--font-geist-mono)]">
                      Rua Antônio Vivaldi
                    </span>
                  </li>

                  <li className="flex justify-between gap-2">
                    <div className="flex gap-2">
                      <h3 className="text-primary">Numero:</h3>
                      <span className="font-[family-name:var(--font-geist-mono)]">
                        628
                      </span>
                    </div>
                    <div className="flex gap-2">
                      <h3 className="text-primary">Bairro:</h3>
                      <span className="flex flex-nowrap font-[family-name:var(--font-geist-mono)] text-xs">
                        Jardim Guanca
                      </span>
                    </div>
                  </li>

                  <li className="flex justify-between gap-2">
                    <div className="flex w-full gap-2">
                      <h3 className="text-primary">Cidade:</h3>
                      <span className="font-[family-name:var(--font-geist-mono)]">
                        628
                      </span>
                    </div>
                    <div className="flex w-full gap-2">
                      <h3 className="text-primary">Estado:</h3>
                      <span className="font-[family-name:var(--font-geist-mono)]">
                        SP
                      </span>
                    </div>
                  </li>
                  <li className="flex justify-between gap-2">
                    <div className="flex w-full gap-2">
                      <h3 className="text-primary">CEP:</h3>
                      <span className="font-[family-name:var(--font-geist-mono)]">
                        02151-030
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </li>

            <li className="flex justify-center gap-2">
              <Button variant={'outline'} className="mt-2 px-2 py-1 text-xs">
                View Profile
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}
