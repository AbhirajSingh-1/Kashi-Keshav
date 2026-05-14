import ButtonLink from "./ButtonLink"
import { SiteIcon } from "./IconMap"

export default function Newsletter() {
  return (
    <section className="py-20">
      <div className="container-shell">
        <div className="overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-blue-700 via-blue-600 to-orange-500 p-1 shadow-2xl shadow-blue-900/15 sm:rounded-[2rem]">
          <div className="grid gap-6 rounded-[1.3rem] bg-white/95 p-5 backdrop-blur sm:gap-8 sm:rounded-[1.8rem] sm:p-6 lg:grid-cols-[1fr_0.9fr] lg:p-10">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.14em] text-orange-600 sm:text-sm sm:tracking-[0.18em]">
                Stay close to the impact
              </p>
              <h2 className="mt-3 text-2xl font-black text-slate-950 sm:text-4xl">
                Get field updates, campaign notes, and volunteer stories.
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
                Join the Kashi Keshav newsletter for practical ways to help children through
                education, food support, healthcare, and community care.
              </p>
            </div>
            <form className="flex flex-col justify-center gap-3" onSubmit={(event) => event.preventDefault()}>
              <label className="sr-only" htmlFor="newsletter-email">
                Email address
              </label>
              <div className="flex flex-col gap-3 rounded-3xl bg-slate-50 p-3 ring-1 ring-slate-200 sm:flex-row">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white text-blue-700 shadow-sm">
                  <SiteIcon name="Mail" className="h-5 w-5" />
                </span>
                <input
                  id="newsletter-email"
                  type="email"
                  placeholder="Enter your email"
                  className="min-h-12 flex-1 bg-transparent px-2 text-slate-950 outline-none placeholder:text-slate-400"
                />
                <ButtonLink type="submit" icon="ArrowRight" className="sm:px-6">
                  Subscribe
                </ButtonLink>
              </div>
              <p className="text-sm text-slate-500">No spam, only meaningful updates.</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
