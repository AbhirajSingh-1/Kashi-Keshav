import EventCard from "../components/EventCard"
import Newsletter from "../components/Newsletter"
import PageHero from "../components/PageHero"
import SectionHeader from "../components/SectionHeader"
import Seo from "../components/Seo"
import { SiteIcon } from "../components/IconMap"
import { events, images } from "../data/siteData"

export default function Events() {
  return (
    <>
      <Seo
        title="Events"
        description="Upcoming Kashi Keshav events, donation drives, child welfare campaigns, health camps, and volunteer activities."
      />
      <PageHero
        eyebrow="Events and updates"
        title="Campaigns, drives, and stories from the field."
        description="Explore upcoming events and recent updates where volunteers, donors, and communities come together for children."
        image={images.event}
        primary={{ label: "Join an Event", to: "/contact", icon: "CalendarDays" }}
        secondary={{ label: "Volunteer", to: "/volunteers", icon: "Users" }}
      />

      <section className="bg-slate-50 py-20">
        <div className="container-shell">
          <SectionHeader
            eyebrow="Upcoming campaigns"
            title="Join the next opportunity to serve"
            description="Each event is designed to be practical, family-sensitive, and volunteer-friendly."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {events.map((event, index) => (
              <EventCard key={event.title} event={event} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-shell">
          <SectionHeader
            eyebrow="Latest stories"
            title="Updates from Kashi Keshav programs"
            description="Short field notes from education, nutrition, healthcare, sponsorship, and outreach activities."
          />
          <div className="grid gap-6 lg:grid-cols-3">
            {[
              {
                title: "How a school kit changes a child's first day back",
                icon: "BookOpen",
                text: "A prepared school bag helps children enter classrooms with confidence, dignity, and the essentials they need.",
              },
              {
                title: "Why monthly donors matter",
                icon: "Heart",
                text: "Recurring support helps plan meals, medicines, learning materials, and relief work before urgent needs become crises.",
              },
              {
                title: "Volunteer circles are growing",
                icon: "Users",
                text: "City teams are building local support systems for tutoring, drives, sponsorships, and awareness events.",
              },
            ].map((post) => (
              <article key={post.title} className="rounded-[1.5rem] bg-white p-5 shadow-xl shadow-slate-900/6 ring-1 ring-slate-100 sm:rounded-3xl sm:p-6">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-orange-50 text-orange-600">
                  <SiteIcon name={post.icon} className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-xl font-black text-slate-950 sm:text-2xl">{post.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">{post.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Newsletter />
    </>
  )
}
