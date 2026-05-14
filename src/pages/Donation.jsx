import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react"
import ButtonLink from "../components/ButtonLink"
import FAQAccordion from "../components/FAQAccordion"
import ImpactStats from "../components/ImpactStats"
import PageHero from "../components/PageHero"
import SectionHeader from "../components/SectionHeader"
import Seo from "../components/Seo"
import { SiteIcon } from "../components/IconMap"
import { images, impactMetrics } from "../data/siteData"

const amounts = [500, 1000, 2500, 5000]

export default function Donation() {
  const [amount, setAmount] = useState(1000)
  const [monthly, setMonthly] = useState(true)
  const [showSuccess, setShowSuccess] = useState(false)

  const submitDonation = (event) => {
    event.preventDefault()
    setShowSuccess(true)
  }

  return (
    <>
      <Seo
        title="Donate"
        description="Donate to Kashi Keshav and support child education, food, healthcare, shelter, and community welfare programs across India."
      />
      <PageHero
        eyebrow="Donate"
        title="Your support can become meals, school kits, health access, and safety."
        description="Choose a contribution that helps Kashi Keshav deliver practical care to underprivileged children and families."
        image={images.sponsor}
        primary={{ label: "Start Donation", to: "/donate#donation-form", icon: "Heart" }}
        secondary={{ label: "See Impact", to: "/programs", icon: "ArrowRight" }}
      />

      <section id="donation-form" className="bg-slate-50 py-20">
        <div className="container-shell grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <SectionHeader
              align="left"
              eyebrow="Secure giving"
              title="Make a donation that directly supports children."
              description="This donation interface is ready for payment gateway integration. Replace the QR placeholder with your live UPI, bank, or payment provider details."
              className="mb-8"
            />
            <form className="rounded-[1.5rem] bg-white p-4 shadow-xl shadow-slate-900/7 ring-1 ring-slate-100 sm:rounded-[2rem] sm:p-6" onSubmit={submitDonation}>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {amounts.map((value) => (
                  <button
                    key={value}
                    type="button"
                    className={`rounded-[1.15rem] p-4 text-left transition sm:rounded-3xl sm:p-5 ${
                      amount === value
                        ? "bg-blue-600 text-white shadow-lg shadow-blue-600/25"
                        : "bg-slate-50 text-slate-950 ring-1 ring-slate-100 hover:bg-orange-50"
                    }`}
                    onClick={() => setAmount(value)}
                  >
                    <SiteIcon name="IndianRupee" className="h-5 w-5" />
                    <p className="mt-3 text-lg font-black sm:text-2xl">INR {value.toLocaleString("en-IN")}</p>
                  </button>
                ))}
              </div>

              <label className="mt-5 grid gap-2 text-sm font-bold text-slate-700">
                Custom amount
                <input
                  className="form-field"
                  type="number"
                  min="100"
                  value={amount}
                  onChange={(event) => setAmount(Number(event.target.value))}
                />
              </label>

              <div className="mt-5 flex items-center justify-between gap-4 rounded-[1.15rem] bg-blue-50 p-4 ring-1 ring-blue-100 sm:rounded-3xl">
                <div>
                  <p className="font-black text-slate-950">Monthly donation</p>
                  <p className="text-sm font-semibold text-slate-500">Support children with steady recurring care.</p>
                </div>
                <button
                  type="button"
                  className={`h-8 w-14 rounded-full p-1 transition ${monthly ? "bg-orange-500" : "bg-slate-300"}`}
                  onClick={() => setMonthly((value) => !value)}
                  aria-pressed={monthly}
                  aria-label="Toggle monthly donation"
                >
                  <span
                    className={`block h-6 w-6 rounded-full bg-white shadow transition ${
                      monthly ? "translate-x-6" : "translate-x-0"
                    }`}
                  />
                </button>
              </div>

              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <label className="grid gap-2 text-sm font-bold text-slate-700">
                  Full name
                  <input className="form-field" placeholder="Your name" required />
                </label>
                <label className="grid gap-2 text-sm font-bold text-slate-700">
                  Email
                  <input className="form-field" type="email" placeholder="you@example.com" required />
                </label>
              </div>
              <label className="mt-4 grid gap-2 text-sm font-bold text-slate-700">
                Message
                <textarea className="form-field min-h-28 resize-none" placeholder="Dedication or note" />
              </label>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-2 text-sm font-bold text-slate-500">
                  <SiteIcon name="LockKeyhole" className="h-4 w-4 text-blue-700" />
                  Secure donation UI
                </div>
                <ButtonLink type="submit" icon="Heart">
                  Donate INR {amount.toLocaleString("en-IN")}
                </ButtonLink>
              </div>
            </form>
          </div>

          <div className="grid gap-6">
            <div className="rounded-[1.5rem] bg-white p-4 shadow-xl shadow-slate-900/7 ring-1 ring-slate-100 sm:rounded-[2rem] sm:p-6">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.14em] text-orange-600 sm:text-sm sm:tracking-[0.18em]">
                    QR placeholder
                  </p>
                  <h3 className="mt-2 text-xl font-black text-slate-950 sm:text-2xl">Scan to support</h3>
                </div>
                <SiteIcon name="CreditCard" className="h-8 w-8 text-blue-700" />
              </div>
              <div className="mt-5 grid aspect-square place-items-center rounded-[1.35rem] bg-slate-50 p-4 ring-1 ring-slate-100 sm:mt-6 sm:rounded-[2rem] sm:p-6">
                <div className="grid h-full w-full place-items-center rounded-[1.15rem] bg-white shadow-inner sm:rounded-3xl">
                  <SiteIcon name="QrCode" className="h-24 w-24 text-slate-900 sm:h-32 sm:w-32" strokeWidth={1.5} />
                </div>
              </div>
              <p className="mt-4 text-center text-sm font-semibold text-slate-500">
                Add live UPI or payment gateway QR details here.
              </p>
            </div>
            <div className="rounded-[1.5rem] bg-blue-700 p-5 text-white shadow-xl shadow-blue-900/15 sm:rounded-[2rem] sm:p-6">
              <SiteIcon name="Shield" className="h-9 w-9 text-orange-200" />
              <h3 className="mt-4 text-xl font-black sm:text-2xl">Your donation creates measurable impact.</h3>
              <p className="mt-3 text-sm leading-7 text-blue-50 sm:text-base sm:leading-8">
                Contributions fund school supplies, meals, hygiene kits, medical support, emergency
                relief, and volunteer-led care programs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-shell">
          <SectionHeader
            eyebrow="Donation impact"
            title="Every rupee has a field purpose"
            description="Kashi Keshav connects donations to clear child welfare outcomes and community support activities."
          />
          <ImpactStats stats={impactMetrics} />
        </div>
      </section>

      <section className="bg-blue-50/70 py-20">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeader
            align="left"
            eyebrow="Donation FAQ"
            title="Common questions from supporters"
            description="A few quick answers before you give, sponsor, or recommend Kashi Keshav to someone else."
            className="mb-0"
          />
          <FAQAccordion />
        </div>
      </section>

      <AnimatePresence>
        {showSuccess ? (
          <motion.div
            className="fixed inset-0 z-[90] grid place-items-center bg-slate-950/75 p-4 backdrop-blur"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="max-w-md rounded-[1.5rem] bg-white p-6 text-center shadow-2xl sm:rounded-[2rem] sm:p-8"
              initial={{ opacity: 0, y: 24, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.96 }}
            >
              <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-green-50 text-green-600">
                <SiteIcon name="CheckCircle2" className="h-8 w-8" />
              </span>
              <h3 className="mt-5 text-2xl font-black text-slate-950 sm:text-3xl">Thank you for caring.</h3>
              <p className="mt-3 leading-7 text-slate-600">
                This demo popup confirms the donation flow. Connect your payment gateway to complete
                live transactions.
              </p>
              <ButtonLink icon="Heart" className="mt-6" onClick={() => setShowSuccess(false)}>
                Continue
              </ButtonLink>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  )
}
