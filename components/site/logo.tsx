import Image from 'next/image'
import { cn } from '@/lib/utils'

const ICON_SRC = {
  default: '/brand/emblem-black.png',
  inverted: '/brand/emblem-white.png',
} as const

// Source emblem is 696x967px (portrait egg mark)
const ICON_ASPECT = 696 / 967

export function Logo({
  className,
  showText = true,
  variant = 'default',
}: {
  className?: string
  showText?: boolean
  variant?: 'default' | 'inverted'
}) {
  return (
    <span className={cn('flex items-center gap-2', className)}>
      <Image
        src={ICON_SRC[variant]}
        alt="TechPlus Trust Ltd"
        width={696}
        height={967}
        priority
        className="h-9 w-auto shrink-0 object-contain sm:h-10"
        style={{ aspectRatio: ICON_ASPECT }}
      />
      {showText ? (
        <span className="flex flex-col leading-none">
          <span
            className={cn(
              'font-heading text-base font-bold tracking-tight',
              variant === 'inverted' ? 'text-background' : 'text-foreground',
            )}
          >
            TechPlus Trust
          </span>
          <span
            className={cn(
              'text-[0.65rem] font-medium uppercase tracking-widest',
              variant === 'inverted' ? 'text-background/60' : 'text-muted-foreground',
            )}
          >
            Poultry Technology
          </span>
        </span>
      ) : (
        <span className="sr-only">TechPlus Trust Ltd</span>
      )}
    </span>
  )
}
