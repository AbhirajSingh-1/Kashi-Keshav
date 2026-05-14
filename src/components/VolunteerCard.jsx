import { motion } from "framer-motion"
import { SiteIcon } from "./IconMap"

export default function VolunteerCard({ person, founder = false, index = 0 }) {
  return (
    <motion.article
      className={`group overflow-hidden rounded-3xl bg-white shadow-xl shadow-slate-900/7 ring-1 ring-slate-100 transition duration-300 hover:-translate-y-2 hover:shadow-2xl ${
        founder ? "lg:grid lg:grid-cols-[0.85fr_1.15fr]" : ""
      }`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.22 }}
      transition={{ duration: 0.55, delay: index * 0.06 }}
    >
      <div className={`${founder ? "h-64 bg-slate-100 sm:h-80 lg:h-full" : "h-60 sm:h-72"} overflow-hidden`}>
        <img
          src={person.image}
          alt={person.name}
          className={`h-full w-full transition duration-700 group-hover:scale-105 ${
            person.imageFit === "contain" ? "object-contain" : "object-cover"
          }`}
          style={{ objectPosition: person.imagePosition || "center" }}
        />
      </div>
      <div className="p-5 sm:p-6">
        <div className="mb-4 inline-flex rounded-full bg-blue-50 px-3 py-1 text-[0.68rem] font-black uppercase tracking-[0.14em] text-blue-700 sm:text-xs sm:tracking-[0.16em]">
          {person.role || "Volunteer"}
        </div>
        <h3 className="text-xl font-black text-slate-950 sm:text-2xl">{person.name}</h3>
        <div className="mt-3 flex flex-wrap gap-2 text-xs font-bold text-slate-500 sm:text-sm">
          {person.location ? (
            <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-3 py-1">
              <SiteIcon name="MapPin" className="h-4 w-4 text-orange-500" />
              {person.location}
            </span>
          ) : null}
          <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-3 py-1">
            <SiteIcon name="Users" className="h-4 w-4 text-blue-600" />
            Age {person.age}
          </span>
        </div>
        <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">{person.contribution}</p>
        <div className="mt-6 flex gap-3">
          {["Instagram", "Linkedin", "Mail"].map((icon) => (
            <a
              href="#"
              key={icon}
              className="grid h-10 w-10 place-items-center rounded-full bg-slate-100 text-slate-600 transition hover:bg-orange-500 hover:text-white"
              aria-label={`${person.name} ${icon}`}
            >
              <SiteIcon name={icon} className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </motion.article>
  )
}
