import { Link } from 'react-router-dom'
import './pages.css'

const storyBlocks = [
  {
    photo: {
      src: '/images/players/a1.png',
      alt: 'Gioca player dribbling the ball in training',
    },
    title: 'Why We Started Gioca',
    subtitle: 'More Than Just an Academy',
    body: 'Gioca was created to give players the attention and care they deserve. Too many programs focus on getting bigger, not better. Our goal has always been to provide personalized coaching in a supportive environment where every player can grow both on and off the field.',
  },
  {
    photo: {
      src: '/images/players/b21.png',
      alt: 'Gioca player running with the ball on the pitch',
    },
    title: 'Our Philosophy',
    subtitle: 'Soccer as a Vehicle for Life',
    body: 'We believe the lessons learned on the field go far beyond the game. Through discipline, teamwork, and mental strength, our players develop skills that help them succeed in soccer and in life. Gioca is about building confident, well-rounded individuals, not just great athletes.',
  },
  {
    photo: {
      src: '/images/players/a4.jpg',
      alt: 'Gioca players working through an agility drill',
    },
    title: 'Our Commitment',
    subtitle: 'Quality Over Quantity',
    body: 'We value quality coaching and meaningful connections over numbers. By keeping our groups small and focused, we create an environment where every player feels supported and challenged. This approach ensures consistent progress and a true love for the game.',
  },
]

const founders = [
  {
    name: 'Zane Taha',
    role: 'Founder & Coach',
    photo: '/images/zane-taha.png',
    bio: 'Zane leads Gioca with a long-term vision for player development — technical excellence, mental strength, and accountability. Parents and players know him for demanding excellence while giving athletes the patience to learn from every mistake.',
  },
  {
    name: 'Julian Taha',
    role: 'Founder & Coach',
    photo: '/images/julian-taha.png',
    bio: 'Julian co-founded Gioca to bring quality coaching and meaningful connections back to youth soccer. Together with Zane, he builds small-group environments where every player is challenged, supported, and seen.',
  },
]

export function About() {
  return (
    <section className="page">
      <div className="container page__inner page__inner--wide">
        <header className="page__header">
          <p className="eyebrow">About Us</p>
          <h1>Empowering athletes to reach their full potential</h1>
          <p>
            Gioca is a New Jersey soccer academy focused on world-class training
            and whole-person development. Small groups, mental performance, and
            personalized coaching in Central NJ.
          </p>
        </header>

        <section className="about-story" aria-label="Our story and values">
          <header className="about-story__intro">
            <p className="eyebrow">Our Story & Values</p>
            <h2>The story behind Gioca and why we do things differently</h2>
          </header>

          {storyBlocks.map((block, index) => (
            <article
              key={block.title}
              className={`about-story__row${index % 2 === 1 ? ' about-story__row--reverse' : ''}`}
            >
              <div className="about-story__photo">
                <img
                  src={block.photo.src}
                  alt={block.photo.alt}
                  loading="lazy"
                />
              </div>
              <div className="about-story__copy">
                <p className="eyebrow">{block.title}</p>
                <h3>{block.subtitle}</h3>
                <p>{block.body}</p>
              </div>
            </article>
          ))}
        </section>

        <div className="about-video">
          <p className="eyebrow">Hear from the coaches</p>
          <h2>Why we built Gioca</h2>
          <p className="section__intro">
            We started Gioca out of necessity. Local academies weren&apos;t
            meeting the holistic needs of players. Many prioritized growth over
            quality and overlooked how soccer can shape young people beyond the
            field. Gioca was built to change that — delivering world-class
            training and real-life tools like confidence, discipline, and mental
            performance.
          </p>
          <div className="about-video__frame about-video__frame--landscape">
            <video
              className="about-video__player"
              src="/videos/play-clip-1.mp4"
              controls
              playsInline
              preload="metadata"
              poster="/images/posters/027ced.jpg"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        <section className="founders">
          <header className="section__header">
            <p className="eyebrow">Our Team</p>
            <h2>Meet the founders</h2>
            <p className="section__intro">
              Our mission is to develop professional-level players and
              well-rounded individuals who can walk into any area of life and be
              successful.
            </p>
          </header>

          <ul className="founder-grid">
            {founders.map((founder) => (
              <li key={founder.name} className="founder-card">
                <img
                  className="founder-card__photo"
                  src={founder.photo}
                  alt={founder.name}
                  width={280}
                  height={320}
                />
                <div>
                  <h3>{founder.name}</h3>
                  <p className="founder-card__role">{founder.role}</p>
                  <p>{founder.bio}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <div className="page__actions">
          <Link to="/programs" className="btn btn--primary">
            View Programs
          </Link>
          <Link to="/contact" className="btn btn--ghost">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  )
}
