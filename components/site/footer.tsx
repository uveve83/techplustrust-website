import Link from 'next/link'
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react'
import { Logo } from './logo'
import { COMPANY, NAV_LINKS } from '@/lib/site-data'

function IconFacebook(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.25-1.5 1.55-1.5H17V3.6c-.3 0-1.3-.1-2.45-.1-2.43 0-4.05 1.48-4.05 4.2v2.2H7.7V13h2.8v8h3z" />
    </svg>
  )
}
function IconInstagram(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}
function IconLinkedin(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M6.94 5a1.94 1.94 0 1 1-3.88 0 1.94 1.94 0 0 1 3.88 0zM3.4 8.4h3.1V21H3.4V8.4zM9 8.4h2.97v1.72h.04c.41-.78 1.42-1.6 2.93-1.6 3.13 0 3.71 2.06 3.71 4.74V21h-3.1v-5.55c0-1.32-.02-3.02-1.84-3.02-1.84 0-2.12 1.44-2.12 2.92V21H9V8.4z" />
    </svg>
  )
}
function IconX(props: React.SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}><path d="M18.9 2H22l-6.77 7.74L23.2 22h-6.24l-4.89-6.38L6.48 22H3.36l7.24-8.28L2.8 2h6.4l4.42 5.84L18.9 2Zm-1.1 17.9h1.73L8.27 3.98H6.42L17.8 19.9Z" /></svg>
}
function IconYoutube(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M22 8.2a2.6 2.6 0 0 0-1.83-1.84C18.55 6 12 6 12 6s-6.55 0-8.17.36A2.6 2.6 0 0 0 2 8.2 27.3 27.3 0 0 0 1.65 12 27.3 27.3 0 0 0 2 15.8a2.6 2.6 0 0 0 1.83 1.84C5.45 18 12 18 12 18s6.55 0 8.17-.36A2.6 2.6 0 0 0 22 15.8 27.3 27.3 0 0 0 22.35 12 27.3 27.3 0 0 0 22 8.2zM10 15V9l5.2 3-5.2 3z" />
    </svg>
  )
}

const SOCIALS = [
  { label: 'Instagram', href: COMPANY.instagram, icon: IconInstagram },
  { label: 'LinkedIn', href: COMPANY.linkedin, icon: IconLinkedin },
  { label: 'X', href: COMPANY.x, icon: IconX },
  { label: 'WhatsApp', href: COMPANY.whatsapp, icon: MessageCircle },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-foreground text-background">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="max-w-xs">
            <Logo variant="inverted" />
            <p className="mt-4 text-sm leading-relaxed text-background/70">
              {COMPANY.tagline}. Empowering rural Rwandan farmers with innovative,
              solar-powered poultry solutions.
            </p>
            <div className="mt-5 flex gap-2">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="inline-flex size-9 items-center justify-center rounded-md bg-background/10 text-background transition-colors hover:bg-secondary hover:text-secondary-foreground"
                >
                  <s.icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-background">
              Explore
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-background/70 transition-colors hover:text-background"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-background">
              Get Involved
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link href="/products" className="text-background/70 hover:text-background">
                  Buy an Incubator
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-background/70 hover:text-background">
                  Book Hatching Service
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-background/70 hover:text-background">
                  Request Training
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-background/70 hover:text-background">
                  Partner With Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-background">
              Contact
            </h2>
            <ul className="mt-4 space-y-3 text-sm text-background/70">
              <li className="flex items-start gap-2.5">
                <Mail className="mt-0.5 size-4 shrink-0 text-secondary" />
                <a href={`mailto:${COMPANY.email}`} className="hover:text-background">
                  {COMPANY.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="mt-0.5 size-4 shrink-0 text-secondary" />
                <a href={`tel:${COMPANY.phoneHref}`} className="hover:text-background">
                  {COMPANY.phone}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 size-4 shrink-0 text-secondary" />
                <span>{COMPANY.address}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-background/15 pt-6 text-xs text-background/60 sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} {COMPANY.name}. All rights reserved.
          </p>
          <p>Locally manufactured in Rwanda · Solar powered</p>
        </div>
      </div>
    </footer>
  )
}
