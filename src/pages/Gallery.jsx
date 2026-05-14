import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react"
import PageHero from "../components/PageHero"
import SectionHeader from "../components/SectionHeader"
import Seo from "../components/Seo"
import { SiteIcon } from "../components/IconMap"
import { galleryImages, images } from "../data/siteData"

export default function Gallery() {
  const [selected, setSelected] = useState(null)

  return (
    <>
      <Seo
        title="Gallery"
        description="View Kashi Keshav photo stories from learning programs, food distribution, healthcare camps, volunteer events, and community outreach."
      />
      <PageHero
        eyebrow="Gallery"
        title="Pictures from classrooms, care drives, and community days."
        description="A visual record of children, families, volunteers, and supporters coming together for practical hope."
        image={images.event}
        primary={{ label: "Support This Work", to: "/donate", icon: "Heart" }}
        secondary={{ label: "Join Volunteers", to: "/volunteers", icon: "Users" }}
      />

      <section className="bg-slate-50 py-20">
        <div className="container-shell">
          <SectionHeader
            eyebrow="Impact in frames"
            title="Field moments that carry the mission forward"
            description="Open any photo for a closer look at the people and programs behind Kashi Keshav's work."
          />
          <div className="masonry-gallery">
            {galleryImages.map((item, index) => (
              <motion.button
                key={item.title}
                type="button"
                className="group mb-4 block w-full overflow-hidden rounded-[1.5rem] bg-white text-left shadow-lg shadow-slate-900/6 ring-1 ring-slate-100 sm:mb-5 sm:rounded-3xl"
                onClick={() => setSelected(item)}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.04 }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className={`${index % 3 === 0 ? "h-72 sm:h-96" : "h-64 sm:h-72"} w-full object-cover transition duration-700 group-hover:scale-105`}
                />
                <div className="flex items-center justify-between p-4 sm:p-5">
                  <p className="font-black text-slate-950">{item.title}</p>
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-orange-50 text-orange-500">
                    <SiteIcon name="ArrowRight" className="h-4 w-4" />
                  </span>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selected ? (
          <motion.div
            className="fixed inset-0 z-[80] grid place-items-center bg-slate-950/84 p-4 backdrop-blur"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="relative w-full max-w-5xl overflow-hidden rounded-[1.5rem] bg-white shadow-2xl sm:rounded-[2rem]"
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                className="absolute right-4 top-4 z-10 grid h-11 w-11 place-items-center rounded-full bg-white text-slate-950 shadow-lg"
                onClick={() => setSelected(null)}
                aria-label="Close image preview"
              >
                <SiteIcon name="X" className="h-5 w-5" />
              </button>
              <img src={selected.image} alt={selected.title} className="max-h-[78vh] w-full object-cover" />
              <div className="p-5 sm:p-6">
                <h3 className="text-xl font-black text-slate-950 sm:text-2xl">{selected.title}</h3>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  )
}
