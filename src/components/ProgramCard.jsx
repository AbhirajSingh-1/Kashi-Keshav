import { motion } from "framer-motion"
import ButtonLink from "./ButtonLink"
import { SiteIcon } from "./IconMap"

export default function ProgramCard({ program, index = 0 }) {
  return (
    <motion.article
      className="group overflow-hidden rounded-3xl bg-white shadow-xl shadow-slate-900/7 ring-1 ring-slate-100 transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.22 }}
      transition={{ duration: 0.55, delay: index * 0.06 }}
    >
      <div className="relative h-48 overflow-hidden sm:h-56">
        <img
          src={program.image}
          alt={`${program.title} program`}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/65 to-transparent" />
        <div className="absolute bottom-4 left-4 grid h-12 w-12 place-items-center rounded-2xl bg-white text-blue-700 shadow-lg sm:bottom-5 sm:left-5 sm:h-14 sm:w-14">
          <SiteIcon name={program.icon} className="h-6 w-6 sm:h-7 sm:w-7" />
        </div>
      </div>

      <div className="p-5 sm:p-6">
        <h3 className="text-xl font-black text-slate-950 sm:text-2xl">{program.title}</h3>
        <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">{program.description}</p>
        <div className="mt-5 grid gap-2">
          {program.points.map((point) => (
            <div key={point} className="flex items-center gap-2 text-xs font-bold text-slate-600 sm:text-sm">
              <SiteIcon name="CheckCircle2" className="h-4 w-4 text-orange-500" />
              <span>{point}</span>
            </div>
          ))}
        </div>
        <ButtonLink to="/contact" variant="outline" className="mt-6" icon="ArrowRight">
          Learn More
        </ButtonLink>
      </div>
    </motion.article>
  )
}
