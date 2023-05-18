import { useEffect, useState } from "react"
import Home from "./pages/Home/Home"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Stories from "./pages/Stories/Stories"
import Features from "./pages/Features/Features"
import Pricing from "./pages/Pricing/Pricing"
import { Routes, Route } from "react-router-dom"
const breakpointColumnsObj = {
  default: 4,
  laptop: 3,
  tablet: 2,
  mobile: 1
}

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener("resize", handleWindowResize)

    return () => {
      window.removeEventListener("resize", handleWindowResize)
    }
  })
  console.log(windowWidth)
  return (
    <>
      <Navbar windowWidth={windowWidth} />
      <Routes>
        <Route path="/" element={<Home windowWidth={windowWidth} breakpointColumnsObj={breakpointColumnsObj} />} />
        <Route path="/stories" element={<Stories />} />
        <Route path="/features" element={<Features />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
