import { Link } from 'react-router-dom'
import './pages.css'

const pillars = [
  {
    title: 'Skill & Game Analysis',
    body: 'Review and feedback so players understand their performance and how to improve.',
  },
  {
    title: 'Mental Performance Coaching',
    body: 'Confidence, focus, and resilience training that prepares players for high-pressure moments.',
  },
  {
    title: 'Team Building & Leadership',
    body: 'We teach communication, respect, and leadership to create stronger teammates and individuals.',
  },
  {
    title: 'Player Development Pathway',
    body: 'Clear goals and a growth plan to track progress season to season.',
  },
  {
    title: 'Community & Culture',
    body: 'A supportive environment built on integrity, empathy, and a true love for the game.',
  },
  {
    title: 'Trusted by Central Jersey Families',
    body: 'Dozens of families already count on Gioca to deliver real development, both on and off the field.',
  },
]

const academyPhotos = [
  {
    src: '/images/players/a1.png',
    alt: 'Gioca player dribbling the ball in training',
  },
  {
    src: '/images/players/b21.png',
    alt: 'Gioca player running with the ball on the pitch',
  },
  {
    src: '/images/players/a4.jpg',
    alt: 'Gioca players working through an agility drill',
  },
  {
    src: '/images/players/a3.png',
    alt: 'Training session with the ball on the pitch',
  },
]

const parentQuotes = [
  {
    quote:
      'Coach Zane is a passionate coach, committed to challenging his players to develop both individually and collectively as a team. He has a long-term vision for their development, focused on playing the game correctly, honing their fundamental skillsets, and fostering accountability. While he demands excellence, he also shows unwavering patience with them, allowing players to learn from their mistakes.',
    author: 'Harry H.',
    role: 'Parent',
  },
  {
    quote:
      "Coach Zane is a true exemplar of commitment, expertise, and leadership in soccer coaching. From the moment my 8-year-old son first laced up his cleats and stepped onto the soccer field, Coach Zane was there to guide him every step of the way. As a newcomer to the sport, my son was eager to learn but understandably apprehensive. Under Coach Zane's coaching, tentative steps soon transformed into confident strides.",
    author: 'Nagesh V.',
    role: 'Parent',
  },
  {
    quote:
      'Coach Zane is a great coach to work with for players that want to improve. He has helped me mentally and physically and has made me a better player on the field. He has helped me become more confident on and off the ball, his drills are easy to understand, and he pushes you to become better.',
    author: 'Ruben D.',
    role: 'Player',
  },
]

const playerQuotes = [
  {
    quote:
      'Success is no accident. It is hard work, perseverance, learning, studying, sacrifice and most of all, love of what you are doing.',
    author: 'Pelé',
  },
  {
    quote: 'Talent without working hard is nothing.',
    author: 'Cristiano Ronaldo',
  },
  {
    quote: 'You have to fight to reach your dream. You have to sacrifice and work hard for it.',
    author: 'Lionel Messi',
  },
  {
    quote: 'The more difficult the victory, the greater the happiness in winning.',
    author: 'Pelé',
  },
  {
    quote:
      'Playing football is very simple, but playing simple football is the hardest thing there is.',
    author: 'Johan Cruyff',
  },
  {
    quote: 'I learned all about life with a ball at my feet.',
    author: 'Ronaldinho',
  },
  {
    quote: 'The person that said winning isn’t everything never won anything.',
    author: 'Mia Hamm',
  },
  {
    quote: 'I don’t have time for regrets. I’m going after my dreams.',
    author: 'Alex Morgan',
  },
]

