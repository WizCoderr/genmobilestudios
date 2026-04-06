export default function Pricing() {
  return (
    <section className="pricing" id="pricing">
      <div className="pricing-card">
        <div className="pricing-badge">Early Access</div>
        <h2>Start Building Now</h2>
        <p className="pricing-subtitle">
          Get unlimited agent compute and full source code exports for a limited time price.
        </p>
        <div className="pricing-amount">
          <span className="price">$49</span>
          <span className="period">/mo</span>
        </div>
        <button className="btn-pricing" id="pricing-cta">
          Get Early Access
        </button>
        <p className="pricing-note">
          No credit card required to join the waitlist.
        </p>
      </div>
    </section>
  );
}
