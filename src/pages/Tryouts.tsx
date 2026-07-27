import { useMemo, useState, type FormEvent } from 'react'
import './pages.css'

const OWNER_EMAIL = 'zane.taha@giocasocceracademy.com'
const OWNER_PHONE = '609-819-6499'

const AGE_GROUPS = [
  'U7',
  'U8',
  'U9',
  'U10',
  'U11',
  'U12',
  'U13',
  'U14',
  'U15',
  'U16',
  'U17',
  'U18',
] as const

const tryoutSessions = [
  {
    id: 'apr-7',
    label: 'Tuesday, April 7, 2026 · GSA 2026 Tryouts',
    ages: 'U7–U18 — confirm with birthdate & age group below',
  },
]

/** 2026/27 season: August 1 – July 31 birthdate alignment */
function ageGroupFromBirthdate(value: string): string | null {
  if (!value) return null
  const [yearStr, monthStr] = value.split('-')
  const year = Number(yearStr)
  const month = Number(monthStr)
  if (!year || !month) return null

  const u = month >= 8 ? 2026 - year : 2027 - year
  if (u < 7 || u > 18) return null
  return `U${u}`
}

export function Tryouts() {
  const [submitted, setSubmitted] = useState(false)
  const [birthdate, setBirthdate] = useState('')
  const [ageGroup, setAgeGroup] = useState('')

  const suggestedAgeGroup = useMemo(
    () => ageGroupFromBirthdate(birthdate),
    [birthdate],
  )

  function handleBirthdateChange(value: string) {
    setBirthdate(value)
    const suggested = ageGroupFromBirthdate(value)
    if (suggested) {
      setAgeGroup(suggested)
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)

    const playerName = String(data.get('playerName') ?? '')
    const birthdateValue = String(data.get('birthdate') ?? '')
    const ageGroupValue = String(data.get('ageGroup') ?? '')
    const parentName = String(data.get('parentName') ?? '')
    const email = String(data.get('email') ?? '')
    const phone = String(data.get('phone') ?? '')
    const session = String(data.get('session') ?? '')
    const notes = String(data.get('notes') ?? '')

    if (!birthdateValue || !ageGroupValue) {
      return
    }

    const subject = encodeURIComponent(
      `2026 Tryout Signup — ${playerName} (${ageGroupValue}, born ${birthdateValue})`,
    )
    const body = encodeURIComponent(
      [
        'New tryout signup from giocasocceracademy.com',
        '',
        `Player name: ${playerName}`,
        `Birthdate: ${birthdateValue}`,
        `Age group: ${ageGroupValue}`,
        `Parent / guardian: ${parentName}`,
        `Email: ${email}`,
        `Phone: ${phone}`,
        `Preferred tryout: ${session}`,
        '',
        'Notes:',
        notes || '(none)',
      ].join('\n'),
    )

    window.location.href = `mailto:${OWNER_EMAIL}?subject=${subject}&body=${body}`
    setSubmitted(true)
    setBirthdate('')
    setAgeGroup('')
    form.reset()
  }

  return (
    <section className="page">
      <div className="container page__inner page__inner--split">
        <header className="page__header">
          <p className="eyebrow">2026 Season</p>
          <h1>Tryouts</h1>
          <p>
            Sign up for an upcoming tryout and get in touch with Gioca&apos;s
            owner, Coach Zane Taha. Enter the player&apos;s birthdate and age
            group so we can place them correctly.
          </p>

          <figure className="tryout-photo tryout-photo--chart">
            <img
              src="/images/tryouts/tryout-flyer.jpeg"
              alt="2026/27 age group lookup chart — August 1 to July 31 birthdate alignment"
              width={1200}
              height={900}
            />
            <figcaption>
              Find your birth year and month on the chart, then enter birthdate
              and age group in the signup form.
            </figcaption>
          </figure>

          <div className="tryout-sessions">
            <h2>Upcoming tryout dates</h2>
            <ul>
              {tryoutSessions.map((session) => (
                <li key={session.id}>
                  <strong>{session.label}</strong>
                  <span>{session.ages}</span>
                </li>
              ))}
            </ul>
            <p className="tryout-sessions__note">
              Location: Eagle&apos;s Landing Day Camp, 74 Davidson&apos;s Mill
              Rd, North Brunswick, NJ 08902
            </p>
          </div>

          <div className="contact-details">
            <p>
              <strong>Talk to the owner</strong>
              <br />
              Coach Zane Taha
            </p>
            <p>
              <strong>Email</strong>
              <br />
              <a href={`mailto:${OWNER_EMAIL}`}>{OWNER_EMAIL}</a>
            </p>
            <p>
              <strong>Phone</strong>
              <br />
              <a href={`tel:${OWNER_PHONE.replace(/-/g, '')}`}>{OWNER_PHONE}</a>
            </p>
          </div>
        </header>

        {submitted ? (
          <div>
            <p className="notice">
              Thanks — your email app should open with the signup ready to send
              to Coach Zane. If it didn&apos;t, email{' '}
              <a href={`mailto:${OWNER_EMAIL}`}>{OWNER_EMAIL}</a> or call{' '}
              <a href={`tel:${OWNER_PHONE.replace(/-/g, '')}`}>{OWNER_PHONE}</a>
              .
            </p>
            <button
              type="button"
              className="btn btn--primary"
              style={{ marginTop: '1rem' }}
              onClick={() => setSubmitted(false)}
            >
              Submit another player
            </button>
          </div>
        ) : (
          <form className="form" onSubmit={handleSubmit}>
            <h2 className="form__title">Tryout signup</h2>
            <label>
              Player name
              <input name="playerName" type="text" required autoComplete="name" />
            </label>

            <div className="form__row">
              <label>
                Birthdate
                <input
                  name="birthdate"
                  type="date"
                  required
                  min="2008-01-01"
                  max="2020-12-31"
                  value={birthdate}
                  onChange={(e) => handleBirthdateChange(e.target.value)}
                />
              </label>
              <label>
                Age group
                <select
                  name="ageGroup"
                  required
                  value={ageGroup}
                  onChange={(e) => setAgeGroup(e.target.value)}
                >
                  <option value="" disabled>
                    Select age group
                  </option>
                  {AGE_GROUPS.map((group) => (
                    <option key={group} value={group}>
                      {group}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            {suggestedAgeGroup && (
              <p className="form__hint">
                Chart match for this birthdate: <strong>{suggestedAgeGroup}</strong>
                . Confirm that age group before sending.
              </p>
            )}
            {birthdate && !suggestedAgeGroup && (
              <p className="form__hint form__hint--warn">
                This birthdate is outside U7–U18 for 2026/27. Double-check the
                chart or contact Coach Zane.
              </p>
            )}

            <label>
              Parent / guardian name
              <input name="parentName" type="text" required />
            </label>
            <div className="form__row">
              <label>
                Email
                <input name="email" type="email" required autoComplete="email" />
              </label>
              <label>
                Phone
                <input name="phone" type="tel" required autoComplete="tel" />
              </label>
            </div>
            <label>
              Preferred tryout date
              <select name="session" required defaultValue="">
                <option value="" disabled>
                  Select a date
                </option>
                {tryoutSessions.map((session) => (
                  <option key={session.id} value={session.label}>
                    {session.label}
                  </option>
                ))}
              </select>
            </label>
            <label>
              Questions for Coach Zane
              <textarea
                name="notes"
                rows={4}
                placeholder="Experience, position, anything we should know…"
              />
            </label>
            <button type="submit" className="btn btn--primary">
              Sign up &amp; email Gioca&apos;s owner
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
