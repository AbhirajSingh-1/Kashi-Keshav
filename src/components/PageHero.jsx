import { motion } from "framer-motion"
import ButtonLink from "./ButtonLink"

export default function PageHero({ eyebrow, title, description, image, primary, secondary }) {
  return (
    <section className="relative isolate overflow-hidden bg-slate-950 pt-20 text-white sm:pt-28">
      <div className="absolute inset-0 -z-10">
        <img src={image} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-slate-950/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/78 to-slate-950/28" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/72 via-transparent to-slate-950/36" />
      </div>
      <div className="container-shell py-14 sm:py-24 lg:py-28">
        <motion.div
          className="hero-copy max-w-3xl"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
        >
          {eyebrow ? (
            <p className="mb-5 inline-flex rounded-full bg-white/12 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-orange-100 ring-1 ring-white/20 backdrop-blur">
              {eyebrow}
            </p>
          ) : null}
          <h1 className="text-balance text-3xl font-black leading-tight min-[380px]:text-4xl sm:text-5xl lg:text-7xl">
            {title}
          </h1>
          <p className="hero-description mt-5 max-w-2xl text-base font-semibold leading-7 text-white sm:mt-6 sm:text-xl sm:leading-8">
            {description}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            {primary ? (
              <ButtonLink to={primary.to} icon={primary.icon || "ArrowRight"}>
                {primary.label}
              </ButtonLink>
            ) : null}
            {secondary ? (
              <ButtonLink to={secondary.to} variant="secondary" icon={secondary.icon || "ArrowRight"}>
                {secondary.label}
              </ButtonLink>
            ) : null}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
