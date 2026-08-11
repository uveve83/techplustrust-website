import Image from 'next/image'
import type { Metadata } from 'next'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { PageHero } from '@/components/site/page-hero'
import { Reveal } from '@/components/site/reveal'
import { Counter } from '@/components/site/counter'
import { CTABand } from '@/components/site/cta-band'
import { IMPACT_STATS, SUCCESS_STORIES } from '@/lib/site-data'

export const metadata: Metadata = {
  title: 'Impact — Stronger Poultry Communities',
  description: 'See how TechPlus Trust is helping Rwandan farmers hatch healthier chicks, grow income, and build resilient communities.',
}

export default function ImpactPage() {
  return (
    <>
      <PageHero eyebrow="Our impact" title="Technology that reaches the last mile" description="Every incubator, training session and healthy chick is part of a bigger story: more resilient farms, stronger incomes and better nutrition across Rwanda." />

      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {IMPACT_STATS.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 80} className="rounded-xl border border-border bg-card p-6">
                <Counter value={stat.value} suffix={stat.suffix} />
                <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2">
          <Reveal>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image src="/images/farmer-portrait.png" alt="A Rwandan poultry farmer holding a healthy chick" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-secondary">The story of change</p>
              <h2 className="mt-3 font-serif text-3xl text-foreground md:text-4xl">Local solutions create lasting opportunity</h2>
              <p className="mt-5 leading-relaxed text-muted-foreground">When farmers can access reliable incubation close to home, they lose fewer chicks, spend less on transport and gain more control over their income. Our model combines practical technology with the human support needed to make it work.</p>
              <ul className="mt-6 space-y-3">
                {['Affordable equipment built for local conditions', 'Healthy chicks available closer to rural communities', 'Skills and support that stay with each farmer'].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-foreground"><CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" />{item}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Reveal className="max-w-2xl"><p className="font-mono text-xs uppercase tracking-widest text-secondary">Farmer voices</p><h2 className="mt-3 font-serif text-3xl text-foreground md:text-4xl">Progress you can feel on the farm</h2></Reveal>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {SUCCESS_STORIES.map((story, i) => <Reveal key={story.name} delay={i * 80} className="flex h-full flex-col rounded-xl border border-border bg-card p-6"><p className="font-serif text-lg leading-relaxed text-card-foreground">“{story.quote}”</p><div className="mt-6 flex-1"><p className="font-semibold text-foreground">{story.name}</p><p className="text-sm text-muted-foreground">{story.location}</p></div><p className="mt-5 flex items-start gap-2 border-t border-border pt-4 text-sm font-medium text-primary"><ArrowRight className="mt-0.5 size-4 shrink-0" />{story.result}</p></Reveal>)}
          </div>
        </div>
      </section>

      <CTABand title="Help us grow the impact" description="Partner with TechPlus Trust to bring sustainable poultry technology to more farming communities." primary={{ label: 'Partner with us', href: '/contact' }} secondary={{ label: 'Explore our services', href: '/services' }} />
    </>
  )
}
