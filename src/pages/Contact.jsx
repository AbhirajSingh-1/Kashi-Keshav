import FAQAccordion from "../components/FAQAccordion"
import PageHero from "../components/PageHero"
import Seo from "../components/Seo"
import { SiteIcon } from "../components/IconMap"
import ContactForm from "../components/ContactForm"
import { images } from "../data/siteData"

const contactDetails = [
  { icon: "MapPin", label: "Address", value: "Saraswati nagar road number 2, Near Shiv Mandir, Muzaffarpur, Bihar" },
  { icon: "Mail",   label: "Email",   value: "Kashikeshav01@gmail.com" },
  { icon: "Phone",  label: "Phone",   value: "+91 9821673232" },
]

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

      {/* ── Main contact section ── */}
      <section className="bg-slate-50 py-20">
        <div className="container-shell">
          <div className="overflow-hidden rounded-[2rem] bg-white shadow-2xl shadow-slate-900/8 ring-1 ring-slate-100 lg:grid lg:grid-cols-[360px_1fr] xl:grid-cols-[400px_1fr]">

            {/* Left info panel */}
            <aside className="flex flex-col justify-between gap-8 bg-gradient-to-br from-blue-700 via-blue-600 to-blue-800 p-8 text-white sm:p-10">
              <div>
                <div className="flex items-center gap-3">
                  <span className="grid h-9 w-9 place-items-center rounded-xl bg-white/15 ring-1 ring-white/30">
                    <SiteIcon name="HandHeart" className="h-4 w-4 text-white" />
                  </span>
                  <span className="text-xs font-black uppercase tracking-[0.18em] text-white/70">
                    Kashi Keshav
                  </span>
                </div>

                <h2 className="mt-7 text-2xl font-black leading-snug sm:text-3xl">
                  Every message plants a seed of hope.
                </h2>
                <p className="mt-3 text-sm leading-7 text-blue-100">
                  Whether you're a donor, volunteer, or partner — we read every message and respond within 48 hours.
                </p>

                <div className="mt-8 grid gap-5">
                  {contactDetails.map(({ icon, label, value }) => (
                    <div key={label} className="flex items-start gap-3">
                      <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-white/15 ring-1 ring-white/20">
                        <SiteIcon name={icon} className="h-4 w-4 text-white" />
                      </span>
                      <div>
                        <p className="text-[0.65rem] font-black uppercase tracking-[0.18em] text-orange-300">{label}</p>
                        <p className="mt-0.5 text-sm font-semibold leading-6 text-white/90">{value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl bg-white/10 p-5 ring-1 ring-white/15">
                <p className="text-xs font-black uppercase tracking-[0.15em] text-orange-300">Response time</p>
                <p className="mt-1 text-base font-bold text-white">Within 48 hours</p>
                <p className="mt-1.5 text-xs leading-6 text-blue-100">
                  We're a volunteer-run team — your message reaches us directly and personally.
                </p>
              </div>
            </aside>

            {/* Right: custom form */}
            <div className="p-7 sm:p-10">
              <div className="mb-7">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-orange-500">Write to us</p>
                <h3 className="mt-1 text-xl font-black text-slate-900 sm:text-2xl">
                  We'd love to hear how you want to help.
                </h3>
              </div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.16em] text-orange-500">FAQ</p>
            <h2 className="mt-2 text-2xl font-black text-slate-900 sm:text-3xl">
              Quick answers before you reach out
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-500">
              Common questions from donors, volunteers, parents, and partner organizations.
            </p>
          </div>
          <FAQAccordion />
        </div>
      </section>
    </>
  )
}