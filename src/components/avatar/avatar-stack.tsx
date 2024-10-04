import Image from 'next/image'

interface Responsavel {
  id: string
  avatar: string
}

interface AvatarProps {
  avatars?: Responsavel[] // Tipagem para um array de strings (URLs das imagens)
  maxDisplay?: number // `maxDisplay` é opcional, com valor padrão de 3
}

export function AvatarStack({ avatars, maxDisplay = 3 }: AvatarProps) {
  if (!avatars) {
    return (
      <>
        <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-gray-300 text-sm">
          ...
        </div>
      </>
    )
  }

  const displayAvatars = avatars.slice(0, maxDisplay)
  const remainingAvatars = avatars.length - maxDisplay

  return (
    <>
      <div className="flex -space-x-3">
        {displayAvatars.map((avatar, index) => (
          <Image
            key={index}
            src={avatar.avatar}
            width={80}
            height={80}
            alt={`Avatar ${index + 1}`}
            className="h-6 w-6 rounded-full border-2 border-white"
          />
        ))}
        {remainingAvatars > 0 && (
          <div className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-gray-300 text-sm">
            +{remainingAvatars}
          </div>
        )}
      </div>
    </>
  )
}
