import Footer from "./Footer/Footer"
import Skills from "./Habilidades/Skills"
import Navbar from "./Navbar/Navbar"
import Project from "./Projects/Project"
import About from "./About/About"
import Contact from "./Contact/Contact"
import Hero from "./Hero/Hero"

function Home() {

  return (
    <>
      <Navbar />
      <Hero/>
      <About/>
      <Project/>
      <Skills/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default Home
