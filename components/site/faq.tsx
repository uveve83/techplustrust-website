import { Plus } from 'lucide-react'

export type FaqItem = { question: string; answer: string }

export function Faq({ items }: { items: FaqItem[] }) {
  return (
    <div className="mx-auto max-w-3xl divide-y divide-border rounded-xl border border-border bg-card">
      {items.map((item) => (
        <details key={item.question} className="group px-6 [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex cursor-pointer items-center justify-between gap-4 py-5 font-semibold">
            {item.question}
            <Plus className="size-5 shrink-0 text-primary transition-transform duration-200 group-open:rotate-45" />
          </summary>
          <p className="pb-5 leading-relaxed text-muted-foreground">{item.answer}</p>
        </details>
      ))}
    </div>
  )
}
