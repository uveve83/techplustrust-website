import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Counter } from '@/components/site/counter'
import { Reveal } from '@/components/site/reveal'
import { IMPACT_STATS } from '@/lib/site-data'

export function ImpactSnapshot() {
  return (
    <section className="relative isolate overflow-hidden bg-foreground text-background">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-secondary">
            Our Impact
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold sm:text-4xl">
            Growing with farmers across Rwanda
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-6 lg:grid-cols-4">
          {IMPACT_STATS.map((stat, i) => (
            <Reveal
              key={stat.label}
              delay={i * 100}
              className="rounded-xl border border-background/15 bg-background/5 p-6 text-center"
            >
              <p className="font-heading text-4xl font-bold text-secondary sm:text-5xl">
                <Counter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-2 text-sm text-background/70">{stat.label}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 text-center">
          <Link
            href="/impact"
            className="inline-flex items-center gap-2 font-semibold text-secondary hover:underline"
          >
            See Our Full Impact
            <ArrowRight className="size-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
