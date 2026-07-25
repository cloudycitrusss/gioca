import { Link } from 'react-router-dom'
import type { Program } from '../types'
import './pages.css'

const placeholderPrograms: Program[] = [
  {
    id: '1',
    name: 'Youth Development',
    description:
      'Technical skills, teamwork, and match play with individualized attention in small groups.',
    ageGroup: 'Ages 5–12',
    schedule: 'Weekday evenings & weekends',
  },
  {
    id: '2',
    name: 'Elite Training',
    description:
      'High-intensity sessions focused on game intelligence, fitness, and competitive habits.',
    ageGroup: 'Ages 13–15',
    schedule: 'Multi-day weekly training',
  },
  {
    id: '3',
    name: 'Mental Performance',
    description:
      'Confidence, focus, leadership, and pressure coaching for success on and off the field.',
    ageGroup: 'All ages',
    schedule: 'Integrated into training',
  },
]

export function Programs() {
  return (
    <section className="page">
      <div className="container page__inner">
        <header className="page__header">
          <p className="eyebrow">Programs</p>
          <h1>Train with purpose</h1>
          <p>
            Programs for ages 5–15 — from first touches to competitive play in
            MOSA, with a path toward higher levels.
          </p>
        </header>

        <ul className="program-list">
          {placeholderPrograms.map((program) => (
            <li key={program.id} className="program-list__item">
              <div>
                <p className="meta">
                  {program.ageGroup} · {program.schedule}
                </p>
                <h2>{program.name}</h2>
                <p>{program.description}</p>
              </div>
            </li>
          ))}
        </ul>

        <div className="page__actions">
          <Link to="/contact" className="btn btn--primary">
            Start Today
          </Link>
        </div>
      </div>
    </section>
  )
}
