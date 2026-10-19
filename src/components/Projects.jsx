// which filter is active? a string.
import { useState } from "react"

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A modern e-commerce platform built with React and Node.js, featuring shopping cart, payment integration, and admin dashboard.',
    category: 'fullstack',
  },
  {
    id: 2,
    title: 'Weather Dashboard',
    description: 'Clean and intuitive weather dashboard with location search, 7-day forecast, and beautiful animations.',
    category: 'frontend',
  },
  {
    id: 3,
    title: 'Task Management App',
    description: 'Productivity app with drag-and-drop functionality, project collaboration, and deadline tracking.',
    category: 'webapp',
  },
  {
    id: 4,
    title: 'Creative Portfolio',
    description: 'Responsive portfolio website for a graphic designer with interactive galleries and smooth animations.',
    category: 'design',
  },
]

function Projects() {
  const [activeFilter, setActiveFilter] = useState('all')

  const filteredProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter(project => project.category === activeFilter)

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2>Featured Projects</h2>

        <div className="filter-buttons">
          <button
            className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
            onClick={() => setActiveFilter('all')}
          >
            All Projects
          </button>

          <button
            className={`filter-btn ${activeFilter === 'frontend' ? 'active' : ''}`}
            onClick={() => setActiveFilter('frontend')}
          >
            Frontend
          </button>

          <button
            className={`filter-btn ${activeFilter === 'fullstack' ? 'active' : ''}`}
            onClick={() => setActiveFilter('fullstack')}
          >
            Full-Stack
          </button>

          <button
            className={`filter-btn ${activeFilter === 'design' ? 'active' : ''}`}
            onClick={() => setActiveFilter('design')}
          >
            Design
          </button>

          <button
            className={`filter-btn ${activeFilter === 'webapp' ? 'active' : ''}`}
            onClick={() => setActiveFilter('webapp')}
          >
            Web App
          </button>
        </div>

        <div className="projects-grid">
          {filteredProjects.map(project => (
            <div className="project-card" key={project.id}>
              <div className="project-content">
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                  <span className="project-category">
                    {project.category}
                  </span>
                </div>

                <p className="project-description">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects