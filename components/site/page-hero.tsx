import Image from 'next/image'
import { Reveal } from './reveal'

export function PageHero({
  eyebrow,
  title,
  description,
  image,
}: {
  eyebrow?: string
  title: string
  description?: string
  image: { src: string; alt: string }
}) {
  return (
    <section className="relative isolate overflow-hidden border-b border-border">
      <Image
        src={image.src}
        alt={image.alt}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/75 to-foreground/40"
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
          <h1 className="mt-4 max-w-3xl text-balance text-4xl font-bold leading-tight text-background sm:text-5xl">
            {title}
          </h1>
          {description && (
            <p className="mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-background/90">
              {description}
            </p>
          )}
        </Reveal>
      </div>
    </section>
  )
}
