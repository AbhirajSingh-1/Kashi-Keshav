import { motion } from "framer-motion"
import AnimatedCounter from "./AnimatedCounter"

export default function ImpactStats({ stats, variant = "light" }) {
  const isDark = variant === "dark"

  return (
    <div className="grid grid-cols-1 gap-3 min-[420px]:grid-cols-2 sm:gap-4 lg:grid-cols-4">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          className={`min-w-0 rounded-[1.35rem] p-4 shadow-lg transition duration-300 hover:-translate-y-1 sm:rounded-3xl sm:p-6 sm:shadow-xl ${
            isDark
              ? "bg-white/12 text-white ring-1 ring-white/20 backdrop-blur"
              : "bg-white text-slate-950 ring-1 ring-slate-100"
          }`}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: index * 0.08 }}
        >
          <p className={`text-2xl font-black sm:text-3xl ${isDark ? "text-white" : "text-blue-700"}`}>
            <AnimatedCounter value={stat.value} suffix={stat.suffix} />
          </p>
          <p className={`mt-2 text-xs font-semibold leading-5 sm:text-sm ${isDark ? "text-blue-50" : "text-slate-500"}`}>
            {stat.label}
          </p>
        </motion.div>
      ))}
    </div>
  )
}
