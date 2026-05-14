import { motion } from "framer-motion"

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  className = "",
}) {
  const alignment = align === "left" ? "items-start text-left" : "items-center text-center"

  return (
    <motion.div
      className={`mb-8 flex max-w-3xl flex-col sm:mb-10 ${alignment} ${className}`}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
    >
      {eyebrow ? (
        <p className="mb-3 rounded-full bg-orange-50 px-3 py-1.5 text-[0.68rem] font-bold uppercase tracking-[0.14em] text-orange-600 sm:px-4 sm:py-2 sm:text-xs sm:tracking-[0.18em]">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-balance text-2xl font-black leading-tight text-slate-950 min-[380px]:text-3xl sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-lg sm:leading-8">{description}</p>
      ) : null}
    </motion.div>
  )
}
