import { useState } from 'react';

const faqs = [
  {
    q: 'Is the code production-ready?',
    a: 'Yes. Our agents generate clean, well-structured Flutter code with proper null-safety, state management, and architecture patterns. The code follows industry best practices and can be deployed directly to production.',
  },
  {
    q: 'Can I export the full source code?',
    a: 'Absolutely. You get full ownership of all generated code. Export directly to a GitHub repository or download as a complete Flutter project with all dependencies configured.',
  },
  {
    q: 'What Flutter versions are supported?',
    a: 'We support Flutter 3.x and above, including the latest stable releases. Our agents automatically target the most recent stable SDK and keep dependencies up to date.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className="faq" id="faq">
      <div className="container">
        <h2>Frequently Asked Questions</h2>

        <div className="faq-list">
          {faqs.map((faq, i) => (
            <div
              className={`faq-item${openIndex === i ? ' open' : ''}`}
              key={i}
              onClick={() => toggle(i)}
              id={`faq-item-${i}`}
            >
              <div className="faq-question">
                <h4>{faq.q}</h4>
                <span className="material-symbols-outlined">expand_more</span>
              </div>
              <div className="faq-answer">
                <p>{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
