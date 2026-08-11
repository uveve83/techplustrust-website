import { Quote } from 'lucide-react'
import { Reveal } from '@/components/site/reveal'
import { SUCCESS_STORIES } from '@/lib/site-data'

export function Testimonials() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Success Stories
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold sm:text-4xl">
            Trusted by farmers and cooperatives
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {SUCCESS_STORIES.map((story, i) => (
            <Reveal
              key={story.name}
              delay={i * 110}
              className="flex h-full flex-col rounded-xl border border-border bg-card p-7"
            >
              <Quote className="size-8 text-secondary" />
              <blockquote className="mt-4 flex-1 font-serif text-lg leading-relaxed text-foreground">
                &ldquo;{story.quote}&rdquo;
              </blockquote>
              <div className="mt-6 border-t border-border pt-4">
                <p className="font-semibold">{story.name}</p>
                <p className="text-sm text-muted-foreground">{story.location}</p>
                <p className="mt-2 text-sm font-medium text-success">{story.result}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
