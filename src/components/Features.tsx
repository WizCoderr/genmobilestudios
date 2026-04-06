const features = [
  {
    icon: 'assignment_turned_in',
    color: 'primary',
    title: 'Planner Agent',
    description:
      'Deconstructs your natural language prompts into a comprehensive technical roadmap.',
  },
  {
    icon: 'architecture',
    color: 'secondary',
    title: 'Architect Agent',
    description:
      'Designs clean system architectures following BLOC or Provider design patterns.',
  },
  {
    icon: 'data_object',
    color: 'tertiary',
    title: 'Code Generator',
    description:
      'Writes bug-free Flutter code with precise null-safety and platform-specific optimizations.',
  },
  {
    icon: 'account_tree',
    color: 'error',
    title: 'Multi-Agent Workflow',
    description:
      'Orchestrates parallel tasks to ensure design-to-code alignment across the entire app.',
  },
];

export default function Features() {
  return (
    <section className="features" id="agents">
      <div className="container">
        <div className="features-header">
          <h2>Autonomous Intelligence</h2>
          <p>
            Our multi-agent system divides complex engineering tasks into focused
            domains of expertise.
          </p>
        </div>

        <div className="features-grid">
          {features.map((feat) => (
            <div className="feature-card" key={feat.title} id={`feature-${feat.color}`}>
              <span className={`material-symbols-outlined feature-icon ${feat.color}`}>
                {feat.icon}
              </span>
              <h3>{feat.title}</h3>
              <p>{feat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
