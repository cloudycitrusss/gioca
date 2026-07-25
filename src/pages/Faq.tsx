import { Link } from 'react-router-dom'
import './pages.css'

const faqs = [
  {
    question: 'What leagues do you play in?',
    answer:
      'We currently play in MOSA. Our goal is to play in high levels of EDP and eventually MLS Next.',
  },
  {
    question: 'Do I need any prior experience to join your sessions?',
    answer:
      'No prior experience is required. Our classes are suitable for all skill levels, from beginners to advanced players. Our coaches provide personalized guidance to help you progress at your own pace. If you are interested in joining Gioca, visit our programs and sign up for a free training session.',
  },
  {
    question: 'What age groups does Gioca Soccer Academy cater to?',
    answer:
      'We offer programs for children starting from age 5 to 15, tailored to each age group.',
  },
  {
    question: 'Where are you located?',
    answer:
      "We train and play games at Eagle's Landing Day Camp, 74 Davidson's Mill Rd, North Brunswick Township, NJ 08902.",
  },
  {
    question: 'Are your coaches certified?',
    answer:
      'Yes, all our coaches are certified and have undergone comprehensive training to ensure top-quality coaching.',
  },
  {
    question: 'What measures do you take to ensure player safety?',
    answer:
      'We adhere to strict safety protocols, use high-quality equipment, and ensure coaches are trained in first aid.',
  },
  {
    question: 'How is Gioca Soccer Academy different from other soccer training facilities?',
    answer:
      'Our academy emphasizes the importance of off-field habits and routines to maximize on-field performance.',
  },
]

export function Faq() {
  return (
    <section className="page">
      <div className="container page__inner">
        <header className="page__header">
          <p className="eyebrow">FAQ</p>
          <h1>Frequently asked questions</h1>
          <p>Answers to common questions about Gioca Soccer Academy.</p>
        </header>

        <div className="faq-list">
          {faqs.map((item) => (
            <details key={item.question} className="faq-item">
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>

        <div className="page__actions">
          <Link to="/contact" className="btn btn--primary">
            Still have questions?
          </Link>
        </div>
      </div>
    </section>
  )
}
