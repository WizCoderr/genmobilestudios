import workspaceImage from '../assets/workspace-image.png';

const useCases = [
  {
    icon: 'rocket',
    title: 'Startups',
    description:
      'Ship your MVP in days, not months. Focus on product-market fit while agents handle the boilerplate.',
  },
  {
    icon: 'terminal',
    title: 'Developers',
    description:
      'Eliminate grunt work. Generate high-quality structure and focus on custom business logic.',
  },
  {
    icon: 'brush',
    title: 'Rapid Prototyping',
    description:
      'Go from whiteboard to high-fidelity interactive app in a single session.',
  },
];

export default function UseCases() {
  return (
    <section className="use-cases" id="use-cases">
      <div className="use-cases-grid">
        <div>
          <h2>Designed for Tomorrow's Creators</h2>
          <div className="use-case-items">
            {useCases.map((uc) => (
              <div className="use-case-item" key={uc.title}>
                <span className="material-symbols-outlined use-case-icon">
                  {uc.icon}
                </span>
                <div>
                  <h4>{uc.title}</h4>
                  <p>{uc.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="use-cases-image">
          <div className="use-cases-image-blur" />
          <div className="use-cases-image-frame glass-panel">
            <img
              src={workspaceImage}
              alt="A futuristic workspace with a large curved monitor showing data visualizations and mobile app code"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
