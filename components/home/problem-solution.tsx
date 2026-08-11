import Link from 'next/link'
import {
  HeartPulse,
  Bird,
  Zap,
  DollarSign,
  Cpu,
  MapPin,
  GraduationCap,
  ArrowRight,
} from 'lucide-react'
import { Reveal } from '@/components/site/reveal'

const PROBLEMS = [
  { icon: HeartPulse, title: 'Rural Malnutrition', text: 'Limited access to affordable, high-quality protein in rural communities.' },
  { icon: Bird, title: 'High Chick Mortality', text: 'Long-distance transport stresses chicks and drives up losses.' },
  { icon: Zap, title: 'Unreliable Power', text: 'Inconsistent electricity makes conventional incubation impossible.' },
  { icon: DollarSign, title: 'Expensive Imports', text: 'Imported incubators and equipment are out of reach for most farmers.' },
]

const PILLARS = [
  {
    icon: Cpu,
    title: 'Innovative Incubators',
    text: 'Affordable, solar-powered incubators built locally for Rwanda\u2019s conditions.',
  },
  {
    icon: MapPin,
    title: 'Decentralized Hatching',
    text: 'Community stations bring healthy chicks closer to farmers, reducing mortality.',
  },
  {
    icon: GraduationCap,
    title: 'Farmer Training',
    text: 'Hands-on training and ongoing support so every farmer can succeed.',
  },
]

export function ProblemSolution() {
  return (
    <>
      {/* The Problem */}
      <section className="bg-background">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-secondary">
              The Challenge
            </p>
            <h2 className="mt-3 text-balance text-3xl font-bold sm:text-4xl">
              Rural poultry farming faces real barriers
            </h2>
            <p className="mt-4 text-pretty text-muted-foreground">
              Smallholder farmers in Rwanda have the passion to transform their
              communities — but too often lack access to reliable technology.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {PROBLEMS.map((p, i) => (
              <Reveal
                key={p.title}
                delay={i * 90}
                className="rounded-xl border border-border bg-card p-6"
              >
                <span className="inline-flex size-11 items-center justify-center rounded-lg bg-destructive/10 text-destructive">
                  <p.icon className="size-5" />
                </span>
                <h3 className="mt-4 text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {p.text}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Our Solution */}
      <section className="bg-muted">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              Our Solution
            </p>
            <h2 className="mt-3 text-balance text-3xl font-bold sm:text-4xl">
              An integrated ecosystem for poultry success
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {PILLARS.map((pillar, i) => (
              <Reveal
                key={pillar.title}
                delay={i * 120}
                className="group rounded-xl border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="inline-flex size-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <pillar.icon className="size-7" />
                </span>
                <h3 className="mt-5 text-xl font-semibold">{pillar.title}</h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">
                  {pillar.text}
                </p>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-10 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 font-semibold text-primary hover:underline"
            >
              Learn how it works
              <ArrowRight className="size-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}
