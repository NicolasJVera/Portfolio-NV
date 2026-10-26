import Footer from "./components/Footer/Footer"
import Skills from "./components/Habilidades/Skills"
import Navbar from "./components/Navbar/Navbar"
import Project from "./components/Projects/Project"
import Education from "./components/Education/Education"
import Contact from "./components/Contact/Contact"
import Hero from "./components/Hero/Hero"
import WhatsAppButton from "./components/WhatsAppButton/WhatsAppButton"

function App() {
  return (
    <>
      <Navbar />
      <Hero/>
      <Education/>
      <Skills/>
      <Project/>
      <Contact/>
      <Footer/>
      <WhatsAppButton />
    </>
  )
}

export default App
