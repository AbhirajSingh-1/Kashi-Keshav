import { useState } from "react"
import { SiteIcon } from "./IconMap"

/**
 * ─────────────────────────────────────────────────
 *  GOOGLE FORM CONFIGURATION
 * ─────────────────────────────────────────────────
 *  Uses the same Google Form as ContactForm.
 *  Form: "Contact information"
 *  Fields: Name, Email, Phone, Interest, Message
 *
 *  Mapping strategy:
 *   - Name   → entry.2005620554
 *   - Email  → entry.1045781291
 *   - Phone  → entry.1166974658
 *   - Interest → entry.1621959302 (set to "Volunteering")
 *   - Message → entry.839337160  (combines City, Skills, and Message)
 * ─────────────────────────────────────────────────
 */
const FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSfGdYH0B5TLZZO9pUnC56xmiEUG63Koxz90W7olZyhjs6WsLQ/formResponse"

const ENTRY = {
  name:     "entry.2005620554",
  email:    "entry.1045781291",
  phone:    "entry.1166974658",
  interest: "entry.1621959302",
  message:  "entry.839337160",
}

const skillOptions = [
  "Teaching / Tutoring",
  "Fundraising",
  "Social Media & Content",
  "Field Coordination",
  "Event Management",
  "Healthcare Support",
  "Photography / Video",
  "Other",
]

const inputCls =
  "w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-800 placeholder-slate-400 outline-none transition focus:border-orange-400 focus:bg-white focus:ring-2 focus:ring-orange-100"

export default function VolunteerForm() {
  const [form, setForm]     = useState({ name:"", email:"", phone:"", city:"", message:"" })
  const [selected, setSelected] = useState([])
  const [status, setStatus] = useState("idle")

  const set = (field) => (e) => setForm((p) => ({ ...p, [field]: e.target.value }))

  const toggleSkill = (skill) => {
    setSelected((prev) =>
      prev.includes(skill) ? prev.filter((s) => s !== skill) : [...prev, skill]
    )
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus("sending")
    try {
      // Build a combined message that includes City, Skills, and any extra notes
      const parts = []
      if (form.city)       parts.push(`City: ${form.city}`)
      if (selected.length) parts.push(`Skills: ${selected.join(", ")}`)
      if (form.message)    parts.push(`Note: ${form.message}`)
      const combinedMessage = parts.join(" | ") || "(Volunteer registration — no additional details)"

      const body = new FormData()
      body.append(ENTRY.name,     form.name)
      body.append(ENTRY.email,    form.email)
      body.append(ENTRY.phone,    form.phone)
      body.append(ENTRY.interest, "Volunteering")           // Auto-set interest
      body.append(ENTRY.message,  combinedMessage)          // Combined field
      await fetch(FORM_URL, { method: "POST", mode: "no-cors", body })
      setStatus("sent")
    } catch {
      setStatus("error")
    }
  }

  if (status === "sent") {
    return (
      <div className="flex flex-col items-center justify-center gap-4 py-16 text-center">
        <span className="grid h-16 w-16 place-items-center rounded-full bg-green-100 text-green-600">
          <SiteIcon name="CheckCircle" className="h-8 w-8" />
        </span>
        <h3 className="text-xl font-black text-slate-900">Registration submitted!</h3>
        <p className="max-w-xs text-sm leading-6 text-slate-500">
          Welcome to the team! We'll reach out to you within 48 hours with next steps.
        </p>
        <button
          onClick={() => { setForm({ name:"", email:"", phone:"", city:"", message:"" }); setSelected([]); setStatus("idle") }}
          className="mt-2 rounded-full bg-orange-500 px-6 py-2.5 text-sm font-bold text-white transition hover:bg-orange-600"
        >
          Submit another
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-6">

      {/* ── Section 1: Personal ── */}
      <div>
        <p className="mb-3 flex items-center gap-2 text-[0.7rem] font-black uppercase tracking-[0.18em] text-orange-500">
          <SiteIcon name="User" className="h-3.5 w-3.5" />
          About you
        </p>
        <div className="grid gap-3 sm:grid-cols-2">
          <div>
            <label className="mb-1.5 block text-xs font-bold text-slate-600">
              Full name <span className="text-orange-500">*</span>
            </label>
            <input required value={form.name} onChange={set("name")} placeholder="Your name" className={inputCls} />
          </div>
          <div>
            <label className="mb-1.5 block text-xs font-bold text-slate-600">
              Email <span className="text-orange-500">*</span>
            </label>
            <input required type="email" value={form.email} onChange={set("email")} placeholder="you@example.com" className={inputCls} />
          </div>
          <div>
            <label className="mb-1.5 block text-xs font-bold text-slate-600">
              Phone <span className="text-orange-500">*</span>
            </label>
            <input required value={form.phone} onChange={set("phone")} placeholder="+91 XXXXX XXXXX" className={inputCls} />
          </div>
          <div>
            <label className="mb-1.5 block text-xs font-bold text-slate-600">City &amp; State</label>
            <input value={form.city} onChange={set("city")} placeholder="e.g. Patna, Bihar" className={inputCls} />
          </div>
        </div>
      </div>

      {/* ── Divider ── */}
      <div className="h-px bg-slate-100" />

      {/* ── Section 2: Skills ── */}
      <div>
        <p className="mb-3 flex items-center gap-2 text-[0.7rem] font-black uppercase tracking-[0.18em] text-orange-500">
          <SiteIcon name="Sparkles" className="h-3.5 w-3.5" />
          How can you help?
        </p>
        <div className="flex flex-wrap gap-2">
          {skillOptions.map((skill) => (
            <button
              key={skill}
              type="button"
              onClick={() => toggleSkill(skill)}
              className={`rounded-full border px-3.5 py-1.5 text-xs font-bold transition ${
                selected.includes(skill)
                  ? "border-orange-400 bg-orange-500 text-white"
                  : "border-slate-200 bg-slate-50 text-slate-600 hover:border-orange-300 hover:text-orange-600"
              }`}
            >
              {skill}
            </button>
          ))}
        </div>
      </div>

      {/* ── Divider ── */}
      <div className="h-px bg-slate-100" />

      {/* ── Section 3: Message ── */}
      <div>
        <p className="mb-3 flex items-center gap-2 text-[0.7rem] font-black uppercase tracking-[0.18em] text-orange-500">
          <SiteIcon name="MessageCircle" className="h-3.5 w-3.5" />
          Anything else to share?
        </p>
        <textarea
          rows={3}
          value={form.message}
          onChange={set("message")}
          placeholder="Availability, past experience, or any questions you have…"
          className={`${inputCls} resize-none`}
        />
      </div>

      {/* ── Submit ── */}
      <div className="flex items-center justify-between gap-4">
        <p className="text-xs text-slate-400">
          <span className="text-orange-500">*</span> Required fields
        </p>
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-7 py-3 text-sm font-bold text-white shadow-lg shadow-orange-500/25 transition hover:bg-orange-600 disabled:opacity-60"
        >
          {status === "sending" ? (
            <>
              <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
              Submitting…
            </>
          ) : (
            <>
              Register as volunteer
              <SiteIcon name="ArrowRight" className="h-4 w-4" />
            </>
          )}
        </button>
      </div>

      {status === "error" && (
        <p className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-600 ring-1 ring-red-100">
          Something went wrong. Please try again or contact us directly.
        </p>
      )}
    </form>
  )
}