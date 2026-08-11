import Image from 'next/image'
import { Check, ArrowRight, Zap } from 'lucide-react'
import { CTAButton } from './cta-button'
import type { Incubator } from '@/lib/site-data'

// Distinct real product photos, cycled by model so cards never repeat the
// same image (each is an actual TechPlus Trust unit, not a stock/AI photo).
const PRODUCT_IMAGES = [
  '/images/real/product-compact.jpg',
  '/images/real/product-large.jpg',
  '/images/real/hero-showroom.jpg',
  '/images/real/product-industrial.jpg',
]

export function ProductCard({ product, index = 0 }: { product: Incubator; index?: number }) {
  const image = PRODUCT_IMAGES[index % PRODUCT_IMAGES.length]
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card transition-all hover:-translate-y-1 hover:shadow-lg">
      <div className="relative aspect-[3/4] bg-muted">
        <Image
          src={image}
          alt={`TechPlus Trust ${product.model} solar-powered egg incubator`}
          fill
          sizes="(min-width: 1024px) 380px, 100vw"
          className="object-cover"
        />
        <span className="absolute left-3 top-3 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
          {product.capacity}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-xl font-bold">{product.model}</h3>
          <span className="whitespace-nowrap text-right text-lg font-bold text-primary">
            {product.price}
          </span>
        </div>
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
          <li className="flex items-center gap-2 text-sm">
            <Zap className="size-4 shrink-0 text-success" />
            <span>{product.powerConsumption} power consumption</span>
          </li>
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
