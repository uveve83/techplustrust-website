import type { Metadata } from 'next'
import Image from 'next/image'
import { Check, Egg, Bird, ArrowRight } from 'lucide-react'
import { PageHero } from '@/components/site/page-hero'
import { Reveal } from '@/components/site/reveal'
import { ProductCard } from '@/components/site/product-card'
import { CTAButton } from '@/components/site/cta-button'
import { Faq } from '@/components/site/faq'
import { CTABand } from '@/components/site/cta-band'
import { INCUBATORS, UNIVERSAL_FEATURES, PRICING_TABLE } from '@/lib/site-data'

export const metadata: Metadata = {
  title: 'Products',
  description:
    'Solar-powered egg incubators from 240 to 40,000 egg capacity, plus fertilized eggs and healthy day-old chicks — designed for Rwanda\u2019s farmers.',
}

const PRODUCT_FAQS = [
  {
    question: 'Do the incubators really run without grid electricity?',
    answer:
      'Yes. Every model runs on a solar + grid hybrid power system, so you can incubate reliably even where grid power is unavailable or unstable.',
  },
  {
    question: 'Is training included when I buy an incubator?',
    answer:
      'Training is included with every incubator purchase, covering setup, monitoring and troubleshooting so you get strong hatch rates from day one.',
  },
  {
    question: 'What warranty and after-sales support do you offer?',
    answer:
      'All incubators come with a 12-month warranty, local spare parts availability, and ongoing support via phone and WhatsApp.',
  },
  {
    question: 'How do I know which model is right for me?',
    answer:
      'Choose based on your flock ambitions: TPT-240 suits smallholders, mid-range models fit emerging farmers and small cooperatives, and the TPT-40000 serves large cooperatives and NGOs. Request a quote and we\u2019ll advise.',
  },
]

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Products"
        title="Solar-powered incubators and quality poultry inputs"
        description="Designed for Rwanda\u2019s farmers — affordable, durable, and built to scale with your operation."
        image={{
          src: '/images/real/workshop-banner.jpg',
          alt: 'TechPlus Trust incubators being manufactured in the Kamonyi workshop',
        }}
      />

      {/* Comparison table */}
      <section className="bg-background">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <Reveal>
            <h2 className="text-balance text-3xl font-bold sm:text-4xl">
              Compare our incubator range
            </h2>
            <p className="mt-3 max-w-2xl text-muted-foreground">
              From 240-egg units for small farms to 40,000-egg systems for cooperatives.
            </p>
          </Reveal>

          <Reveal className="mt-10 overflow-x-auto rounded-xl border border-border">
            <table className="w-full min-w-[640px] border-collapse text-left text-sm">
              <thead>
                <tr className="bg-primary text-primary-foreground">
                  <th scope="col" className="px-5 py-4 font-semibold">Model</th>
                  <th scope="col" className="px-5 py-4 font-semibold">Capacity</th>
                  <th scope="col" className="px-5 py-4 font-semibold">Price</th>
                  <th scope="col" className="px-5 py-4 font-semibold">Target User</th>
                  <th scope="col" className="px-5 py-4 font-semibold">Key Features</th>
                  <th scope="col" className="px-5 py-4 font-semibold">Quote</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border bg-card">
                {INCUBATORS.map((p) => (
                  <tr key={p.model} className="align-top">
                    <td className="px-5 py-4 font-bold text-foreground">{p.model}</td>
                    <td className="px-5 py-4 text-muted-foreground">{p.capacity}</td>
                    <td className="px-5 py-4 font-semibold text-primary">{p.price}</td>
                    <td className="px-5 py-4 text-muted-foreground">{p.target}</td>
                    <td className="px-5 py-4 text-muted-foreground">{p.features.join(', ')}</td>
                    <td className="px-5 py-4">
                      <CTAButton href="/contact" variant="secondary" size="md" className="h-9 px-4 text-xs">
                        Request
                      </CTAButton>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Reveal>
        </div>
      </section>

      {/* Full pricing & specifications */}
      <section className="bg-muted">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <Reveal>
            <h2 className="text-balance text-3xl font-bold sm:text-4xl">
              Full pricing &amp; specifications
            </h2>
            <p className="mt-3 max-w-2xl text-muted-foreground">
              Every incubator size we manufacture, from 240 to 40,000 eggs. Power consumption
              figures are based on international standard commercial incubator efficiency
              benchmarks.
            </p>
          </Reveal>

          <Reveal className="mt-10 overflow-x-auto rounded-xl border border-border">
            <table className="w-full min-w-[560px] border-collapse text-left text-sm">
              <thead>
                <tr className="bg-primary text-primary-foreground">
                  <th scope="col" className="px-5 py-4 font-semibold">Model</th>
                  <th scope="col" className="px-5 py-4 font-semibold">Capacity (Eggs)</th>
                  <th scope="col" className="px-5 py-4 font-semibold">Price (RWF)</th>
                  <th scope="col" className="px-5 py-4 font-semibold">Power Consumption (kW)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border bg-card">
                {PRICING_TABLE.map((tier) => (
                  <tr key={tier.model} className="align-top">
                    <td className="px-5 py-4 font-bold text-foreground">{tier.model}</td>
                    <td className="px-5 py-4 text-muted-foreground">
                      {tier.capacityEggs.toLocaleString('en-US')}
                    </td>
                    <td className="px-5 py-4 text-muted-foreground">
                      {tier.priceRWF.toLocaleString('en-US')}
                    </td>
                    <td className="px-5 py-4 font-semibold text-primary">
                      {tier.powerConsumptionKW.toFixed(1)} kW
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Reveal>

          <p className="mt-4 text-sm text-muted-foreground">
            Don&rsquo;t see the exact size you need, or want help choosing?{' '}
            <a href="/contact" className="font-semibold text-primary hover:underline">
              Request a quote
            </a>{' '}
            and our team will help you find the right fit.
          </p>
        </div>
      </section>

      {/* Universal features */}
      <section className="bg-muted">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="text-balance text-3xl font-bold sm:text-4xl">
              Built into every model
            </h2>
          </Reveal>
          <div className="mx-auto mt-10 grid max-w-4xl gap-3 sm:grid-cols-2">
            {UNIVERSAL_FEATURES.map((feature, i) => (
              <Reveal
                key={feature}
                delay={i * 60}
                className="flex items-center gap-3 rounded-lg border border-border bg-card px-5 py-4"
              >
                <Check className="size-5 shrink-0 text-success" />
                <span className="font-medium">{feature}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Individual product cards */}
      <section className="bg-background">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <Reveal>
            <h2 className="text-balance text-3xl font-bold sm:text-4xl">Incubator models</h2>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {INCUBATORS.map((product, i) => (
              <Reveal key={product.model} delay={i * 90}>
                <ProductCard product={product} index={i} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Eggs & Chicks */}
      <section className="bg-muted">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 py-20 sm:px-6 lg:grid-cols-2">
          <Reveal className="overflow-hidden rounded-2xl border border-border bg-card">
            <div className="relative aspect-[4/3]">
              <Image
                src="/images/real/hero-showroom.jpg"
                alt="Trays of fertile eggs inside a TechPlus Trust incubator"
                fill
                sizes="(min-width: 1024px) 560px, 100vw"
                className="object-cover"
              />
            </div>
            <div className="p-8">
              <span className="inline-flex size-11 items-center justify-center rounded-lg bg-secondary/10 text-secondary">
                <Egg className="size-5" />
              </span>
              <h3 className="mt-4 text-2xl font-bold">Fertilized Eggs</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                High-quality, fertile eggs from vaccinated, healthy parent stock —
                Kuroiler, Rainbow Rooster and local crosses. Shipped in secure,
                temperature-controlled packaging.
              </p>
              <CTAButton href="/contact" variant="secondary" className="mt-6">
                Order Fertilized Eggs
                <ArrowRight className="size-4" />
              </CTAButton>
            </div>
          </Reveal>

          <Reveal delay={120} className="overflow-hidden rounded-2xl border border-border bg-card">
            <div className="relative aspect-[4/3]">
              <Image
                src="/images/real/chicks-brooder.jpg"
                alt="Hundreds of healthy day-old chicks in a TechPlus Trust brooder"
                fill
                sizes="(min-width: 1024px) 560px, 100vw"
                className="object-cover"
              />
            </div>
            <div className="p-8">
              <span className="inline-flex size-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Bird className="size-5" />
              </span>
              <h3 className="mt-4 text-2xl font-bold">Day-Old &amp; 30-Day-Old Chicks</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                Healthy chicks hatched at our decentralized stations. Day-old chicks are
                vaccinated and vitality-guaranteed; 30-day-old chicks are brooded, hardy
                and ready for grow-out.
              </p>
              <CTAButton href="/contact" variant="primary" className="mt-6">
                Reserve Chicks
                <ArrowRight className="size-4" />
              </CTAButton>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-background">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="text-balance text-3xl font-bold sm:text-4xl">
              Product questions, answered
            </h2>
          </Reveal>
          <div className="mt-10">
            <Faq items={PRODUCT_FAQS} />
          </div>
        </div>
      </section>

      <CTABand
        title="Ready to start your poultry journey?"
        description="Request a free quote and our team will help you choose the right setup."
        primary={{ label: 'Request a Quote', href: '/contact' }}
        secondary={{ label: 'Book a Hatching Service', href: '/services' }}
      />
    </>
  )
}
