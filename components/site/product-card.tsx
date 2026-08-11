import Image from 'next/image'
import { Check, ArrowRight } from 'lucide-react'
import { CTAButton } from './cta-button'
import type { Incubator } from '@/lib/site-data'

export function ProductCard({ product }: { product: Incubator }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card transition-all hover:-translate-y-1 hover:shadow-lg">
      <div className="relative aspect-[4/3] bg-muted">
        <Image
          src="/images/incubator.png"
          alt={`${product.model} solar-powered egg incubator`}
          fill
          sizes="(min-width: 1024px) 380px, 100vw"
          className="object-cover"
        />
        <span className="absolute left-3 top-3 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
          {product.capacity}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-bold">{product.model}</h3>
        <p className="mt-1 text-sm font-medium text-secondary">{product.target}</p>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          {product.blurb}
        </p>
        <ul className="mt-4 space-y-2">
          {product.features.map((f) => (
            <li key={f} className="flex items-center gap-2 text-sm">
              <Check className="size-4 shrink-0 text-success" />
              <span>{f}</span>
            </li>
          ))}
        </ul>
        <div className="mt-6 flex-1" />
        <CTAButton href="/contact" variant="secondary" className="w-full">
          Request a Quote
          <ArrowRight className="size-4" />
        </CTAButton>
      </div>
    </article>
  )
}
