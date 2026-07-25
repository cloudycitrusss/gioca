import { Link } from 'react-router-dom'
import './pages.css'

const playClips = [
  {
    src: '/videos/play-clip-1.mp4',
    label: 'Players training on the pitch',
  },
  {
    src: '/videos/play-clip-2.mp4',
    label: 'Gioca athletes in action',
  },
  {
    src: '/videos/play-clip-3.mp4',
    label: 'Game-speed development',
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
        </header>

        <div className="about-clips" aria-label="Players in action">
          {playClips.map((clip) => (
            <div key={clip.src} className="about-clips__item">
              <video
                src={clip.src}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                aria-label={clip.label}
              />
            </div>
          ))}
        </div>

        <div className="about-video">
          <p className="eyebrow">Hear from the coaches</p>
          <h2>Why we built Gioca</h2>
          <p className="section__intro">
            Press play to hear Zane and Julian talk about the academy, our
            approach, and what whole-person development means for every player.
          </p>
          <div className="about-video__frame">
            <video
              className="about-video__player"
              src="/videos/coaches-talking.mp4"
              controls
              playsInline
              preload="metadata"
              poster="/images/posters/328be9.jpg"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        <div className="prose">
          <p>
            At Gioca Soccer Academy, we believe development goes far beyond the
            field. We started Gioca because local academies were prioritizing
            size over quality, leaving too many players overlooked. Our focus is
            different: small groups, individualized attention, and a holistic
            approach that builds both skill and character.
          </p>
          <p>
            Every player is challenged to grow technically, mentally, and
            personally, so they can thrive not just in soccer, but in every area
            of life. We stay true to our mission with a consistent voice:
            professional, positive, and inspiring.
          </p>
          <p>
            Gioca isn&apos;t just a place to train. It&apos;s a community where
            athletes learn to compete with confidence, lead with character, and
            enjoy the process of becoming their best selves.
          </p>
        </div>

        <section className="founders">
          <header className="section__header">
            <p className="eyebrow">Our Team</p>
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
