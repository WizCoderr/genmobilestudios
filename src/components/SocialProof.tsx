const testimonials = [
  {
    initials: 'JD',
    name: 'Julian D.',
    role: 'Founder @ TechFlow',
    color: 'purple',
    text: '"The Architect Agent actually understands BLoC pattern. I\'ve never seen AI generate Flutter code this clean before."',
  },
  {
    initials: 'MS',
    name: 'Maria S.',
    role: 'Senior Mobile Dev',
    color: 'blue',
    text: '"Building the basic structure of a social app took me 10 minutes. This is a game changer for agency work."',
  },
  {
    initials: 'AK',
    name: 'Alex K.',
    role: 'Product Designer',
    color: 'teal',
    text: '"Finally a tool that doesn\'t just give me snippets but builds the entire navigation stack and state management."',
  },
];

export default function SocialProof() {
  return (
    <section className="social-proof" id="social-proof">
      <div className="container">
        <h2>Loved by Builders</h2>

        <div className="social-grid">
          {testimonials.map((t) => (
            <div className="testimonial-card" key={t.initials} id={`testimonial-${t.initials}`}>
              <div className="testimonial-header">
                <div className={`testimonial-avatar ${t.color}`}>
                  {t.initials}
                </div>
                <div>
                  <div className="testimonial-name">{t.name}</div>
                  <div className="testimonial-role">{t.role}</div>
                </div>
              </div>
              <p className="testimonial-text">{t.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
