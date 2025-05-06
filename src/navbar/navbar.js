import { useState } from 'react';
import './navbar.css'

function Navbar() {
  const [displayMenu, toggleMenuDisplay] = useState(false);
  function toggleMenu(){
    toggleMenuDisplay(!displayMenu)
  }
  return (
        <header>
            <div className="logo">
              Anirudh Betrabet
            </div>
            <nav>
              <a href="#about">About</a>
              <a href="#skills">Skills</a>
              <a href="#projects">Projects</a>
              <a href="#contact">Contact</a>
            </nav>
            <div className="hamburger" onClick={toggleMenu}>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div className={`mobile-nav ${displayMenu ? 'active' : ''}`} id="mobileMenu">
              <a href="#about">About</a>
              <a href="#skills">Skills</a>
              <a href="#projects">Projects</a>
              <a href="#contact">Contact</a>
            </div>
        </header>
  )
}

export default Navbar