import { Link } from 'react-router-dom'
import type { Program } from '../types'
import './pages.css'

const practiceSchedule = [
  {
    group: "2018's",
    time: '5:00 PM – 6:15 PM',
    days: 'Tuesday & Wednesday',
  },
  {
    group: "2016's",
    time: '5:00 PM – 6:30 PM',
    days: 'Tuesday, Wednesday & Thursday',
  },
  {
    group: "2014's",
    time: '6:30 PM – 8:00 PM',
    days: 'Tuesday, Wednesday & Thursday',
  },
  {
    group: "2013's",
    time: '6:30 PM – 8:00 PM',
    days: 'Tuesday, Wednesday & Thursday',
  },
]

const placeholderPrograms: Program[] = [
  {
    id: '1',
    name: 'Youth Development',
    description:
      'Technical skills, teamwork, and match play with individualized attention in small groups.',
    ageGroup: 'Birth years 2018–2014',
    schedule: 'Tue / Wed / Thu practices · Games on weekends',
  },
  {
    id: '2',
    name: 'Elite Training',
    description:
      'High-intensity sessions focused on game intelligence, fitness, and competitive habits.',
    ageGroup: 'Birth years 2013–2010',
    schedule: 'Tue / Wed / Thu practices · Games on weekends',
  },
  {
    id: '3',
    name: 'Mental Performance',
    description:
      'Confidence, focus, leadership, and pressure coaching for success on and off the field.',
    ageGroup: 'Birth years 2018–2010',
    schedule: 'Integrated into training',
  },
  {
    id: '4',
    name: 'Futsal',
    description:
      'Indoor futsal to sharpen close control, quick decision-making, and year-round fitness when outdoor seasons slow down.',
    ageGroup: 'Birth years 2018–2010',
    schedule: 'Winter program',
  },
  {
    id: '5',
    name: 'Athlete Development Club',
    description:
      'Official sport performance partnership focused on speed, strength, conditioning, agility, and coordination to support overall athletic development alongside soccer training.',
    ageGroup: 'Birth years 2018–2010',
    schedule: 'Performance training',
  },
]

export function Programs() {
  return (
    <section className="page">
      <div className="container page__inner page__inner--wide">
        <header className="page__header">
          <p className="eyebrow">Programs</p>
          <h1>Train with purpose</h1>
          <p>
            We coach birth years 2018 to 2010 — from first touches to competitive
            play. Our teams compete in different leagues. Games are on the
            weekends — or on weekdays if needed or postponed.
          </p>
        </header>

        <section className="practice-schedule">
          <header className="practice-schedule__header">
            <p className="eyebrow">Our Schedule</p>
            <h2>When Gioca teams practice</h2>
            <p>
              All Gioca teams practice on Tuesday, Wednesday, and Thursday.
            </p>
          </header>

          <ul className="practice-schedule__list">
            {practiceSchedule.map((slot) => (
              <li key={slot.group}>
                <p className="practice-schedule__group">{slot.group}</p>
                <p className="practice-schedule__time">{slot.time}</p>
                <p className="practice-schedule__days">{slot.days}</p>
              </li>
            ))}
          </ul>
        </section>

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
