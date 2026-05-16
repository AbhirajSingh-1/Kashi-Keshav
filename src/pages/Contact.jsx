import ButtonLink from "../components/ButtonLink"
import FAQAccordion from "../components/FAQAccordion"
import PageHero from "../components/PageHero"
import SectionHeader from "../components/SectionHeader"
import Seo from "../components/Seo"
import { SiteIcon } from "../components/IconMap"
import { images } from "../data/siteData"

export default function Contact() {
  return (
    <>
      <Seo
        title="Contact"
        description="Contact Kashi Keshav for donations, volunteering, sponsorships, events, and child welfare support programs."
      />
      <PageHero
        eyebrow="Contact us"
        title="Start a conversation that can support a child."
        description="Reach out for donations, volunteering, sponsorships, field partnerships, events, and community support initiatives."
        image={images.volunteer}
        primary={{ label: "Donate Now", to: "/donate", icon: "Heart" }}
        secondary={{ label: "Volunteer", to: "/volunteers", icon: "Users" }}
      />

      <section className="bg-slate-50 py-20">
        <div className="container-shell grid gap-10 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <SectionHeader
              align="left"
              eyebrow="Write to us"
              title="We would love to hear how you want to help."
              description="Use the form for volunteer registration questions, donation partnerships, campaign sponsorships, or field collaboration."
              className="mb-8"
            />
            <form className="grid gap-4 rounded-[1.5rem] bg-white p-4 shadow-xl shadow-slate-900/7 ring-1 ring-slate-100 sm:rounded-[2rem] sm:p-6" onSubmit={(event) => event.preventDefault()}>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="grid gap-2 text-sm font-bold text-slate-700">
                  Full name
                  <input className="form-field" placeholder="Your name" />
                </label>
                <label className="grid gap-2 text-sm font-bold text-slate-700">
                  Email
                  <input className="form-field" type="email" placeholder="you@example.com" />
                </label>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="grid gap-2 text-sm font-bold text-slate-700">
                  Phone
                  <input className="form-field" placeholder="+91" />
                </label>
                <label className="grid gap-2 text-sm font-bold text-slate-700">
                  Interest
                  <select className="form-field">
                    <option>Donation</option>
                    <option>Volunteering</option>
                    <option>Sponsorship</option>
                    <option>Partnership</option>
                  </select>
                </label>
              </div>
              <label className="grid gap-2 text-sm font-bold text-slate-700">
                Message
                <textarea className="form-field min-h-36 resize-none" placeholder="Tell us about your query" />
              </label>
              <ButtonLink type="submit" icon="MessageCircle" className="justify-self-start">
                Send Message
              </ButtonLink>
            </form>
          </div>

          <div className="grid gap-6">
            <div className="rounded-[1.5rem] bg-white p-5 shadow-xl shadow-slate-900/7 ring-1 ring-slate-100 sm:rounded-[2rem] sm:p-6">
              <h3 className="text-xl font-black text-slate-950 sm:text-2xl">Contact details</h3>
              <div className="mt-6 grid gap-4">
                {[
                  ["MapPin", "Address", "Saraswati nagar road number 2 Near Shiv Mandir, Muzaffarpur, Bihar "],
                  ["Mail", "Email", "Kashikeshav01@gmail.com"],
                  ["Phone", "Phone", "+91 9821673232"],
                ].map(([icon, label, value]) => (
                  <div key={label} className="flex gap-3 rounded-[1.15rem] bg-slate-50 p-4 ring-1 ring-slate-100 sm:gap-4 sm:rounded-3xl">
                    <span className="grid h-11 w-11 place-items-center rounded-2xl bg-white text-blue-700 shadow-sm">
                      <SiteIcon name={icon} className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-xs font-black uppercase tracking-[0.13em] text-orange-600 sm:text-sm sm:tracking-[0.15em]">{label}</p>
                      <p className="mt-1 text-sm font-bold text-slate-700 sm:text-base">{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid min-h-64 place-items-center rounded-[1.5rem] bg-gradient-to-br from-blue-700 to-orange-500 p-5 text-center text-white shadow-xl shadow-blue-900/12 sm:min-h-80 sm:rounded-[2rem] sm:p-6">
              <div>
                <SiteIcon name="MapPin" className="mx-auto h-12 w-12 text-orange-100" />
                <h3 className="mt-4 text-xl font-black sm:text-2xl">Google Maps placeholder</h3>
                <p className="mt-3 max-w-sm text-sm leading-7 text-blue-50 sm:text-base">
                  Replace this block with an embedded map iframe when the official office location is finalized.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeader
            align="left"
            eyebrow="FAQ"
            title="Quick answers before you reach out"
            description="Common questions from donors, volunteers, parents, and partner organizations."
            className="mb-0"
          />
          <FAQAccordion />
        </div>
      </section>
    </>
  )
}
