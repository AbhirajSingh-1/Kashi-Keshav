import { useEffect, useState } from "react"
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom"
import Footer from "./components/Footer"
import Header from "./components/Header"
import LoadingScreen from "./components/LoadingScreen"
import ScrollToTop from "./components/ScrollToTop"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Donation from "./pages/Donation"
import Events from "./pages/Events"
import Gallery from "./pages/Gallery"
import Home from "./pages/Home"
import Programs from "./pages/Programs"
import Volunteers from "./pages/Volunteers"

function RouteScroll() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      window.setTimeout(() => {
        document.querySelector(hash)?.scrollIntoView({ behavior: "smooth", block: "start" })
      }, 80)
      return
    }
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [hash, pathname])

  return null
}

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 650)
    return () => window.clearTimeout(timer)
  }, [])

  return (
    <BrowserRouter>
      {loading ? <LoadingScreen /> : null}
      <RouteScroll />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/volunteers" element={<Volunteers />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/donate" element={<Donation />} />
          <Route path="/events" element={<Events />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
      <ScrollToTop />
    </BrowserRouter>
  )
}

export default App
