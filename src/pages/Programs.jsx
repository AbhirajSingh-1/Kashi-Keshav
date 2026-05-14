import ButtonLink from "../components/ButtonLink"
import ImpactStats from "../components/ImpactStats"
import PageHero from "../components/PageHero"
import ProgramCard from "../components/ProgramCard"
import SectionHeader from "../components/SectionHeader"
import Seo from "../components/Seo"
import { SiteIcon } from "../components/IconMap"
import { images, impactMetrics, programs } from "../data/siteData"

export default function Programs() {
  return (
    <>
      <Seo
        title="Programs"
        description="Explore Kashi Keshav programs for child education, food distribution, healthcare, child protection, skill development, emergency relief, and women and child welfare."
      />
      <PageHero
        eyebrow="What we do"
        title="Programs designed around the real needs of children."
        description="From classroom support to food security, healthcare, protection, skill building, and relief work, every initiative is built for practical child welfare."
        image={images.classroom}
        primary={{ label: "Donate to Programs", to: "/donate", icon: "Heart" }}
        secondary={{ label: "Volunteer With Us", to: "/volunteers", icon: "Users" }}
      />

      <section className="bg-slate-50 py-20">
        <div className="container-shell">
          <SectionHeader
            eyebrow="Core initiatives"
            title="Seven ways Kashi Keshav supports children and families"
            description="Each program is designed to be clear, measurable, and easy for volunteers and donors to support."
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {programs.map((program, index) => (
              <ProgramCard key={program.title} program={program} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container-shell grid items-center gap-10 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <SectionHeader
              align="left"
              eyebrow="How support flows"
              title="Donations become field action through transparent program planning."
              description="Kashi Keshav maps needs, mobilizes volunteers, procures essentials, coordinates local delivery, and shares impact updates for supporters."
              className="mb-0"
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                "Need assessment",
                "Volunteer coordination",
                "Donation allocation",
                "Impact reporting",
              ].map((step) => (
                <div key={step} className="flex items-center gap-3 rounded-[1.35rem] bg-slate-50 p-4 ring-1 ring-slate-100 sm:rounded-3xl sm:p-5">
                  <span className="grid h-10 w-10 place-items-center rounded-2xl bg-blue-600 text-white">
                    <SiteIcon name="CheckCircle2" className="h-5 w-5" />
                  </span>
                  <p className="text-sm font-black text-slate-950 sm:text-base">{step}</p>
                </div>
              ))}
            </div>
            <ButtonLink to="/contact" className="mt-8" icon="MessageCircle">
              Discuss a Campaign
            </ButtonLink>
          </div>
          <div className="rounded-[1.5rem] bg-gradient-to-br from-blue-700 to-orange-500 p-1 shadow-2xl shadow-blue-900/15 sm:rounded-[2rem]">
            <div className="rounded-[1.3rem] bg-white p-4 sm:rounded-[1.8rem] sm:p-6">
              <ImpactStats stats={impactMetrics.slice(0, 4)} />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
