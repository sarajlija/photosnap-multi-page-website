import Home from "./pages/Home/Home"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Stories from "./pages/Stories/Stories"
import Features from "./pages/Features/Features"
import Pricing from "./pages/Pricing/Pricing"
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stories" element={<Stories />} />
        <Route path="/features" element={<Features />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
