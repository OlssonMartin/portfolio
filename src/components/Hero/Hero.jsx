import './Hero.css'

function Hero() {
  return (
    <section className="hero section" id="hero">
      <div className="container hero__grid">
        <div className="hero__content">
          <div className="hero__status card">
            <span className="hero__status-dot"></span>
            <span>Available for internship</span>
          </div>

          <h1 className="hero__title">Martin Olsson</h1>
          <p className="hero__role">Frontend Developer</p>

          <p className="hero__text">
            I build clean, structured and modern web applications with focus on
            performance, usability and maintainable code.
          </p>

          <div className="hero__actions">
            <a href="#projects" className="hero__button hero__button--primary">
              View Projects
            </a>
            <a href="#contact" className="hero__button hero__button--secondary">
              Contact
            </a>
          </div>

          <div className="hero__socials">
            <a href="#">GitHub</a>
            <a href="#">LinkedIn</a>
            <a href="mailto:martin.olsson1862@gmail.com">Email</a>
          </div>
        </div>

        <div className="hero__code card">
          <div className="hero__code-top">
            <span></span>
            <span></span>
            <span></span>
            <p>portfolio.js</p>
          </div>

          <div className="hero__code-body">
            <p><span>const</span> developer = {'{'}</p>
            <p>&nbsp;&nbsp;name: <strong>"Martin"</strong>,</p>
            <p>&nbsp;&nbsp;role: <strong>"Frontend Developer"</strong>,</p>
            <p>&nbsp;&nbsp;stack: [<strong>"React"</strong>, <strong>"JavaScript"</strong>, <strong>"CSS"</strong>],</p>
            <p>&nbsp;&nbsp;focus: <strong>"Clean UI & modern web apps"</strong></p>
            <p>{'}'}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero