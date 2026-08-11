import Link from 'next/link'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const ctaVariants = cva(
  'inline-flex items-center justify-center gap-2 rounded-full font-semibold whitespace-nowrap transition-all duration-200 ease-out outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 active:translate-y-0 [&_svg]:size-4 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        primary:
          'bg-primary text-primary-foreground shadow-sm hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-md',
        secondary:
          'bg-gradient-to-b from-secondary to-[#a9741f] text-secondary-foreground shadow-sm hover:-translate-y-0.5 hover:shadow-lg hover:brightness-105',
        accent: 'bg-accent text-accent-foreground hover:bg-accent/90',
        outline:
          'border border-border bg-background text-foreground hover:-translate-y-0.5 hover:bg-muted hover:shadow-sm',
        onDark:
          'border border-background/40 bg-background/10 text-background backdrop-blur hover:-translate-y-0.5 hover:bg-background/20',
      },
      size: {
        md: 'h-11 px-5 text-sm',
        lg: 'h-12 px-7 text-base',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  },
)

type CTAVariantProps = VariantProps<typeof ctaVariants>

type CTAButtonProps = CTAVariantProps & {
  className?: string
  children: React.ReactNode
} & (
    | ({ href: string } & Omit<React.ComponentProps<typeof Link>, 'href' | 'className'>)
    | ({ href?: undefined } & React.ButtonHTMLAttributes<HTMLButtonElement>)
  )

export function CTAButton({
  variant,
  size,
  className,
  children,
  ...props
}: CTAButtonProps) {
  const classes = cn(ctaVariants({ variant, size }), className)

  if ('href' in props && props.href) {
    const { href, ...rest } = props as { href: string } & Record<string, unknown>
    return (
      <Link href={href} className={classes} {...rest}>
        {children}
      </Link>
    )
  }

  const { href: _href, ...rest } = props as React.ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined
  }
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  )
}
