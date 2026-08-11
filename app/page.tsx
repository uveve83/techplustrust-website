import Image from 'next/image'
import { Hero } from '@/components/home/hero'
import { ProblemSolution } from '@/components/home/problem-solution'
import { FeaturedProducts } from '@/components/home/featured-products'
import { ImpactSnapshot } from '@/components/home/impact-snapshot'
import { Testimonials } from '@/components/site/testimonials'
import { Newsletter } from '@/components/site/newsletter'
import { Reveal } from '@/components/site/reveal'
import { COMPANY } from '@/lib/site-data'

const TRUST_STATS = [
  '14+ Hatching Stations Installed',
  '60,000+ Chicks Hatched',
  '40+ Farmers Served',
  '12-Month Warranty',
]

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Trust bar */}
      <section className="border-b border-border bg-card">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-10 gap-y-3 px-4 py-5 text-center sm:px-6">
          {TRUST_STATS.map((stat) => (
            <span key={stat} className="text-sm font-semibold text-muted-foreground">
              {stat}
            </span>
          ))}
        </div>
      </section>

      <ProblemSolution />
      <FeaturedProducts />
      <ImpactSnapshot />
      <Testimonials />

      {/* Leadership / conference recognition */}
      <section className="bg-muted">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-20 sm:px-6 lg:grid-cols-2">
          <Reveal className="overflow-hidden rounded-2xl border border-border">
            <div className="relative aspect-[3/2]">
              <Image
                src="/images/real/ceo-presenting.jpg"
                alt="TechPlus Trust's founder presenting at #ACAT2025, the African Conference on Agricultural Technologies"
                fill
                sizes="(min-width: 1024px) 560px, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              Recognized on the Regional Stage
            </p>
            <h2 className="mt-3 text-balance text-3xl font-bold sm:text-4xl">
              Sharing our model with Africa&rsquo;s AgTech community
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              TechPlus Trust&rsquo;s founder presented at #ACAT2025 &mdash; the African
              Conference on Agricultural Technologies &mdash; alongside partners including
              Rwanda&rsquo;s Ministry of Agriculture and Animal Resources, the Gates
              Foundation, and AGRA, sharing how decentralized, solar-powered hatching is
              reaching smallholder farmers across the country.
            </p>
            <div className="mt-6 overflow-hidden rounded-xl border border-border">
              <div className="relative aspect-[3/2]">
                <Image
                  src="/images/real/ceo-award.jpg"
                  alt="TechPlus Trust's founder with partners at a Mastercard Foundation youth entrepreneurship event"
                  fill
                  sizes="(min-width: 1024px) 480px, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Latest news teaser */}
      <section className="bg-muted">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              Latest News
            </p>
            <h2 className="mt-3 text-balance text-3xl font-bold sm:text-4xl">
              From the field
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                tag: 'Product Spotlight',
                title: 'Choosing the right incubator for your flock size',
                excerpt:
                  'Compare capacity, power needs, and features across our full incubator range to find the right fit for your farm.',
              },
              {
                tag: 'Farmer Story',
                title: 'How a Nyagatare cooperative doubled its output',
                excerpt:
                  'How one cooperative used decentralized hatching to double production in 12 months.',
              },
              {
                tag: 'Guides',
                title: 'Biosecurity basics every poultry farmer should know',
                excerpt:
                  'Essential practices to protect your flock from disease and maximize your hatch rates.',
              },
            ].map((post, i) => (
              <Reveal
                key={post.title}
                delay={i * 100}
                direction={(['left', 'up', 'right'] as const)[i] ?? 'up'}
                className="flex h-full flex-col rounded-xl border border-border bg-card p-6"
              >
                <span className="text-xs font-semibold uppercase tracking-wider text-secondary">
                  {post.tag}
                </span>
                <h3 className="mt-3 text-lg font-semibold leading-snug">{post.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {post.excerpt}
                </p>
                <span className="mt-4 text-sm font-semibold text-primary">Read more</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Newsletter />

      <p className="sr-only">
        {COMPANY.name} — {COMPANY.tagline}
      </p>
    </>
  )
}