export function Home() {
  return (
    <>
      <section className="hero-band">
        <img
          className="hero-band__image"
          src="/images/hero-pitch.jpg"
          alt=""
        />
        <div className="hero-band__overlay" />
        <div className="hero-band__stripes" aria-hidden="true" />
        <div className="hero-band__content container">
          <p className="hero-band__brand">Gioca Soccer Academy</p>
          <h1>
            Elite training.
            <br />
            <span className="text-red">Whole-person</span> development
          </h1>
          <p className="hero-band__lede">
            Using soccer as the vehicle to become the best versions of ourselves.
          </p>
          <div className="hero-band__actions">
            <Link to="/contact" className="btn btn--primary btn--glow">
              Start Today
            </Link>
            <Link to="/programs" className="btn btn--ghost hero-band__ghost">
              View Programs
            </Link>
          </div>
        </div>
      </section>

      <section className="section section--quotes">
        <div className="container">
          <header className="section__header section__header--center">
            <p className="eyebrow">Fuel for champions</p>
            <h2>Words from the greats</h2>
            <p className="section__intro">
              The legends trained with obsession. At Gioca, that mindset starts
              here — join the academy built for players who want more.
            </p>
          </header>

          <ul className="quote-grid">
            {playerQuotes.map((item) => (
              <li key={`${item.author}-${item.quote.slice(0, 24)}`} className="quote-card">
                <p className="quote-card__mark" aria-hidden="true">
                  “
                </p>
                <blockquote>“{item.quote}”</blockquote>
                <cite>— {item.author}</cite>
              </li>
            ))}
          </ul>

          <div className="quotes-cta">
            <p>Ready to write your own story?</p>
            <Link to="/contact" className="btn btn--primary">
              Join Gioca
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <header className="section__header">
            <p className="eyebrow">Our Approach</p>
            <h2>Not just a soccer academy</h2>
          </header>
          <ul className="pillar-grid">
            {pillars.map((pillar) => (
              <li key={pillar.title}>
                <h3>{pillar.title}</h3>
                <p>{pillar.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section--gallery">
        <div className="container">
          <header className="section__header section__header--center">
            <p className="eyebrow">On the pitch</p>
            <h2>Real players. Real development.</h2>
            <p className="section__intro">
              From first touches to match day — these are Gioca athletes training,
              competing, and growing together in Central Jersey.
            </p>
          </header>

          <ul className="photo-grid">
            {academyPhotos.map((photo) => (
              <li key={photo.src} className="photo-grid__item">
                <img src={photo.src} alt={photo.alt} loading="lazy" />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section--founders">
        <div className="container">
          <header className="section__header section__header--center">
            <p className="eyebrow">Leadership</p>
            <h2>Meet the founders</h2>
            <p className="section__intro">
              At Gioca, we believe soccer is more than a sport — it&apos;s a tool
              to develop confident, resilient, and well-rounded individuals. Our
              founders created Gioca out of necessity. They saw how many
              academies focused on numbers over quality, leaving players without
              the individual attention and holistic training they deserved.
            </p>
          </header>

          <ul className="founder-grid">
            <li className="founder-card">
              <img
                className="founder-card__photo"
                src="/images/zane-taha.png"
                alt="Zane Taha"
                width={280}
                height={320}
              />
              <div>
                <h3>Zane Taha</h3>
                <p className="founder-card__role">Founder &amp; Coach</p>
                <p>
                  Leads with a long-term vision for development — technical
                  excellence, mental strength, and accountability, with patience
                  that lets players grow from every mistake.
                </p>
              </div>
            </li>
            <li className="founder-card">
              <img
                className="founder-card__photo"
                src="/images/julian-taha.png"
                alt="Julian Taha"
                width={280}
                height={320}
              />
              <div>
                <h3>Julian Taha</h3>
                <p className="founder-card__role">Founder &amp; Coach</p>
                <p>
                  Co-founded Gioca to put quality coaching and meaningful
                  connections first — small groups where every player is
                  challenged, supported, and seen.
                </p>
              </div>
            </li>
          </ul>

          <div className="quotes-cta">
            <Link to="/about" className="btn btn--primary">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      <section className="section section--red">
        <div className="container split">
          <div>
            <p className="eyebrow eyebrow--light">About Us</p>
            <h2>Empowering athletes to reach their full potential</h2>
            <p className="section__copy">
              At Gioca Soccer Academy, we believe development goes far beyond the
              field. Small groups, individualized attention, and a holistic
              approach that builds both skill and character.
            </p>
            <Link to="/about" className="btn btn--light">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      <section className="section section--parents">
        <div className="container">
          <header className="section__header section__header--center">
            <p className="eyebrow">Trusted by families</p>
            <h2>What parents are saying…</h2>
            <p className="section__intro">
              Real words from Gioca families and players about Coach Zane and the
              academy experience.
            </p>
          </header>

          <ul className="parent-grid">
            {parentQuotes.map((item) => (
              <li key={item.author} className="parent-card">
                <p className="parent-card__mark" aria-hidden="true">
                  “
                </p>
                <blockquote>{item.quote}</blockquote>
                <div className="parent-card__meta">
                  <cite>{item.author}</cite>
                  <span>{item.role}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section--cta">
        <div className="container cta-strip">
          <div>
            <h2>Ready to train with Gioca?</h2>
            <p>Ask about programs, tryouts, or a free training session.</p>
          </div>
          <Link to="/contact" className="btn btn--primary btn--glow">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  )
}
