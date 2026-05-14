import ButtonLink from "../components/ButtonLink"
import PageHero from "../components/PageHero"
import SectionHeader from "../components/SectionHeader"
import Seo from "../components/Seo"
import VolunteerCard from "../components/VolunteerCard"
import { SiteIcon } from "../components/IconMap"
import { additionalVolunteers, founder, images, volunteers } from "../data/siteData"

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

      <section id="register" className="bg-blue-50/70 py-20">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeader
              align="left"
              eyebrow="Volunteer registration"
              title="Bring your skills to a child-focused cause."
              description="Tell us how you would like to help. You can support tutoring, content, field drives, fundraising, operations, community outreach, or event coordination."
              className="mb-0"
            />
          </div>
          <form className="grid gap-4 rounded-[1.5rem] bg-white p-4 shadow-xl shadow-blue-900/6 ring-1 ring-blue-100 sm:rounded-[2rem] sm:p-6" onSubmit={(event) => event.preventDefault()}>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-bold text-slate-700">
                Full name
                <input className="form-field" placeholder="Your name" />
              </label>
              <label className="grid gap-2 text-sm font-bold text-slate-700">
                City
                <input className="form-field" placeholder="City, State" />
              </label>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-bold text-slate-700">
                Email
                <input className="form-field" type="email" placeholder="you@example.com" />
              </label>
              <label className="grid gap-2 text-sm font-bold text-slate-700">
                Phone
                <input className="form-field" placeholder="+91" />
              </label>
            </div>
            <label className="grid gap-2 text-sm font-bold text-slate-700">
              How can you help?
              <textarea className="form-field min-h-32 resize-none" placeholder="Tutoring, drives, fundraising, design, outreach..." />
            </label>
            <ButtonLink type="submit" icon="ArrowRight" className="justify-self-start">
              Submit Registration
            </ButtonLink>
          </form>
        </div>
      </section>
    </>
  )
}
