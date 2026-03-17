import './Navbar.css'

function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <a href="#hero" className="navbar__logo">
          MO
        </a>

        <nav className="navbar__nav">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  )
}

export default Navbar