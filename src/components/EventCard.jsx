import { motion } from "framer-motion"
import ButtonLink from "./ButtonLink"
import { SiteIcon } from "./IconMap"

export default function EventCard({ event, index = 0 }) {
  return (
    <motion.article
      className="group overflow-hidden rounded-3xl bg-white shadow-xl shadow-slate-900/7 ring-1 ring-slate-100 transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55, delay: index * 0.06 }}
    >
      <div className="relative h-48 overflow-hidden sm:h-56">
        <img
          src={event.image}
          alt={event.title}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
        />
        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1.5 text-[0.68rem] font-black uppercase tracking-[0.12em] text-blue-700 backdrop-blur sm:left-5 sm:top-5 sm:px-4 sm:py-2 sm:text-xs sm:tracking-[0.14em]">
          {event.category}
        </span>
      </div>
      <div className="p-5 sm:p-6">
        <div className="flex flex-wrap gap-3 text-xs font-bold text-slate-500 sm:text-sm">
          <span className="inline-flex items-center gap-1">
            <SiteIcon name="CalendarDays" className="h-4 w-4 text-orange-500" />
            {event.date}
          </span>
          <span className="inline-flex items-center gap-1">
            <SiteIcon name="MapPin" className="h-4 w-4 text-blue-600" />
            {event.location}
          </span>
        </div>
        <h3 className="mt-4 text-xl font-black text-slate-950 sm:text-2xl">{event.title}</h3>
        <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">{event.description}</p>
        <ButtonLink to="/contact" variant="outline" className="mt-6" icon="ArrowRight">
          Join Event
        </ButtonLink>
      </div>
    </motion.article>
  )
}
