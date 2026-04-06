interface HeroProps {
  onJoinWaitlist: () => void;
}

export default function Hero({ onJoinWaitlist }: HeroProps) {
  return (
    <section className="hero" id="hero">
      <div className="hero-gradient" />
      <div className="hero-content">
        <div className="hero-badge">
          <span className="hero-badge-dot">
            <span className="hero-badge-dot-ping" />
            <span className="hero-badge-dot-core" />
          </span>
          Autonomous Agent V2 Now Live
        </div>

        <h1>
          Build Full Flutter Apps <br />
          <span className="gradient-text">with AI Agents</span>
        </h1>

        <p className="hero-subtitle">
          Deploy a fleet of autonomous engineering agents that plan, architect,
          and generate production-ready Flutter code from a single text prompt.
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
