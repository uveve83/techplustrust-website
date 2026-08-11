'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

type Slide = {
  src: string
  alt: string
}

export function HeroSlideshow({ slides, intervalMs = 5500 }: { slides: Slide[]; intervalMs?: number }) {
  const [active, setActive] = useState(0)

  useEffect(() => {
    if (slides.length <= 1) return
    const timer = window.setInterval(() => {
      setActive((i) => (i + 1) % slides.length)
    }, intervalMs)
    return () => window.clearInterval(timer)
  }, [slides.length, intervalMs])

  return (
    <div aria-hidden="true" className="absolute inset-0">
      {slides.map((slide, i) => (
        <div
          key={slide.src}
          className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
          style={{ opacity: i === active ? 1 : 0 }}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            priority={i === 0}
            sizes="100vw"
            className={i === active ? 'animate-ken-burns object-cover' : 'object-cover'}
          />
        </div>
      ))}
    </div>
  )
}
