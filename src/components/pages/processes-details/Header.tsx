import { Button } from '@/components/ui/button'

import { CircleArrowLeft } from 'lucide-react'
import { useParams, useRouter } from 'next/navigation'

export function Header() {
  const { id } = useParams()
  const router = useRouter()

  function handleGoBak() {
    router.back()
  }

  return (
    <>
      <header className="border-b border-muted-foreground">
        <div className="flex w-full items-center gap-4 p-4 font-[family-name:var(--font-geist-sans)]">
          <div>
            <Button variant={'hidden'} onClick={handleGoBak}>
              <CircleArrowLeft className="text-ring" />
            </Button>
          </div>

          <div>
            <h1 className="text-2xl leading-relaxed text-muted-foreground">
              Processo {id}
            </h1>
          </div>
        </div>
      </header>
    </>
  )
}
