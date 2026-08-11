'use client'

import { useState } from 'react'
import { Send, CheckCircle2 } from 'lucide-react'
import { CTAButton } from './cta-button'

export function Newsletter() {
  const [email, setEmail] = useState('')
  const [done, setDone] = useState(false)

  return (
    <section className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold sm:text-4xl">
            Stay Updated on Poultry Innovation
          </h2>
          <p className="mt-3 text-pretty text-primary-foreground/80">
            Farming tips, product spotlights and farmer stories — straight to your inbox.
          </p>

          {done ? (
            <p className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 px-5 py-3 text-sm font-medium">
              <CheckCircle2 className="size-5 text-secondary" />
              Thanks for subscribing! We&apos;ll be in touch.
            </p>
          ) : (
            <form
              className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
              onSubmit={(e) => {
                e.preventDefault()
                if (email) setDone(true)
              }}
            >
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="h-12 w-full rounded-md border border-primary-foreground/20 bg-primary-foreground/10 px-4 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:ring-2 focus:ring-secondary"
              />
              <CTAButton type="submit" variant="secondary" size="lg" className="shrink-0">
                <Send className="size-4" />
                Subscribe
              </CTAButton>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
