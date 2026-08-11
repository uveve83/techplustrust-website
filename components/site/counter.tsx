'use client'

import { useEffect, useRef, useState } from 'react'

export function Counter({
  value,
  suffix = '',
  duration = 1800,
}: {
  value: number
  suffix?: string
  duration?: number
}) {
  const ref = useRef<HTMLSpanElement | null>(null)
  const [display, setDisplay] = useState(0)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const run = () => {
      if (started.current) return
      started.current = true
      const start = performance.now()
      const step = (now: number) => {
        const progress = Math.min((now - start) / duration, 1)
        // easeOutCubic
        const eased = 1 - Math.pow(1 - progress, 3)
        setDisplay(Math.round(eased * value))
        if (progress < 1) requestAnimationFrame(step)
      }
      requestAnimationFrame(step)
    }

    if (typeof IntersectionObserver === 'undefined') {
      run()
      return
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            run()
            observer.disconnect()
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -10% 0px' },
    )
    observer.observe(el)

    // Safety net: if for any reason the observer never fires (e.g. the
    // element is already in view before hydration finishes on some
    // browsers), force the count-up after a short delay so numbers never
    // get stuck at 0.
    const fallback = window.setTimeout(run, 1200)

    return () => {
      observer.disconnect()
      window.clearTimeout(fallback)
    }
  }, [value, duration])

  return (
    <span ref={ref}>
      {display.toLocaleString()}
      {suffix}
    </span>
  )
}
