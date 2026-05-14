import ImpactStats from "../components/ImpactStats"
import MotionSection from "../components/MotionSection"
import PageHero from "../components/PageHero"
import SectionHeader from "../components/SectionHeader"
import Seo from "../components/Seo"
import { SiteIcon } from "../components/IconMap"
import { founder, images, impactMetrics, timeline, values } from "../data/siteData"

export default function About() {
  return (
    <>
      <Seo
        title="About Us"
        description="Learn about Kashi Keshav's mission, vision, founder, values, and journey as a child-focused NGO in India."
      />
      <PageHero
        eyebrow="About Kashi Keshav"
        title="A child-focused NGO built on care, dignity, and opportunity."
        description="We exist to help underprivileged children learn, eat well, stay healthy, feel safe, and grow with confidence inside stronger communities."
        image={images.about}
        primary={{ label: "Support Our Mission", to: "/donate", icon: "Heart" }}
        secondary={{ label: "Meet Volunteers", to: "/volunteers", icon: "Users" }}
      />

      <MotionSection className="py-20">
        <div className="container-shell grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="overflow-hidden rounded-[1.5rem] shadow-2xl shadow-slate-900/10 sm:rounded-[2rem]">
            <img src={images.hero} alt="Children supported by Kashi Keshav" className="h-full min-h-72 w-full object-cover sm:min-h-96" />
          </div>
          <div>
            <SectionHeader
              align="left"
              eyebrow="Who we are"
              title="Kashi Keshav works for children who need steady support, not temporary sympathy."
              description="The organization brings volunteers, donors, families, and local communities together to create reliable pathways for education, nutrition, healthcare, emotional care, shelter assistance, and social awareness."
              className="mb-0"
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.5rem] bg-blue-50 p-5 ring-1 ring-blue-100 sm:rounded-3xl sm:p-6">
                <SiteIcon name="BookOpen" className="h-7 w-7 text-blue-700" />
                <h3 className="mt-4 text-lg font-black text-slate-950 sm:text-xl">Our mission</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600 sm:text-base">
                  To support vulnerable children with learning, nutrition, healthcare, safety, and
                  confidence-building programs.
                </p>
              </div>
              <div className="rounded-[1.5rem] bg-orange-50 p-5 ring-1 ring-orange-100 sm:rounded-3xl sm:p-6">
                <SiteIcon name="Sparkles" className="h-7 w-7 text-orange-600" />
                <h3 className="mt-4 text-lg font-black text-slate-950 sm:text-xl">Our vision</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600 sm:text-base">
                  A future where every child has equal opportunities to learn, grow, dream, and live
                  with dignity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </MotionSection>

      <section className="bg-slate-50 py-20">
        <div className="container-shell">
          <SectionHeader
            eyebrow="Why we exist"
            title="Because a child's future should never depend on poverty."
            description="Many children face missed schooling, food insecurity, preventable health risks, unsafe environments, and emotional neglect. Kashi Keshav responds with community-rooted support that is practical and measurable."
          />
          <ImpactStats stats={impactMetrics} />
        </div>
      </section>

      <MotionSection className="py-20">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="rounded-[1.5rem] bg-gradient-to-br from-blue-700 to-orange-500 p-1 shadow-2xl shadow-blue-900/15 sm:rounded-[2rem]">
            <div className="h-full rounded-[1.3rem] bg-white p-4 sm:rounded-[1.8rem] sm:p-6">
              <img
                src={founder.image}
                alt={founder.name}
                className={`h-64 w-full rounded-[1.15rem] bg-slate-100 sm:h-80 sm:rounded-[1.5rem] ${
                  founder.imageFit === "contain" ? "object-contain" : "object-cover"
                }`}
                style={{ objectPosition: founder.imagePosition || "center" }}
              />
              <h3 className="mt-5 text-2xl font-black text-slate-950 sm:mt-6 sm:text-3xl">{founder.name}</h3>
              <p className="mt-1 font-bold text-orange-600">Founder, Age {founder.age}</p>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <SectionHeader
              align="left"
              eyebrow="Founder's message"
              title="Children do not need perfect systems to begin healing. They need someone to show up."
              description="Kashi Keshav was started to make support feel close, practical, and human. Our work is carried by volunteers who believe small acts, repeated with honesty, can become lasting change for a child and their family."
              className="mb-0"
            />
            <p className="mt-6 rounded-[1.5rem] bg-blue-50 p-5 text-base font-bold leading-8 text-slate-800 ring-1 ring-blue-100 sm:rounded-3xl sm:p-6 sm:text-lg sm:leading-9">
              "Every child we meet carries a story. Our responsibility is to make sure that story has
              safety, education, nourishment, and hope inside it."
            </p>
          </div>
        </div>
      </MotionSection>

      <section className="bg-white py-20">
        <div className="container-shell">
          <SectionHeader
            eyebrow="Our journey"
            title="Growing one trusted community at a time"
            description="The Kashi Keshav journey continues to expand through volunteers, donors, schools, families, and supporters."
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {timeline.map((item, index) => (
              <div key={item.year} className="relative rounded-[1.5rem] bg-slate-50 p-5 ring-1 ring-slate-100 sm:rounded-3xl sm:p-6">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-blue-600 text-sm font-black text-white">
                  {index + 1}
                </span>
                <p className="mt-6 text-sm font-black uppercase tracking-[0.18em] text-orange-600">
                  {item.year}
                </p>
                <h3 className="mt-2 text-lg font-black text-slate-950 sm:text-xl">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-blue-50/70 py-20">
        <div className="container-shell">
          <SectionHeader
            eyebrow="Our values"
            title="The principles behind every campaign"
            description="These values guide how Kashi Keshav works with children, families, donors, and volunteers."
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div key={value.title} className="rounded-[1.5rem] bg-white p-5 shadow-xl shadow-blue-900/5 ring-1 ring-blue-100 sm:rounded-3xl sm:p-6">
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-orange-50 text-orange-600">
                  <SiteIcon name={value.icon} className="h-7 w-7" />
                </span>
                <h3 className="mt-5 text-lg font-black text-slate-950 sm:text-xl">{value.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
