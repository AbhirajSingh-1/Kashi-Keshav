import { motion } from "framer-motion"
import { SiteIcon } from "./IconMap"

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-[100] grid place-items-center bg-white">
      <motion.div
        className="w-[min(88vw,28rem)] rounded-[2rem] bg-white p-6 shadow-2xl shadow-blue-900/10 ring-1 ring-slate-100"
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.35 }}
      >
        <div className="flex items-center gap-3">
          <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-blue-600 to-orange-400 text-white">
            <SiteIcon name="HeartHandshake" className="h-7 w-7" />
          </span>
          <div>
            <p className="text-xl font-black text-slate-950">Kashi Keshav</p>
            <p className="text-sm font-semibold text-slate-500">Preparing hope-filled stories</p>
          </div>
        </div>
        <div className="mt-8 grid gap-3">
          <div className="skeleton-line h-4 w-11/12" />
          <div className="skeleton-line h-4 w-3/4" />
          <div className="grid grid-cols-3 gap-3 pt-2">
            <div className="skeleton-line h-20" />
            <div className="skeleton-line h-20" />
            <div className="skeleton-line h-20" />
          </div>
        </div>
      </motion.div>
    </div>
  )
}
