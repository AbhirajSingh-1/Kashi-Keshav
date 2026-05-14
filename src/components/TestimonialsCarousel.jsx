import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useState } from "react"
import { testimonials } from "../data/siteData"
import { SiteIcon } from "./IconMap"
import SectionHeader from "./SectionHeader"

export default function TestimonialsCarousel() {
  const [active, setActive] = useState(0)
  const current = testimonials[active]

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((index) => (index + 1) % testimonials.length)
    }, 5200)

    return () => window.clearInterval(timer)
  }, [])

  const goTo = (direction) => {
    setActive((index) => {
      if (direction === "next") return (index + 1) % testimonials.length
      return index === 0 ? testimonials.length - 1 : index - 1
    })
  }

  return (
    <section className="bg-blue-50/70 py-20">
      <div className="container-shell">
        <SectionHeader
          eyebrow="Stories of trust"
          title="Real voices from the Kashi Keshav family"
          description="Parents, donors, and volunteers describe the quiet change that steady care can create."
        />

        <div className="mx-auto max-w-4xl rounded-[1.5rem] bg-white p-5 shadow-2xl shadow-blue-900/8 ring-1 ring-blue-100 sm:rounded-3xl sm:p-10">
          <div className="mb-6 flex items-center justify-between">
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-orange-50 text-orange-500 sm:h-14 sm:w-14">
              <SiteIcon name="Quote" className="h-6 w-6 sm:h-7 sm:w-7" />
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                className="grid h-11 w-11 place-items-center rounded-full bg-slate-100 transition hover:bg-slate-950 hover:text-white"
                onClick={() => goTo("prev")}
                aria-label="Previous testimonial"
              >
                <SiteIcon name="ChevronLeft" className="h-5 w-5" />
              </button>
              <button
                type="button"
                className="grid h-11 w-11 place-items-center rounded-full bg-slate-100 transition hover:bg-slate-950 hover:text-white"
                onClick={() => goTo("next")}
                aria-label="Next testimonial"
              >
                <SiteIcon name="ChevronRight" className="h-5 w-5" />
              </button>
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={current.name}
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -24 }}
              transition={{ duration: 0.35 }}
            >
              <p className="text-lg font-bold leading-8 text-slate-900 min-[380px]:text-xl sm:text-3xl sm:leading-10">
                "{current.quote}"
              </p>
              <div className="mt-8">
                <p className="font-black text-slate-950">{current.name}</p>
                <p className="text-sm font-semibold text-slate-500">{current.role}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-8 flex gap-2">
            {testimonials.map((item, index) => (
              <button
                type="button"
                key={item.name}
                className={`h-2.5 rounded-full transition-all ${
                  index === active ? "w-10 bg-orange-500" : "w-2.5 bg-slate-200"
                }`}
                onClick={() => setActive(index)}
                aria-label={`Show testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
