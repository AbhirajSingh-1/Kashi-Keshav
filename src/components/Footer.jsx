import { Link } from "react-router-dom"
import { navLinks, programs } from "../data/siteData"
import ButtonLink from "./ButtonLink"
import { SiteIcon } from "./IconMap"

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-slate-50">

      {/* ── Top accent line ── */}
      <div className="h-1 w-full bg-gradient-to-r from-blue-600 via-blue-500 to-orange-500" />

      {/* ── CTA Banner ── */}
      <div className="bg-gradient-to-br from-blue-700 via-blue-700 to-blue-800">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-[0.7rem] font-black uppercase tracking-[0.24em] text-orange-300">
                Make care practical
              </p>
              <h2 className="mt-2 text-xl font-black leading-snug text-white sm:text-2xl lg:text-3xl">
                Help children access learning,{" "}
                <span className="text-orange-300">meals &amp; health support.</span>
              </h2>
            </div>
            <ButtonLink
              to="/donate"
              icon="Heart"
              className="w-full shrink-0 justify-center border-2 border-white/30  text-blue-700 hover:bg-orange-500 hover:text-white hover:border-orange-500 sm:w-auto"
            >
              Donate Now
            </ButtonLink>
          </div>
        </div>
      </div>

      {/* ── Main Content ── */}
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-[1.8fr_0.85fr_0.95fr_1.2fr] lg:gap-12">

          {/* ── Brand ── */}
          <div className="col-span-2 lg:col-span-1">
            <Link to="/" className="inline-flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-blue-700 via-blue-600 to-orange-500 text-white shadow-md shadow-blue-200 ring-2 ring-white">
                <SiteIcon name="HandHeart" className="h-5 w-5" />
              </span>
              <span>
                <span className="flex items-baseline gap-[3px] text-lg font-black">
                  <span className="text-slate-800">Kashi</span>
                  <span className="bg-gradient-to-r from-blue-700 to-orange-500 bg-clip-text text-transparent">Keshav</span>
                </span>
                <span className="block text-[0.6rem] font-bold uppercase tracking-[0.22em] text-orange-500">
                  Hope for every child
                </span>
              </span>
            </Link>

            <p className="mt-4 max-w-xs text-sm leading-7 text-slate-500">
              A child-focused NGO supporting education, food, healthcare, shelter, and community
              development across India.
            </p>

            <div className="mt-5 flex gap-2.5">
              {[
                { icon: "Instagram", href: "#" },
                { icon: "Linkedin", href: "#" },
                { icon: "MessageCircle", href: "#" },
              ].map(({ icon, href }) => (
                <a
                  key={icon}
                  href={href}
                  aria-label={`${icon} profile`}
                  className="group grid h-9 w-9 place-items-center rounded-full border border-slate-200 bg-white text-slate-500 shadow-sm transition-all hover:border-blue-200 hover:bg-blue-600 hover:text-white hover:shadow-md"
                >
                  <SiteIcon name={icon} className="h-4 w-4 transition-transform duration-200 group-hover:scale-110" />
                </a>
              ))}
            </div>

            <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3.5 py-2">
              <SiteIcon name="ShieldCheck" className="h-3.5 w-3.5 text-blue-600" />
              <span className="text-[0.68rem] font-bold text-blue-700">Registered NGO · FCRA Certified</span>
            </div>
          </div>

          {/* ── Navigation ── */}
          <div>
            <h3 className="mb-4 text-[0.68rem] font-black uppercase tracking-[0.22em] text-slate-400">
              Navigation
            </h3>
            <div className="grid gap-2.5">
              {navLinks.slice(0, 6).map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="group flex items-center gap-2 text-sm font-semibold text-slate-600 transition-colors hover:text-blue-700"
                >
                  <span className="h-px w-3 shrink-0 bg-slate-300 transition-all duration-200 group-hover:w-5 group-hover:bg-orange-500" />
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* ── Programs ── */}
          <div>
            <h3 className="mb-4 text-[0.68rem] font-black uppercase tracking-[0.22em] text-slate-400">
              Programs
            </h3>
            <div className="grid gap-2.5">
              {programs.slice(0, 5).map((program) => (
                <Link
                  key={program.title}
                  to="/programs"
                  className="group flex items-center gap-2 text-sm font-semibold text-slate-600 transition-colors hover:text-blue-700"
                >
                  <span className="h-px w-3 shrink-0 bg-slate-300 transition-all duration-200 group-hover:w-5 group-hover:bg-blue-600" />
                  {program.title}
                </Link>
              ))}
            </div>
          </div>

          {/* ── Contact ── */}
          <div className="col-span-2 lg:col-span-1">
            <h3 className="mb-4 text-[0.68rem] font-black uppercase tracking-[0.22em] text-slate-400">
              Get in Touch
            </h3>

            <div className="grid gap-3">
              {[
                { icon: "MapPin", text: "Saraswati nagar road number 2 Near Shiv Mandir, Muzaffarpur, Bihar ", color: "orange" },
                { icon: "Mail", text: "Kashikeshav01@gmail.com", color: "blue" },
                { icon: "Phone", text: "+91 9821673232", color: "blue" },
              ].map(({ icon, text, color }) => (
                <div key={text} className="flex items-center gap-3">
                  <span
                    className={`grid h-9 w-9 shrink-0 place-items-center rounded-xl shadow-sm ${
                      color === "orange"
                        ? "bg-orange-50 text-orange-600 ring-1 ring-orange-100"
                        : "bg-blue-50 text-blue-600 ring-1 ring-blue-100"
                    }`}
                  >
                    <SiteIcon name={icon} className="h-4 w-4" />
                  </span>
                  <p className="text-sm font-medium leading-snug text-slate-600">{text}</p>
                </div>
              ))}
            </div>

            <div className="mt-5 grid grid-cols-2 gap-3">
              {[
                { num: "2K+", label: "Children Helped", color: "blue" },
                { num: "8", label: "States Active", color: "orange" },
              ].map(({ num, label, color }) => (
                <div
                  key={label}
                  className={`rounded-xl p-3 text-center ring-1 ${
                    color === "blue" ? "bg-blue-50 ring-blue-100" : "bg-orange-50 ring-orange-100"
                  }`}
                >
                  <p className={`text-xl font-black ${color === "blue" ? "text-blue-700" : "text-orange-600"}`}>
                    {num}
                  </p>
                  <p className="mt-0.5 text-[0.63rem] font-bold uppercase tracking-wide text-slate-500">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm font-semibold text-slate-400">
              © 2026 Kashikeshav child care foundation. All rights reserved.
            </p>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
              <Link to="/privacy" className="text-sm font-semibold text-slate-400 transition hover:text-blue-700">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-sm font-semibold text-slate-400 transition hover:text-blue-700">
                Terms
              </Link>
              <p className="text-sm font-semibold text-slate-400">
                Built for child welfare &amp; community impact.
              </p>
            </div>
          </div>
        </div>
      </div>

    </footer>
  )
}