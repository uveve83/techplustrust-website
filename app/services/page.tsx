import type { Metadata } from 'next'
import Image from 'next/image'
import {
  Cog,
  GraduationCap,
  Bird,
  Wrench,
  Building2,
  Handshake,
  Check,
} from 'lucide-react'
import { PageHero } from '@/components/site/page-hero'
import { Reveal } from '@/components/site/reveal'
import { Faq } from '@/components/site/faq'
import { CTABand } from '@/components/site/cta-band'

export const metadata: Metadata = {
  title: 'Services — Hatching, Training & Support',
  description:
    'Decentralized hatching stations, hands-on poultry training, day-old chick supply, and after-sales support from TechPlus Trust Ltd.',
}

const SERVICES = [
  {
    icon: Building2,
    title: 'Decentralized Hatching Stations',
    description:
      'We set up and operate community hatching stations close to farmers, cutting transport losses and giving cooperatives a reliable local supply of healthy chicks.',
    points: [
      'Reduced chick mortality from long-distance transport',
      'Consistent local supply for cooperatives',
      'Solar-powered, low running cost',
    ],
  },
  {
    icon: GraduationCap,
    title: 'Farmer Training Programs',
    description:
      'Hands-on training that turns first-time keepers into confident poultry farmers — covering incubation, brooding, feeding, disease prevention and record-keeping.',
    points: [
      'Practical, incubator-based sessions',
      'Flock health & biosecurity basics',
      'Business & record-keeping guidance',
    ],
  },
  {
    icon: Bird,
    title: 'Day-Old Chick Supply',
    description:
      'Healthy, vaccinated day-old chicks supplied directly from our stations, so farmers start strong with robust birds bred for local conditions.',
    points: ['Vaccinated & health-checked', 'Bred for local conditions', 'Flexible order quantities'],
  },
  {
    icon: Cog,
    title: 'Local Manufacturing',
    description:
      'Every incubator is built and assembled locally, which keeps costs down, creates jobs, and means spare parts and servicing are always close by.',
    points: ['Locally made & maintained', 'Affordable spare parts', 'Faster turnaround on repairs'],
  },
  {
    icon: Wrench,
    title: 'After-Sales Support',
    description:
      'Our relationship starts at purchase, not ends there. We provide installation, maintenance and a 12-month warranty on every incubator.',
    points: ['Installation & setup', 'Maintenance & repairs', '12-month warranty'],
  },
  {
    icon: Handshake,
    title: 'Partnerships & Programs',
    description:
      'We work with NGOs, cooperatives and government programs to deploy poultry projects at scale, with transparent impact reporting.',
    points: ['Program design support', 'Bulk deployment', 'Impact metrics & reporting'],
  },
]

const PROCESS = [
  { step: 'Consult', text: 'We assess your goals, scale and location to recommend the right setup.' },
  { step: 'Equip', text: 'We supply and install the incubator or hatching station that fits.' },
  { step: 'Train', text: 'Your team learns incubation, brooding and flock management hands-on.' },
  { step: 'Support', text: 'We stay on with servicing, spare parts and ongoing guidance.' },
]

const FAQS = [
  {
    question: 'Do you offer training with every purchase?',
    answer:
      'Yes. Training is included with every incubator purchase, and we also run standalone training programs for cooperatives and community groups.',
  },
  {
    question: 'How do the hatching stations work?',
    answer:
      'We set up solar-powered hatching stations within reach of farming communities. Farmers bring or order eggs and collect healthy day-old chicks locally, avoiding losses from long transport.',
  },
  {
    question: 'Can you supply chicks without selling me an incubator?',
    answer:
      'Absolutely. Our day-old chick supply is available to any farmer or cooperative, whether or not they own one of our incubators.',
  },
  {
    question: 'What does after-sales support include?',
    answer:
      'Installation, maintenance, repairs, spare parts and a 12-month warranty. We keep parts available locally so downtime stays minimal.',
  },
]

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="What We Do"
        title="Services built around the farmer"
        description="From locally made incubators to community hatching stations and hands-on training, we support poultry farmers at every step."
      />

      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service, i) => {
              const Icon = service.icon
              return (
                <Reveal key={service.title} delay={i * 80}>
                  <article className="flex h-full flex-col rounded-xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md">
                    <div className="flex size-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Icon className="size-6" />
                    </div>
                    <h2 className="mt-5 font-serif text-xl text-card-foreground">{service.title}</h2>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {service.description}
                    </p>
                    <ul className="mt-4 space-y-2">
                      {service.points.map((point) => (
                        <li key={point} className="flex items-start gap-2 text-sm text-card-foreground">
                          <Check className="mt-0.5 size-4 shrink-0 text-secondary" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-muted py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <Reveal>
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg">
                <Image
                  src="/images/hatching-station.png"
                  alt="A community hatching station with rows of solar-powered incubators"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div>
                <p className="font-mono text-xs uppercase tracking-widest text-secondary">How it works</p>
                <h2 className="mt-3 font-serif text-3xl text-foreground md:text-4xl">
                  A simple path from egg to income
                </h2>
                <ol className="mt-8 space-y-6">
                  {PROCESS.map((item, i) => (
                    <li key={item.step} className="flex gap-4">
                      <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary font-mono text-sm font-semibold text-primary-foreground">
                        {i + 1}
                      </span>
                      <div>
                        <h3 className="font-semibold text-foreground">{item.step}</h3>
                        <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4">
          <div className="text-center">
            <p className="font-mono text-xs uppercase tracking-widest text-secondary">FAQ</p>
            <h2 className="mt-3 font-serif text-3xl text-foreground md:text-4xl">
              Questions, answered
            </h2>
          </div>
          <div className="mt-10">
            <Faq items={FAQS} />
          </div>
        </div>
      </section>

      <CTABand
        title="Ready to start hatching?"
        description="Tell us your goals and we'll recommend the right incubator, station or training program for you."
        primary={{ label: 'Book a Service', href: '/contact' }}
        secondary={{ label: 'View Incubators', href: '/products' }}
      />
    </>
  )
}
