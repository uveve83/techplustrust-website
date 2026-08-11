import Link from 'next/link'
import { ArrowRight, Sun, Cog, ShieldCheck } from 'lucide-react'
import { Reveal } from '@/components/site/reveal'
import { ProductCard } from '@/components/site/product-card'
import { INCUBATORS } from '@/lib/site-data'

const TRUST = [
  { icon: Sun, label: 'Solar Powered' },
  { icon: Cog, label: 'Locally Manufactured' },
  { icon: ShieldCheck, label: '12-Month Warranty' },
]

export function FeaturedProducts() {
  const featured = INCUBATORS.slice(0, 3)
  return (
    <section className="bg-muted">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <Reveal className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div className="max-w-xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-secondary">
              Featured Products
            </p>
            <h2 className="mt-3 text-balance text-3xl font-bold sm:text-4xl">
              Incubators that scale with your farm
            </h2>
          </div>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 font-semibold text-primary hover:underline"
          >
            View All Products
            <ArrowRight className="size-4" />
          </Link>
        </Reveal>

        <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
          {TRUST.map((t) => (
            <span key={t.label} className="inline-flex items-center gap-2 text-sm text-muted-foreground">
              <t.icon className="size-4 text-primary" />
              {t.label}
            </span>
          ))}
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((product, i) => (
            <Reveal key={product.model} delay={i * 110}>
              <ProductCard product={product} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
