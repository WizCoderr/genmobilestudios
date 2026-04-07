interface HeroProps {
  onJoinWaitlist: () => void;
}

export default function Hero({ onJoinWaitlist }: HeroProps) {
  return (
    <section className="hero" id="hero">
      <div className="hero-gradient" />
      <div className="hero-content">
        

        <h1>
          Build Full Flutter Apps <br />
          <span className="gradient-text">with AI Agents</span>
        </h1>

        <p className="hero-subtitle">
          GenMobi.Studio is the first AI-powered Flutter app builder that uses autonomous agents to create production-ready mobile apps in minutes. No coding required.
        </p>

        <div className="hero-buttons">
          <button
            className="btn-hero-primary neon-glow-primary"
            id="hero-waitlist-btn"
            onClick={onJoinWaitlist}
          >
            Join Waitlist
          </button>
        </div>
      </div>
    </section>
  );
}
