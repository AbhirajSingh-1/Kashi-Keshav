import { useState } from "react"
import { SiteIcon } from "./IconMap"

/**
 * ─────────────────────────────────────────────────
 *  HOW TO FIND YOUR GOOGLE FORM ENTRY IDs
 * ─────────────────────────────────────────────────
 *  1. Open your Google Form link in Chrome
 *  2. Press Ctrl+U (View Page Source)
 *  3. Press Ctrl+F and search for: entry.
 *  4. You'll see inputs like name="entry.1234567890"
 *  5. Match each field name below and paste the numbers
 * ─────────────────────────────────────────────────
 */
const FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSfGdYH0B5TLZZO9pUnC56xmiEUG63Koxz90W7olZyhjs6WsLQ/formResponse"

const ENTRY = {
  name:     "entry.REPLACE_WITH_NAME_ID",     // e.g. entry.2005620554
  email:    "entry.REPLACE_WITH_EMAIL_ID",    // e.g. entry.1045781291
  phone:    "entry.REPLACE_WITH_PHONE_ID",    // e.g. entry.1166974658
  interest: "entry.REPLACE_WITH_INTEREST_ID", // e.g. entry.839337160
  message:  "entry.REPLACE_WITH_MESSAGE_ID",  // e.g. entry.1886663040
}

const interests = ["Donation", "Volunteering", "Sponsorship", "Partnership", "Other"]

const inputCls =
  "w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-800 placeholder-slate-400 outline-none transition focus:border-blue-400 focus:bg-white focus:ring-2 focus:ring-blue-100"

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", interest: "", message: "" })
  const [status, setStatus] = useState("idle") // idle | sending | sent | error

  const set = (field) => (e) => setForm((prev) => ({ ...prev, [field]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus("sending")
    try {
      const body = new FormData()
      body.append(ENTRY.name,     form.name)
      body.append(ENTRY.email,    form.email)
      body.append(ENTRY.phone,    form.phone)
      body.append(ENTRY.interest, form.interest)
      body.append(ENTRY.message,  form.message)
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
        <h3 className="text-xl font-black text-slate-900">Message received!</h3>
        <p className="max-w-xs text-sm leading-6 text-slate-500">
          Thank you for reaching out. We'll get back to you within 48 hours.
        </p>
        <button
          onClick={() => { setForm({ name:"", email:"", phone:"", interest:"", message:"" }); setStatus("idle") }}
          className="mt-2 rounded-full bg-blue-600 px-6 py-2.5 text-sm font-bold text-white transition hover:bg-blue-700"
        >
          Send another message
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-6">

      {/* ── Section 1: Personal details ── */}
      <div>
        <p className="mb-3 flex items-center gap-2 text-[0.7rem] font-black uppercase tracking-[0.18em] text-orange-500">
          <SiteIcon name="User" className="h-3.5 w-3.5" />
          Personal details
        </p>
        <div className="grid gap-3 sm:grid-cols-2">
          <div>
            <label className="mb-1.5 block text-xs font-bold text-slate-600">
              Full name <span className="text-orange-500">*</span>
            </label>
            <input
              required
              value={form.name}
              onChange={set("name")}
              placeholder="Your name"
              className={inputCls}
            />
          </div>
          <div>
            <label className="mb-1.5 block text-xs font-bold text-slate-600">
              Email <span className="text-orange-500">*</span>
            </label>
            <input
              required
              type="email"
              value={form.email}
              onChange={set("email")}
              placeholder="you@example.com"
              className={inputCls}
            />
          </div>
          <div>
            <label className="mb-1.5 block text-xs font-bold text-slate-600">
              Phone <span className="text-orange-500">*</span>
            </label>
            <input
              required
              value={form.phone}
              onChange={set("phone")}
              placeholder="+91 XXXXX XXXXX"
              className={inputCls}
            />
          </div>
          <div>
            <label className="mb-1.5 block text-xs font-bold text-slate-600">
              I'm interested in
            </label>
            <select
              value={form.interest}
              onChange={set("interest")}
              className={inputCls}
            >
              <option value="">Select one…</option>
              {interests.map((i) => <option key={i}>{i}</option>)}
            </select>
          </div>
        </div>
      </div>

      {/* ── Divider ── */}
      <div className="h-px bg-slate-100" />

      {/* ── Section 2: Message ── */}
      <div>
        <p className="mb-3 flex items-center gap-2 text-[0.7rem] font-black uppercase tracking-[0.18em] text-orange-500">
          <SiteIcon name="MessageCircle" className="h-3.5 w-3.5" />
          Your message
        </p>
        <textarea
          required
          rows={4}
          value={form.message}
          onChange={set("message")}
          placeholder="Tell us how you'd like to help, or anything you'd like us to know…"
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
          className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-7 py-3 text-sm font-bold text-white shadow-lg shadow-blue-600/25 transition hover:bg-blue-700 disabled:opacity-60"
        >
          {status === "sending" ? (
            <>
              <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
              Sending…
            </>
          ) : (
            <>
              Send message
              <SiteIcon name="ArrowRight" className="h-4 w-4" />
            </>
          )}
        </button>
      </div>

      {status === "error" && (
        <p className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-600 ring-1 ring-red-100">
          Something went wrong. Please try again or email us directly.
        </p>
      )}
    </form>
  )
}