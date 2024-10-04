import Image from 'next/image'

import backgroundUser from '../../public/assets/background-user.svg'
import { Button } from '@/components/ui/button'

export function User() {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${backgroundUser.src})`, // backgroundImage correctly applied
        }}
        className="flex h-[18rem] w-[14rem] flex-col items-center justify-start rounded-md border bg-cover bg-center p-2" // added bg-cover and bg-center to properly display background
      >
        <Image
          src={'https://github.com/caiosantosxp.png'}
          alt="Foto de Perfil"
          height={300}
          width={300}
          className="h-20 w-20 rounded-full border-2"
        />

        <h1 className="text-2xl text-secondary-foreground">Caio Santos</h1>
        <h2 className="mt-4 text-lg text-muted-foreground">DEV</h2>
        <h3 className="text-md mt-4">caiosantosxp@gmail.com</h3>

        <Button className="mt-4">Ver Perfil</Button>
      </div>
    </>
  )
}
