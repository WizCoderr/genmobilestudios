export default function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="footer-inner">
        <div className="footer-grid">
          <div>
            <div className="footer-brand">GenMobi.Studio</div>
            <p className="footer-desc">
              Built by Wizcoderr.
              <br />
              Redefining the boundaries of AI-driven mobile development.
            </p>
          </div>

          <div className="footer-col">
            <h5>Main Pages</h5>
            <ul>
              <li><a href="#features">Features</a></li>
              <li><a href="#features">Agents</a></li>
              <li><a href="#workflow">Workflow</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h5>Legal</h5>
            <ul>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2024 GenMobi.Studio. Built by The Neon Architect.</p>
          <div className="footer-bottom-links">
            <a href="#">Status</a>
            <a href="#">Changelog</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
