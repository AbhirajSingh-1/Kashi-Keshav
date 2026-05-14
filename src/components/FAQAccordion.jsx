import { useState } from "react"
import { faqs } from "../data/siteData"
import { SiteIcon } from "./IconMap"

export default function FAQAccordion({ items = faqs }) {
  const [open, setOpen] = useState(0)

  return (
    <div className="grid gap-3">
      {items.map((item, index) => (
        <div key={item.question} className="rounded-[1.35rem] bg-white p-1 shadow-sm ring-1 ring-slate-100 sm:rounded-3xl">
          <button
            type="button"
            className="flex w-full items-center justify-between gap-4 rounded-[1.15rem] px-4 py-4 text-left text-sm font-black text-slate-950 transition hover:bg-blue-50 sm:rounded-[1.35rem] sm:px-5 sm:text-base"
            onClick={() => setOpen(open === index ? -1 : index)}
            aria-expanded={open === index}
          >
            <span>{item.question}</span>
            <SiteIcon
              name="ChevronDown"
              className={`h-5 w-5 shrink-0 text-orange-500 transition ${open === index ? "rotate-180" : ""}`}
            />
          </button>
          {open === index ? <p className="px-4 pb-5 text-sm leading-7 text-slate-600 sm:px-5 sm:text-base sm:leading-8">{item.answer}</p> : null}
        </div>
      ))}
    </div>
  )
}
