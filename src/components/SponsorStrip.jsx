import { partners } from "../data/siteData"
import ButtonLink from "./ButtonLink"
import SectionHeader from "./SectionHeader"
import { SiteIcon } from "./IconMap"

export default function SponsorStrip() {
  return (
    <section className="bg-white py-20">
      <div className="container-shell">
        <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeader
              align="left"
              eyebrow="Become a sponsor"
              title="Fund a campaign that changes a child's everyday life."
              description="Corporate teams, families, and individual supporters can sponsor education kits, meals, healthcare camps, and long-term child support."
              className="mb-0"
            />
            <ButtonLink to="/donate" icon="CircleDollarSign" className="mt-8">
              Sponsor a Child
            </ButtonLink>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {partners.map((partner, index) => (
              <div
                key={partner}
                className={`rounded-[1.35rem] border border-slate-100 bg-slate-50 p-4 shadow-sm sm:rounded-3xl sm:p-5 ${
                  index === partners.length - 1 ? "sm:col-span-2" : ""
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-2xl bg-white text-blue-700 shadow-sm">
                    <SiteIcon name="BadgeCheck" className="h-5 w-5" />
                  </span>
                  <p className="font-black text-slate-950">{partner}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
