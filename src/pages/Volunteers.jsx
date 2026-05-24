import PageHero from "../components/PageHero"
import SectionHeader from "../components/SectionHeader"
import Seo from "../components/Seo"
import VolunteerCard from "../components/VolunteerCard"
import VolunteerForm from "../components/VolunteerForm"
import { SiteIcon } from "../components/IconMap"
import { additionalVolunteers, founder, images, volunteers } from "../data/siteData"

const perks = [
  { icon: "BookOpen", title: "Skill-based roles",  desc: "Tutoring, design, fundraising, field coordination — pick what fits you." },
  { icon: "MapPin",   title: "Work from anywhere", desc: "Remote and on-ground opportunities available across India." },
  { icon: "Users",    title: "Join a caring team", desc: "Work alongside passionate volunteers who show up for children." },
  { icon: "Heart",    title: "Real impact",         desc: "Every hour you give reaches a child who needs it most." },
]

export default function Volunteers() {
  return (
    <>
      <Seo
        title="Volunteer Team"
        description="Meet Kashi Keshav founder Sakshi Anand and the volunteer team supporting child welfare programs across India."
      />
      <PageHero
        eyebrow="Volunteer team"
        title="People who show up for children with time, care, and consistency."
        description="Kashi Keshav is powered by volunteers who coordinate learning support, food drives, healthcare camps, sponsorships, and community outreach."
        image={images.volunteer}
        primary={{ label: "Register as Volunteer", to: "/volunteers#register", icon: "Users" }}
        secondary={{ label: "Contact Team", to: "/contact", icon: "MessageCircle" }}
      />

      {/* ── Founder ── */}
      <section className="py-20">
        <div className="container-shell">
          <SectionHeader
            eyebrow="Founder"
            title="Leadership with compassion and field focus"
            description="The founder's role is to keep programs grounded, transparent, and deeply connected to children's lived realities."
          />
          <VolunteerCard person={founder} founder />
        </div>
      </section>

      {/* ── Core volunteers ── */}
      <section className="bg-slate-50 py-20">
        <div className="container-shell">
          <SectionHeader
            eyebrow="Core volunteers"
            title="Meet the hands behind every campaign"
            description="These volunteers support field coordination, student mentoring, food drives, digital outreach, and sponsor communication."
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {volunteers.map((person, index) => (
              <VolunteerCard key={person.name} person={person} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Additional volunteers ── */}
      <section className="py-20">
        <div className="container-shell">
          <SectionHeader
            eyebrow="Additional volunteers"
            title="A growing network across India"
            description="Kashi Keshav continues to welcome supporters who can contribute time, skills, coordination, and local knowledge."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {additionalVolunteers.map((person) => (
              <div key={person.name} className="rounded-[1.5rem] bg-white p-5 shadow-lg shadow-slate-900/5 ring-1 ring-slate-100 transition hover:-translate-y-1 hover:shadow-xl sm:rounded-3xl sm:p-6">
                <div className="flex items-start gap-4">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-blue-50 text-blue-700">
                    <SiteIcon name="Users" className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="text-base font-black text-slate-950 sm:text-lg">{person.name}</h3>
                    <p className="mt-1 text-sm font-semibold text-slate-500 sm:text-base">
                      {person.location}
                      {person.age ? ` | Age ${person.age}` : ""}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Registration ── */}
      <section id="register" className="bg-slate-50 py-20">
        <div className="container-shell">
          <div className="overflow-hidden rounded-[2rem] bg-white shadow-2xl shadow-slate-900/8 ring-1 ring-slate-100 lg:grid lg:grid-cols-[360px_1fr] xl:grid-cols-[400px_1fr]">

            {/* Left info panel */}
            <aside className="flex flex-col justify-between gap-8 bg-gradient-to-br from-orange-500 via-orange-500 to-blue-700 p-8 text-white sm:p-10">
              <div>
                <div className="flex items-center gap-3">
                  <span className="grid h-9 w-9 place-items-center rounded-xl bg-white/15 ring-1 ring-white/30">
                    <SiteIcon name="Users" className="h-4 w-4 text-white" />
                  </span>
                  <span className="text-xs font-black uppercase tracking-[0.18em] text-white/70">
                    Join the team
                  </span>
                </div>

                <h2 className="mt-7 text-2xl font-black leading-snug sm:text-3xl">
                  Bring your skills to a child-focused cause.
                </h2>
                <p className="mt-3 text-sm leading-7 text-orange-50">
                  Every skill — big or small — finds a meaningful place at Kashi Keshav.
                </p>

                <div className="mt-8 grid gap-5">
                  {perks.map(({ icon, title, desc }) => (
                    <div key={title} className="flex items-start gap-3">
                      <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-white/15 ring-1 ring-white/20">
                        <SiteIcon name={icon} className="h-4 w-4 text-white" />
                      </span>
                      <div>
                        <p className="text-sm font-black text-white">{title}</p>
                        <p className="mt-0.5 text-xs leading-5 text-orange-100">{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl bg-white/10 p-5 ring-1 ring-white/15">
                <p className="text-xs leading-6 text-orange-50 italic">
                  "Volunteering here changed how I see impact. Every small act adds up to something real for these children."
                </p>
                <p className="mt-2 text-xs font-black uppercase tracking-[0.14em] text-white/50">
                  — A Kashi Keshav volunteer
                </p>
              </div>
            </aside>

            {/* Right: custom form */}
            <div className="p-7 sm:p-10">
              <div className="mb-7">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-orange-500">Volunteer registration</p>
                <h3 className="mt-1 text-xl font-black text-slate-900 sm:text-2xl">
                  Fill in your details below.
                </h3>
              </div>
              <VolunteerForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}