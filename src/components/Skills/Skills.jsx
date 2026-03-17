import SectionTitle from '../SectionTitle/SectionTitle'
import { skillGroups } from '../../data/skills'
import './Skills.css'

function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <SectionTitle title="Skills & Expertise" />

        <div className="skills">
          {skillGroups.map((group) => (
            <div className="skills__group" key={group.title}>
              <h3>{group.title}</h3>

              <div className="skills__items">
                {group.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills