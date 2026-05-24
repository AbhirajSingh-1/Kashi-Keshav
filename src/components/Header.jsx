import { useEffect, useRef, useState } from "react"
import { Link, NavLink } from "react-router-dom"
import { navLinks } from "../data/siteData"
import ButtonLink from "./ButtonLink"
import { SiteIcon } from "./IconMap"

// Links pinned outside hamburger on mobile
const MOBILE_PINNED = ["/", "/about"]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const menuRef = useRef(null)
  const toggleRef = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [open])

  useEffect(() => {
    if (!open) return
    const handler = (e) => {
      if (
        menuRef.current && !menuRef.current.contains(e.target) &&
        toggleRef.current && !toggleRef.current.contains(e.target)
      ) setOpen(false)
    }
    document.addEventListener("mousedown", handler)
    document.addEventListener("touchstart", handler)
    return () => {
      document.removeEventListener("mousedown", handler)
      document.removeEventListener("touchstart", handler)
    }
  }, [open])

  useEffect(() => {
    const handler = (e) => { if (e.key === "Escape") setOpen(false) }
    document.addEventListener("keydown", handler)
    return () => document.removeEventListener("keydown", handler)
  }, [])

  const navClass = ({ isActive }) =>
    `rounded-full px-3.5 py-2 text-sm font-bold transition ${
      isActive ? "bg-blue-50 text-blue-700" : "text-slate-600 hover:bg-orange-50 hover:text-orange-600"
    }`

  const pinnedLinks = navLinks.filter((l) => MOBILE_PINNED.includes(l.path))
  const overflowLinks = navLinks.filter((l) => !MOBILE_PINNED.includes(l.path))

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-shadow duration-300 ${
        scrolled
          ? "bg-white/95 shadow-lg shadow-slate-900/8 backdrop-blur-xl"
          : "bg-white/80 backdrop-blur-md"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-20 sm:px-6 lg:px-8">

        {/* ── Logo ── */}
        <Link to="/" className="isolate flex items-center gap-3" onClick={() => setOpen(false)}>
          {/* Icon mark */}
          <span className="relative grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-blue-700 via-blue-600 to-orange-500 text-white shadow-lg shadow-blue-600/25 ring-1 ring-white/60 sm:h-11 sm:w-11">
            <SiteIcon name="HandHeart" className="h-5 w-5 sm:h-[22px] sm:w-[22px]" />
          </span>

          {/* Site name — stylised, no subtitle */}
          <span className="flex flex-col leading-none">
            {/* "Kashi" in slate, "Keshav" in gradient */}
            <span className="flex items-baseline gap-[3px] text-[1.05rem] font-black tracking-tight sm:text-[1.2rem]">
              <span className="text-slate-800">Kashi</span>
              <span className="bg-gradient-to-r from-blue-700 to-orange-500 bg-clip-text text-transparent">
                Keshav
              </span>
            </span>
            {/* Thin tagline — tasteful, not "Child NGO" */}
            <span className="mt-[2px] text-[0.55rem] font-bold uppercase tracking-[0.22em] text-slate-400 sm:text-[0.58rem]">
              Hope for every child
            </span>
          </span>
        </Link>

        {/* ── Desktop nav ≥ 1400px ── */}
        <div className="hidden items-center gap-0.5 min-[1400px]:flex">
          {navLinks.map((link) => (
            <NavLink key={link.path} to={link.path} className={navClass}>
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* ── Desktop CTAs ── */}
        <div className="hidden items-center gap-3 min-[1400px]:flex">
          <ButtonLink to="/volunteers#register" variant="secondary" icon="Users" className="px-4 py-2.5">
            Join Us
          </ButtonLink>
          <ButtonLink to="/donate" icon="Heart" className="px-4 py-2.5">
            Donate
          </ButtonLink>
        </div>

        {/* ── Mobile right cluster ── */}
        <div className="flex items-center gap-1 min-[1400px]:hidden">

          {/* Pinned links: Home & About Us */}
          {pinnedLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `flex items-center rounded-full px-3 py-2 text-sm font-bold leading-none transition ${
                  isActive
                    ? "bg-blue-50 text-blue-700"
                    : "text-slate-700 hover:bg-orange-50 hover:text-orange-600"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}

          {/* Animated hamburger */}
          <button
            ref={toggleRef}
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className={`relative ml-1 grid h-11 w-11 place-items-center rounded-full shadow-md ring-1 transition-all duration-300 ${
              open
                ? "bg-slate-950 text-white shadow-slate-900/20 ring-slate-800"
                : "bg-white text-slate-900 shadow-slate-900/10 ring-slate-200 hover:bg-slate-50"
            }`}
          >
            <span className="flex flex-col items-center justify-center gap-[5px]">
              <span
                className={`block h-[2px] rounded-full bg-current transition-all duration-300 ease-in-out ${
                  open ? "w-[18px] translate-y-[7px] rotate-45" : "w-[18px]"
                }`}
              />
              <span
                className={`block h-[2px] rounded-full bg-current transition-all duration-200 ease-in-out ${
                  open ? "w-0 opacity-0" : "w-[13px]"
                }`}
              />
              <span
                className={`block h-[2px] rounded-full bg-current transition-all duration-300 ease-in-out ${
                  open ? "w-[18px] -translate-y-[7px] -rotate-45" : "w-[18px]"
                }`}
              />
            </span>
          </button>
        </div>
      </nav>

      {/* ── Mobile dropdown ── */}
      <div
        ref={menuRef}
        className={`
          fixed inset-x-3 top-[4.5rem] z-50 max-h-[calc(100svh-5.5rem)] overflow-y-auto
          rounded-2xl bg-white shadow-2xl ring-1 ring-slate-100/80
          transition-all duration-300 ease-in-out
          sm:inset-x-5 sm:top-[5.5rem] sm:rounded-3xl
          min-[1400px]:hidden
          ${open
            ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
            : "pointer-events-none -translate-y-2 scale-[0.98] opacity-0"
          }
        `}
      >
        <div className="p-2">
          {overflowLinks.map((link, i) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `flex items-center rounded-xl px-4 py-3.5 text-[0.95rem] font-bold transition ${
                  isActive
                    ? "bg-blue-50 text-blue-700"
                    : "text-slate-700 hover:bg-orange-50 hover:text-orange-600"
                }`
              }
              style={{ transitionDelay: open ? `${i * 25}ms` : "0ms" }}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-3 border-t border-slate-100 p-3">
          <ButtonLink
            to="/volunteers#register"
            variant="secondary"
            icon="Users"
            onClick={() => setOpen(false)}
            className="justify-center py-3 text-sm"
          >
            Volunteer
          </ButtonLink>
          <ButtonLink
            to="/donate"
            icon="Heart"
            onClick={() => setOpen(false)}
            className="justify-center py-3 text-sm"
          >
            Donate
          </ButtonLink>
        </div>
      </div>
    </header>
  )
}