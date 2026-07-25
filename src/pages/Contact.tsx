import { useState, type FormEvent } from 'react'
import './pages.css'

export function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    // TODO: save inquiries to Firestore
    setSubmitted(true)
  }

  return (
    <section className="page">
      <div className="container page__inner page__inner--split">
        <header className="page__header">
          <p className="eyebrow">Contact</p>
          <h1>Get in touch</h1>
          <p>Ask about programs, tryouts, or enrollment.</p>
          <div className="contact-details">
            <p>
              <strong>Location</strong>
              <br />
              Eagles Landing Day Camp
              <br />
              74 Davidson&apos;s Mill Rd, North Brunswick, NJ 08902
            </p>
            <p>
              <strong>Email</strong>
              <br />
              <a href="mailto:zane.taha@giocasocceracademy.com">
                zane.taha@giocasocceracademy.com
              </a>
            </p>
            <p>
              <strong>Phone</strong>
              <br />
              <a href="tel:6098196499">609-819-6499</a>
            </p>
          </div>
        </header>

        {submitted ? (
          <p className="notice">Thanks — we&apos;ll get back to you soon.</p>
        ) : (
          <form className="form" onSubmit={handleSubmit}>
            <div className="form__row">
              <label>
                First name
                <input name="firstName" type="text" required />
              </label>
              <label>
                Last name
                <input name="lastName" type="text" required />
              </label>
            </div>
            <label>
              Email
              <input name="email" type="email" required />
            </label>
            <label>
              Message
              <textarea name="message" rows={5} required />
            </label>
            <button type="submit" className="btn btn--primary">
              Submit
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
