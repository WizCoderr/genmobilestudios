import mobilePreview from '../assets/mobile-preview.png';

export default function Demo() {
  return (
    <section className="demo-section" id="features">
      <div className="demo-panel glass-panel">
        <div className="demo-grid">
          {/* Code Editor Side */}
          <div className="demo-code">
            <div className="demo-code-header">
              <div className="window-dots">
                <div className="window-dot red" />
                <div className="window-dot yellow" />
                <div className="window-dot green" />
              </div>
              <div className="demo-filename">prompt_handler.dart</div>
            </div>

            <div className="demo-code-body">
              <div className="code-agent-line">
                <span className="code-agent-label">Agent_Planner:</span>
                <span className="code-agent-text">
                  Analyzing user intent: "Create a modern E-commerce app with purple theme"
                </span>
              </div>

              <div className="code-line">
                <span className="code-line-number">1</span>
              </div>
              <div className="code-line">
                <span className="code-line-number">2</span>
                <span>
                  <span className="code-keyword">import</span>{' '}
                  <span className="code-text">'package:flutter/material.dart';</span>
                </span>
              </div>
              <div className="code-line">
                <span className="code-line-number">3</span>
                <span>
                  <span className="code-keyword">class</span>{' '}
                  <span className="code-class">NeonStore</span>{' '}
                  <span className="code-keyword">extends</span>{' '}
                  <span className="code-class">StatelessWidget</span> {'{'}
                </span>
              </div>
              <div className="code-line">
                <span className="code-line-number">4</span>
                <span className="code-annotation">&nbsp;&nbsp;@override</span>
              </div>
              <div className="code-line">
                <span className="code-line-number">5</span>
                <span>
                  &nbsp;&nbsp;<span className="code-keyword">Widget</span> build(
                  <span className="code-class">BuildContext</span> context) {'{'}
                </span>
              </div>
              <div className="code-line">
                <span className="code-line-number">6</span>
                <span>
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="code-keyword">return</span>{' '}
                  <span className="code-class">Scaffold</span>(
                </span>
              </div>
              <div className="code-line">
                <span className="code-line-number">7</span>
                <span>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;backgroundColor:{' '}
                  <span className="code-string">Color(0xFF0E0E0E)</span>,
                </span>
              </div>
              <div className="code-line">
                <span className="code-line-number">8</span>
                <span>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;body:{' '}
                  <span className="code-class">GradientBackground</span>(...)
                </span>
              </div>
              <div className="code-line">
                <span className="code-line-number">9</span>
                <span>&nbsp;&nbsp;&nbsp;&nbsp;);</span>
              </div>
              <div className="code-line">
                <span className="code-line-number">10</span>
                <span>&nbsp;&nbsp;{'}'}</span>
              </div>

              <div className="code-terminal">
                <span className="material-symbols-outlined code-terminal-icon">terminal</span>
                <span className="code-terminal-text">
                  Synthesis complete. Generating UI components...
                </span>
                <div className="code-terminal-progress">
                  <span>92%</span>
                  <div className="progress-bar">
                    <div className="progress-fill" style={{ width: '92%' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Phone Preview Side */}
          <div className="demo-preview">
            <div className="phone-frame">
              <div className="phone-notch" />
              <img
                className="phone-screen"
                src={mobilePreview}
                alt="Sleek mobile app interface with dark purple theme"
              />
              <div className="phone-gradient-overlay" />
            </div>
            <p className="demo-preview-label">
              <span className="material-symbols-outlined filled">preview</span>
              Live Device Preview
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
