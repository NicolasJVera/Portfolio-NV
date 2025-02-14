import ProjectList from "./ProjectList";

export default function Project() {
  return (
    <>
    <section id="projects" className="min-h-screen bg-gray-900 text-white flex flex-col justify-center items-center space-y-8 px-4">
    <h2 className="text-4xl text-center text-white">Proyectos</h2>
    <ProjectList />
  </section>
    </>
  )
}
