import type { Metadata } from 'next'
import Image from 'next/image'
import {
  Target,
  Eye,
  Lightbulb,
  HandHeart,
  Leaf,
  Users,
  Award,
  ShieldCheck,
  Factory,
  Sun,
  MapPin,
  GraduationCap,
  BadgeCheck,
} from 'lucide-react'
import { PageHero } from '@/components/site/page-hero'
import { Reveal } from '@/components/site/reveal'
import { CTABand } from '@/components/site/cta-band'
import { VALUES } from '@/lib/site-data'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'TechPlus Trust Ltd is a Rwandan AgTech company designing solar-powered egg incubators and running decentralized hatching stations to combat rural malnutrition.',
}

const VALUE_ICONS = [Lightbulb, HandHeart, Leaf, Users, Award, ShieldCheck]

const DIFFERENTIATORS = [
  { icon: Factory, title: 'Locally Manufactured', text: 'Built in Rwanda, supporting the local economy and jobs.' },
  { icon: Sun, title: 'Solar Powered', text: 'Works off-grid, wherever farmers are.' },
  { icon: MapPin, title: 'Decentralized Model', text: 'Community-based hatching brings chicks closer to farmers.' },
  { icon: GraduationCap, title: 'Training Included', text: 'We deliver knowledge, not just hardware.' },
  { icon: BadgeCheck, title: 'Proven Product-Market Fit', text: 'Validated with farmers and cooperatives on the ground.' },
]

const TIMELINE = [
  { year: '2023', text: 'TechPlus Trust Ltd founded in Rwanda to combat rural malnutrition.' },
  { year: '2024', text: 'First locally manufactured solar incubators deployed to smallholder farmers.' },
  { year: '2025', text: 'Decentralized hatching network expands across multiple districts.' },
  { year: '2026', text: 'Product-market fit validated; scaling training and cooperative partnerships.' },
]

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Building an ecosystem of sustainable poultry farming"
        description="TechPlus Trust Ltd was born from a simple observation: rural farmers in Rwanda have the passion and potential to transform their communities through poultry farming — but they lack access to affordable, reliable technology."
        image={{
          src: '/images/real/booth-wheels.jpg',
          alt: 'The TechPlus Trust team with an incubator at a partner exhibition',
        }}
      />

      {/* Our Story */}
      <section className="bg-background">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-widest text-secondary">
              Our Story
            </p>
            <h2 className="mt-3 text-balance text-3xl font-bold sm:text-4xl">
              We set out to change what was possible
            </h2>
            <div className="mt-5 space-y-4 leading-relaxed text-muted-foreground">
              <p>
                By designing and manufacturing solar-powered egg incubators right here
                in Rwanda, we&apos;ve created a solution that works with local conditions
                — not against them.
              </p>
              <p>
                Our decentralized hatching network brings healthy chicks closer to
                farmers, while our training programs ensure they have the knowledge to
                succeed.
              </p>
              <p className="font-medium text-foreground">
                Today, we&apos;re not just selling incubators. We&apos;re building an
                ecosystem of sustainable poultry farming that fights malnutrition,
                creates jobs, and empowers communities across Africa.
              </p>
            </div>
          </Reveal>
          <Reveal delay={120} className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image
              src="/images/real/workshop-banner.jpg"
              alt="TechPlus Trust incubators assembled in the Kamonyi workshop"
              fill
              sizes="(min-width: 1024px) 520px, 100vw"
              className="object-cover"
            />
          </Reveal>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-muted">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <Reveal>
            <h2 className="text-balance text-3xl font-bold sm:text-4xl">Our journey</h2>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {TIMELINE.map((item, i) => (
              <Reveal
                key={item.year}
                delay={i * 90}
                className="rounded-xl border border-border bg-card p-6"
              >
                <p className="font-heading text-3xl font-bold text-primary">{item.year}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {item.text}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-background">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 py-20 sm:px-6 lg:grid-cols-2">
          <Reveal className="rounded-2xl border border-border bg-card p-8">
            <span className="inline-flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Target className="size-6" />
            </span>
            <h2 className="mt-5 text-2xl font-bold">Our Mission</h2>
            <p className="mt-3 font-serif text-lg leading-relaxed text-muted-foreground">
              To empower rural Rwandan farmers with innovative, reliable, and sustainable
              poultry solutions that combat malnutrition, create economic opportunity, and
              build resilient agricultural communities.
            </p>
          </Reveal>
          <Reveal delay={120} className="rounded-2xl border border-border bg-card p-8">
            <span className="inline-flex size-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
              <Eye className="size-6" />
            </span>
            <h2 className="mt-5 text-2xl font-bold">Our Vision</h2>
            <p className="mt-3 font-serif text-lg leading-relaxed text-muted-foreground">
              To become Africa&apos;s leading provider of accessible poultry technology,
              ensuring every rural farmer can have access to affordable poultry technology.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="bg-muted">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              Core Values
            </p>
            <h2 className="mt-3 text-balance text-3xl font-bold sm:text-4xl">
              What we stand for
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {VALUES.map((value, i) => {
              const Icon = VALUE_ICONS[i]
              return (
                <Reveal
                  key={value.title}
                  delay={i * 80}
                  className="rounded-xl border border-border bg-card p-6"
                >
                  <span className="inline-flex size-11 items-center justify-center rounded-lg bg-success/10 text-success">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="mt-4 text-lg font-semibold">{value.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {value.description}
                  </p>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="bg-background">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="text-balance text-3xl font-bold sm:text-4xl">Why choose us</h2>
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {DIFFERENTIATORS.map((item, i) => (
              <Reveal
                key={item.title}
                delay={i * 80}
                className="flex items-start gap-4 rounded-xl border border-border bg-card p-6"
              >
                <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <item.icon className="size-5" />
                </span>
                <div>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {item.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABand
        title="Become a partner in our mission"
        description="Work with a proven, locally rooted AgTech team to deliver lasting impact."
        primary={{ label: 'Partner With Us', href: '/contact' }}
        secondary={{ label: 'See Our Impact', href: '/impact' }}
      />
    </>
  )
}
