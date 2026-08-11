'use client'

import type { FormEvent } from 'react'
import Image from 'next/image'
import { Globe, Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import { PageHero } from '@/components/site/page-hero'
import { COMPANY } from '@/lib/site-data'

export default function ContactPage() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)
    const subject = String(data.get('subject') || 'Website inquiry')
    const message = `Hello TechPlus Trust,\n\nName: ${data.get('name')}\nEmail: ${data.get('email')}\nPhone: ${data.get('phone') || 'Not provided'}\nInterested in: ${subject}\n\n${data.get('message')}`
    const whatsappUrl = `${COMPANY.whatsapp}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
    form.reset()
  }

  return (
    <>
      <PageHero
        eyebrow="Get in touch"
        title="Let’s hatch your next opportunity"
        description="Whether you need an incubator, healthy chicks, practical training or a partner for a larger program, our team is ready to listen."
        image={{
          src: '/images/real/booth-wheels.jpg',
          alt: 'The TechPlus Trust team at an exhibition booth with an incubator',
        }}
      />
      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <h2 className="font-serif text-3xl text-foreground">Talk to TechPlus Trust</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">Tell us what you are building. We will help you choose a practical next step for your farm, cooperative or program.</p>
            <div className="mt-8 space-y-5">
              <a className="flex items-start gap-3 text-sm text-foreground hover:text-primary" href={`mailto:${COMPANY.email}`}><Mail className="mt-0.5 size-5 text-primary" />{COMPANY.email}</a>
              <a className="flex items-start gap-3 text-sm text-foreground hover:text-primary" href={COMPANY.whatsapp} target="_blank" rel="noreferrer"><MessageCircle className="mt-0.5 size-5 text-primary" />{COMPANY.phone} <span className="text-muted-foreground">(WhatsApp)</span></a>
              <a className="flex items-start gap-3 text-sm text-foreground hover:text-primary" href={`https://${COMPANY.website}`} target="_blank" rel="noreferrer"><Globe className="mt-0.5 size-5 text-primary" />{COMPANY.website}</a>
              <div className="flex items-start gap-3 text-sm text-foreground"><MapPin className="mt-0.5 size-5 text-primary" />{COMPANY.address}</div>
            </div>
            <p className="mt-8 text-sm font-semibold text-foreground">Our Social Media</p>
            <div className="mt-3 flex flex-wrap gap-2">
              <a href={COMPANY.whatsapp} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md bg-primary px-3 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary/90"><MessageCircle className="size-4" />WhatsApp</a>
              <a href={COMPANY.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center rounded-md border border-border px-3 py-2 text-sm font-semibold text-foreground hover:bg-muted">LinkedIn</a>
              <a href={COMPANY.x} target="_blank" rel="noreferrer" className="inline-flex items-center rounded-md border border-border px-3 py-2 text-sm font-semibold text-foreground hover:bg-muted">X</a>
              <a href={COMPANY.instagram} target="_blank" rel="noreferrer" className="inline-flex items-center rounded-md border border-border px-3 py-2 text-sm font-semibold text-foreground hover:bg-muted">Instagram</a>
            </div>
            <p className="mt-8 rounded-lg bg-muted p-4 text-sm text-muted-foreground">Business hours: <span className="font-semibold text-foreground">{COMPANY.hours}</span></p>
            <div className="relative mt-8 aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src="/images/real/farm-coop.jpg"
                alt="A healthy flock raised with TechPlus Trust incubators and training"
                fill
                sizes="(min-width: 1024px) 420px, 100vw"
                className="object-cover"
              />
            </div>
          </div>
          <form onSubmit={handleSubmit} className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-medium text-foreground">Name<input required name="name" className="h-11 rounded-md border border-input bg-background px-3 font-normal outline-none focus:ring-2 focus:ring-ring" /></label>
              <label className="grid gap-2 text-sm font-medium text-foreground">Email<input required type="email" name="email" className="h-11 rounded-md border border-input bg-background px-3 font-normal outline-none focus:ring-2 focus:ring-ring" /></label>
              <label className="grid gap-2 text-sm font-medium text-foreground">Phone<input name="phone" className="h-11 rounded-md border border-input bg-background px-3 font-normal outline-none focus:ring-2 focus:ring-ring" /></label>
              <label className="grid gap-2 text-sm font-medium text-foreground">I’m interested in<select name="subject" className="h-11 rounded-md border border-input bg-background px-3 font-normal outline-none focus:ring-2 focus:ring-ring"><option>Incubator quote</option><option>Hatching service</option><option>Farmer training</option><option>Partnership</option><option>Other</option></select></label>
            </div>
            <label className="mt-5 grid gap-2 text-sm font-medium text-foreground">Message<textarea required name="message" rows={5} className="rounded-md border border-input bg-background p-3 font-normal outline-none focus:ring-2 focus:ring-ring" /></label>
            <button type="submit" className="mt-6 inline-flex h-11 items-center justify-center rounded-md bg-primary px-6 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90">Send inquiry on WhatsApp</button>
            <p className="mt-3 text-xs text-muted-foreground">Your inquiry will open in WhatsApp with the message prepared. You can also email us directly at <a className="font-semibold text-primary hover:underline" href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>.</p>
          </form>
        </div>
      </section>
    </>
  )
}
