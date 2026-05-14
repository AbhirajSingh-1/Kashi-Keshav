import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import ButtonLink from "../components/ButtonLink"
import EventCard from "../components/EventCard"
import ImpactStats from "../components/ImpactStats"
import MotionSection from "../components/MotionSection"
import Newsletter from "../components/Newsletter"
import ProgramCard from "../components/ProgramCard"
import SectionHeader from "../components/SectionHeader"
import Seo from "../components/Seo"
import SponsorStrip from "../components/SponsorStrip"
import TestimonialsCarousel from "../components/TestimonialsCarousel"
import { galleryImages, images, programs, stats, events } from "../data/siteData"
import { SiteIcon } from "../components/IconMap"

export default function Home() {
  return (
    <>
      <Seo
        title="Home"
        description="Kashi Keshav is a child-focused NGO supporting education, food, healthcare, shelter, and community care for underprivileged children across India."
      />
      <section className="relative isolate overflow-hidden bg-slate-950 pt-20 text-white sm:pt-24 lg:pt-28">
        <div className="absolute inset-0 -z-10">
          <img src={images.hero} alt="Children supported by community care" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-slate-950/58" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/96 via-slate-950/80 to-slate-950/28" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/74 via-transparent to-slate-950/34" />
        </div>

        <div className="container-shell grid items-center gap-7 py-8 sm:gap-10 sm:py-12 lg:grid-cols-[1.05fr_0.95fr] lg:py-16">
          <motion.div
            className="hero-copy"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
          >
            <p className="mb-4 inline-flex rounded-full bg-white/12 px-3 py-1.5 text-[0.68rem] font-black uppercase tracking-[0.14em] text-orange-100 ring-1 ring-white/20 backdrop-blur sm:mb-5 sm:px-4 sm:py-2 sm:text-xs sm:tracking-[0.2em]">
              Child welfare NGO across India
            </p>
            <h1 className="text-balance text-3xl font-black leading-[1.08] min-[380px]:text-4xl sm:text-6xl sm:leading-[1.03] lg:text-7xl">
              Every child deserves safety, learning, and a hopeful tomorrow.
            </h1>
            <p className="hero-description mt-5 max-w-2xl text-base font-semibold leading-7 text-white sm:mt-6 sm:text-xl sm:leading-8">
              Kashi Keshav supports underprivileged children through education, food, healthcare,
              emotional care, shelter support, and community-led development.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink to="/donate" icon="Heart">
                Donate Now
              </ButtonLink>
              <ButtonLink to="/volunteers" variant="secondary" icon="Users">
                Become a Volunteer
              </ButtonLink>
              <ButtonLink to="/contact" variant="outline" icon="MessageCircle" className="text-white ring-white/40 hover:text-slate-950">
                Contact Us
              </ButtonLink>
            </div>
          </motion.div>

          <motion.div
            className="rounded-[1.5rem] bg-slate-950/36 p-3 shadow-2xl ring-1 ring-white/20 backdrop-blur-xl sm:rounded-[2rem] sm:p-5"
            initial={{ opacity: 0, x: 28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, delay: 0.15, ease: "easeOut" }}
          >
            <div className="overflow-hidden rounded-[1.15rem] sm:rounded-[1.5rem]">
              <img
                src={images.about}
                alt="Children smiling during a care program"
                className="h-48 w-full object-cover min-[380px]:h-56 sm:h-96"
              />
            </div>
            <div className="mt-3 grid grid-cols-2 gap-2 sm:mt-5 sm:gap-3">
              <div className="rounded-[1.15rem] bg-slate-950/44 p-3 ring-1 ring-white/15 sm:rounded-3xl sm:p-4">
                <SiteIcon name="BookOpen" className="h-5 w-5 text-orange-200 sm:h-6 sm:w-6" />
                <p className="mt-2 text-xs font-bold leading-5 text-white sm:mt-3 sm:text-sm">Education that stays with every child.</p>
              </div>
              <div className="rounded-[1.15rem] bg-slate-950/44 p-3 ring-1 ring-white/15 sm:rounded-3xl sm:p-4">
                <SiteIcon name="ShieldCheck" className="h-5 w-5 text-orange-200 sm:h-6 sm:w-6" />
                <p className="mt-2 text-xs font-bold leading-5 text-white sm:mt-3 sm:text-sm">Care systems that families can trust.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-white py-8 sm:py-10 lg:py-12">
        <div className="container-shell">
          <ImpactStats stats={stats} variant="light" />
        </div>
      </section>

      <MotionSection className="pb-20 pt-8 sm:pt-10 lg:pt-12">
        <div className="container-shell">
          <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <SectionHeader
                align="left"
                eyebrow="Our promise"
                title="Practical care, steady presence, and real opportunities."
                description="Kashi Keshav works where children need reliable support most: classrooms, homes, health camps, community centers, and emergency relief networks."
                className="mb-0"
              />
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {["Education", "Food", "Healthcare", "Shelter"].map((item) => (
                  <div key={item} className="rounded-[1.35rem] bg-slate-50 p-4 ring-1 ring-slate-100 sm:rounded-3xl sm:p-5">
                    <SiteIcon name="CheckCircle2" className="h-6 w-6 text-orange-500" />
                    <p className="mt-3 text-sm font-black text-slate-950 sm:text-base">{item} support</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {programs.slice(0, 4).map((program, index) => (
                <Link
                  key={program.title}
                  to="/programs"
                  className={`group rounded-[1.5rem] bg-white p-5 shadow-xl shadow-slate-900/6 ring-1 ring-slate-100 transition hover:-translate-y-1 sm:rounded-3xl ${
                    index % 2 ? "sm:mt-8" : ""
                  }`}
                >
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-blue-50 text-blue-700 transition group-hover:bg-orange-500 group-hover:text-white">
                    <SiteIcon name={program.icon} className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 text-lg font-black text-slate-950 sm:text-xl">{program.title}</h3>
                  <p className="mt-2 line-clamp-3 text-sm leading-7 text-slate-600 sm:text-base">{program.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </MotionSection>

      <section className="bg-slate-50 py-20">
        <div className="container-shell">
          <SectionHeader
            eyebrow="What we do"
            title="Featured programs built around children's daily needs"
            description="Focused initiatives help children return to school, stay healthy, eat well, feel protected, and discover new skills."
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {programs.slice(0, 3).map((program, index) => (
              <ProgramCard key={program.title} program={program} index={index} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <ButtonLink to="/programs" variant="blue" icon="ArrowRight">
              Explore All Programs
            </ButtonLink>
          </div>
        </div>
      </section>

      <TestimonialsCarousel />

      <section className="py-20">
        <div className="container-shell">
          <SectionHeader
            eyebrow="Moments of impact"
            title="Field stories in pictures"
            description="A glimpse into learning sessions, food support, health outreach, and volunteer-led community days."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {galleryImages.slice(0, 8).map((item, index) => (
              <Link
                to="/gallery"
                key={item.title}
                className={`group relative overflow-hidden rounded-[1.5rem] sm:rounded-3xl ${
                  index === 0 || index === 5 ? "sm:col-span-2" : ""
                }`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-52 w-full object-cover transition duration-700 group-hover:scale-110 sm:h-64"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent opacity-90" />
                <p className="absolute bottom-5 left-5 font-black text-white">{item.title}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <SponsorStrip />

      <section className="bg-slate-50 py-20">
        <div className="container-shell">
          <SectionHeader
            eyebrow="Latest events"
            title="Campaigns where supporters can take action"
            description="Join upcoming drives and community programs led by Kashi Keshav volunteers."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {events.map((event, index) => (
              <EventCard key={event.title} event={event} index={index} />
            ))}
          </div>
        </div>
      </section>

      <Newsletter />
    </>
  )
}
