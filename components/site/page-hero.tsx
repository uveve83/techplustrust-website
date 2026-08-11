import { Reveal } from './reveal'

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string
  title: string
  description?: string
}) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-primary text-primary-foreground">
      {/* Soft radial glow for depth, avoids a flat block of color */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 right-0 size-[28rem] rounded-full bg-secondary/20 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <Reveal>
          {eyebrow && (
            <div className="flex items-center gap-3">
              <span aria-hidden="true" className="h-px w-8 bg-secondary" />
              <p className="text-sm font-semibold uppercase tracking-widest text-secondary">
                {eyebrow}
              </p>
            </div>
          )}
          <h1 className="mt-4 max-w-3xl text-balance text-4xl font-bold leading-tight sm:text-5xl">
            {title}
          </h1>
          {description && (
            <p className="mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-primary-foreground/90">
              {description}
            </p>
          )}
        </Reveal>
      </div>
    </section>
  )
}
