const steps = [
  {
    icon: 'chat_bubble',
    color: 'var(--primary)',
    title: 'Intent',
    desc: 'Describe your dream app features',
    glow: true,
  },
  {
    icon: 'psychology',
    color: 'var(--secondary)',
    title: 'Synthesis',
    desc: 'Agents map features to logic & UI',
    glow: false,
  },
  {
    icon: 'code',
    color: 'var(--tertiary)',
    title: 'Generation',
    desc: 'Autonomous Dart & Flutter coding',
    glow: false,
  },
  {
    icon: 'rocket_launch',
    color: '#4ade80',
    title: 'Deploy',
    desc: 'Export to GitHub or Cloud Run',
    glow: false,
  },
];

export default function Workflow() {
  return (
    <section className="workflow" id="workflow">
      <div className="container">
        <h2>The Generation Pipeline</h2>

        <div className="workflow-pipeline">
          <div className="workflow-line" />

          {steps.map((step) => (
            <div className="workflow-step" key={step.title}>
              <div
                className="workflow-step-icon"
                style={step.glow ? { boxShadow: `0 0 15px rgba(204, 151, 255, 0.3)` } : {}}
              >
                <span
                  className="material-symbols-outlined"
                  style={{ color: step.color }}
                >
                  {step.icon}
                </span>
              </div>
              <h4>{step.title}</h4>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
