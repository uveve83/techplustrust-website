import { Reveal } from './reveal'
import { CTAButton } from './cta-button'

export function CTABand({
  title,
  description,
  primary,
  secondary,
}: {
  title: string
  description?: string
  primary: { label: string; href: string }
  secondary?: { label: string; href: string }
}) {
  return (
    <section className="bg-secondary text-secondary-foreground">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <Reveal className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
          <div className="max-w-2xl">
            <h2 className="text-balance text-3xl font-bold sm:text-4xl">{title}</h2>
            {description && (
              <p className="mt-3 text-pretty text-secondary-foreground/85">{description}</p>
            )}
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <CTAButton href={primary.href} size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              {primary.label}
            </CTAButton>
            {secondary && (
              <CTAButton
                href={secondary.href}
                size="lg"
                className="border border-secondary-foreground/40 bg-transparent text-secondary-foreground hover:bg-secondary-foreground/10"
              >
                {secondary.label}
              </CTAButton>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
