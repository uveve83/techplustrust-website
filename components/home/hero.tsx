import { ArrowRight, MessageCircle, PlayCircle } from 'lucide-react'
import { CTAButton } from '@/components/site/cta-button'
import { HeroSlideshow } from '@/components/home/hero-slideshow'

const HERO_SLIDES = [
  { src: '/images/real/farm-exterior.jpg', alt: 'A TechPlus Trust decentralized hatching station in rural Rwanda' },
  { src: '/images/real/booth-solo.jpg', alt: 'A TechPlus Trust team member with an incubator at a partner exhibition' },
  { src: '/images/real/agra-booth.jpg', alt: 'The TechPlus Trust team engaging visitors at the AGRA exhibition booth' },
  { src: '/images/real/ceo-award.jpg', alt: 'TechPlus Trust receiving recognition at the Mastercard Foundation Youth Entrepreneurship event' },
  { src: '/images/real/stage-presentation.jpg', alt: 'TechPlus Trust presenting on stage at an agricultural technology conference' },
]

export function Hero() {
  return (
    <section className="relative isolate min-h-[600px] overflow-hidden lg:min-h-[680px]">
      <HeroSlideshow slides={HERO_SLIDES} />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/20"
      />
      <div className="relative mx-auto flex max-w-6xl flex-col justify-center px-4 py-24 sm:px-6 sm:py-32 lg:py-40">
        <div className="max-w-2xl">
          <span className="animate-hero-slide-in inline-flex items-center gap-2 rounded-full bg-secondary/90 px-4 py-1.5 text-sm font-semibold text-secondary-foreground">
            AgTech · Made in Rwanda
          </span>
          <h1
            className="animate-hero-rise mt-5 text-balance text-4xl font-bold leading-tight text-background sm:text-5xl lg:text-6xl"
            style={{ animationDelay: '0.12s' }}
          >
            Empowering Rwandan Farmers with Solar-Powered Poultry Solutions
          </h1>
          <p
            className="animate-hero-rise mt-5 max-w-xl text-pretty text-lg leading-relaxed text-background/85"
            style={{ animationDelay: '0.28s' }}
          >
            Locally made incubators. Decentralized hatching. Healthier chicks.
            Stronger communities.
          </p>
          <div
            className="animate-hero-rise mt-8 flex flex-col gap-3 sm:flex-row"
            style={{ animationDelay: '0.44s' }}
          >
            <CTAButton href="/products" variant="primary" size="lg">
              Explore Our Incubators
              <ArrowRight className="size-4" />
            </CTAButton>
            <CTAButton href="/services" variant="onDark" size="lg">
              <PlayCircle className="size-4" />
              Book a Hatching Service
            </CTAButton>
            <CTAButton href="https://wa.me/250786812474" variant="onDark" size="lg" target="_blank" rel="noreferrer">
              <MessageCircle className="size-4" />
              Chat on WhatsApp
            </CTAButton>
          </div>
        </div>
      </div>
    </section>
  )
}
