import { useEffect } from "react"

export default function Seo({ title, description }) {
  useEffect(() => {
    document.title = title ? `${title} | Kashi Keshav` : "Kashi Keshav | Child NGO"

    let meta = document.querySelector('meta[name="description"]')
    if (!meta) {
      meta = document.createElement("meta")
      meta.setAttribute("name", "description")
      document.head.appendChild(meta)
    }
    meta.setAttribute(
      "content",
      description ||
        "Kashi Keshav is a child-focused NGO supporting education, food, healthcare, shelter, and community development across India.",
    )
  }, [description, title])

  return null
}
