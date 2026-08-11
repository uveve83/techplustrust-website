'use client'

import { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'

type Direction = 'up' | 'down' | 'left' | 'right'

const HIDDEN_OFFSET: Record<Direction, string> = {
  up: 'translate-y-8',
  down: '-translate-y-8',
  left: '-translate-x-12',
  right: 'translate-x-12',
}

export function Reveal({
  children,
  className,
  delay = 0,
  direction = 'up',
  as: Tag = 'div',
}: {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: Direction
  as?: React.ElementType
}) {
  const ref = useRef<HTMLElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true)
      return
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true)
            observer.disconnect()
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn(
        'transition-all duration-700 ease-out will-change-transform motion-reduce:transition-none motion-reduce:transform-none',
        visible
          ? 'translate-x-0 translate-y-0 opacity-100'
          : `${HIDDEN_OFFSET[direction]} opacity-0`,
        className,
      )}
    >
      {children}
    </Tag>
  )
}
