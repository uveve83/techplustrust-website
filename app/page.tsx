import { Hero } from '@/components/home/hero'
import { ProblemSolution } from '@/components/home/problem-solution'
import { FeaturedProducts } from '@/components/home/featured-products'
import { ImpactSnapshot } from '@/components/home/impact-snapshot'
import { Testimonials } from '@/components/site/testimonials'
import { Newsletter } from '@/components/site/newsletter'
import { Reveal } from '@/components/site/reveal'
import { COMPANY } from '@/lib/site-data'

const TRUST_STATS = [
  '10+ Active Hatching Stations',
  '500+ Chicks Hatched',
  '100+ Farmers Trained',
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
              },
              {
                tag: 'Farmer Story',
                title: 'How a Nyagatare cooperative doubled its output',
              },
              {
                tag: 'Guides',
                title: 'Biosecurity basics every poultry farmer should know',
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
                  Practical insights to help you raise healthier flocks and grow a
                  sustainable poultry business.
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
