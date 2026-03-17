import SectionTitle from '../SectionTitle/SectionTitle'
import './About.css'

function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <SectionTitle title="About" />

        <div className="about">
          <div className="about__text">
            <p>
              I am a frontend development student with a strong interest in
              building clean and user-friendly web applications.
            </p>
            <p>
              I enjoy solving problems, learning modern technologies and working
              together with others to create well-structured digital products.
            </p>
          </div>

          <div className="about__focus card">
            <h3>Core Focus</h3>
            <ul>
              <li>Responsive interfaces</li>
              <li>Component-based development</li>
              <li>Clean and maintainable code</li>
              <li>Usability and performance</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About