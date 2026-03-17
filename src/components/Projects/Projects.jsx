import SectionTitle from '../SectionTitle/SectionTitle'
import { projects } from '../../data/projects'
import './Projects.css'

function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <SectionTitle title="Selected Work" />

        <div className="projects">
          {projects.map((project) => (
            <article className="projects__card card" key={project.title}>
              <span className="projects__type">{project.type}</span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="projects__tags">
                {project.tech.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>

              <div className="projects__links">
                <a href={project.code}>View Code</a>
                <a href={project.demo}>Live Demo</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects