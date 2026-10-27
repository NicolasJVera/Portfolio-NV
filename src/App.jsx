import Footer from "./components/Footer/Footer"
import Skills from "./components/Habilidades/Skills"
import Navbar from "./components/Navbar/Navbar"
import Project from "./components/Projects/Project"
import Education from "./components/Education/Education"
import Contact from "./components/Contact/Contact"
import Hero from "./components/Hero/Hero"
import { LanguageProvider } from "./context/LanguageContext"

function App() {
  return (
    <LanguageProvider>
      <Navbar />
      <Hero/>
      <Education/>
      <Skills/>
      <Project/>
      <Contact/>
      <Footer/>
    </LanguageProvider>
  )
}

export default App
