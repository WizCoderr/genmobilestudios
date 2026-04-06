interface FinalCTAProps {
  onJoinWaitlist: () => void;
}

export default function FinalCTA({ onJoinWaitlist }: FinalCTAProps) {
  return (
    <section className="final-cta" id="final-cta">
      <div className="final-cta-gradient" />
      <div className="final-cta-content">
        <h2>Ready to automate your Flutter stack?</h2>
        <p>
          The future of mobile development is autonomous. Join the revolution.
        </p>
        <button
          className="btn-cta-big neon-glow-primary"
          id="final-cta-btn"
          onClick={onJoinWaitlist}
        >
          Join the Waitlist
        </button>
      </div>
    </section>
  );
}
