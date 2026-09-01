import { useState } from 'react'

const services = [
  ['Speaker Repair', 'Professional diagnosis and repair for Bose speakers and sound systems.'],
  ['Headphone Repair', 'Troubleshooting, battery, charging and audio-related repairs.'],
  ['Home Theater Repair', 'Service for home theater and multi-speaker audio systems.'],
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="site">
      <header className="navbar">
        <a className="logo" href="#home" onClick={() => setMenuOpen(false)}>
          <span>◉</span> BOSE AUDIO
          <small>INDEPENDENT REPAIR SPECIALIST</small>
        </a>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">☰</button>
        <nav className={menuOpen ? 'nav open' : 'nav'}>
          {['Home', 'Services', 'Why Choose Us', 'Process', 'Work', 'Reviews', 'FAQs', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase().replaceAll(' ', '-')}`} onClick={() => setMenuOpen(false)}>{item}</a>
          ))}
          <a className="cta" href="#book-now" onClick={() => setMenuOpen(false)}>Book Now</a>
        </nav>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="hero-glow glow-one" />
          <div className="hero-glow glow-two" />
          <div className="hero-content">
            <p className="eyebrow">PRECISION AUDIO SERVICE</p>
            <h1>Bring Your Sound<br /><span>Back to Life.</span></h1>
            <p className="hero-text">Expert independent repair for Bose audio equipment. Careful diagnosis, quality workmanship and transparent service.</p>
            <div className="hero-actions">
              <a className="button primary" href="#book-now">Book a Repair</a>
              <a className="button secondary" href="#services">Explore Services</a>
            </div>
          </div>
        </section>

        <section id="services" className="section">
          <p className="eyebrow">WHAT WE REPAIR</p>
          <h2>Specialized Audio Services</h2>
          <div className="cards">
            {services.map(([title, text]) => <article className="card" key={title}><div className="icon">♪</div><h3>{title}</h3><p>{text}</p></article>)}
          </div>
        </section>

        <section id="why-choose-us" className="section dark-section">
          <p className="eyebrow">WHY CHOOSE US</p>
          <h2>Repair With Care.</h2>
          <p className="wide-text">We focus on accurate diagnosis rather than unnecessary replacement. Every device is inspected, tested and handled with care.</p>
          <div className="stats"><div><strong>01</strong><span>Expert Diagnosis</span></div><div><strong>02</strong><span>Quality Workmanship</span></div><div><strong>03</strong><span>Transparent Service</span></div></div>
        </section>

        <section id="book-now" className="booking section">
          <p className="eyebrow">GET STARTED</p>
          <h2>Book Your Repair</h2>
          <p>Tell us about your audio device and the problem you are experiencing.</p>
          <a className="button primary" href="mailto:service@example.com">Request Service</a>
        </section>
      </main>

      <footer><strong>BOSE AUDIO</strong><span>Independent Repair Specialist</span><small>© 2026 All rights reserved.</small></footer>
    </div>
  )
}

export default App
