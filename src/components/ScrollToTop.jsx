import { useEffect, useState } from "react"
import { SiteIcon } from "./IconMap"

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600)
    onScroll()
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  if (!visible) return null

  return (
    <button
      type="button"
      className="fixed bottom-5 right-5 z-40 grid h-12 w-12 place-items-center rounded-full bg-slate-950 text-white shadow-xl transition hover:-translate-y-1 hover:bg-orange-500"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Scroll to top"
    >
      <SiteIcon name="ChevronDown" className="h-5 w-5 rotate-180" />
    </button>
  )
}
