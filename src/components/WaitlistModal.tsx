import { useState, useEffect, useRef } from 'react';

const WEB3FORMS_KEY = 'YOUR_WEB3FORMS_ACCESS_KEY'; // Replace with your key from https://web3forms.com

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function WaitlistModal({ isOpen, onClose }: WaitlistModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const modalRef = useRef<HTMLDivElement>(null);

  // Close on Escape key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleKey);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  // Close on backdrop click
  const handleBackdrop = (e: React.MouseEvent) => {
    if (e.target === modalRef.current) onClose();
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const payload = {
        access_key: WEB3FORMS_KEY,
        subject: `🚀 New Waitlist Signup — ${formData.name}`,
        from_name: 'GenMobi.Studio Waitlist',
        name: formData.name,
        email: formData.email,
        role: formData.role,
        message: formData.message || 'No message provided',
        // Auto-reply to the user
        autoresponse: formData.email,
        autoresponse_subject: 'Welcome to GenMobi.Studio Waitlist! 🎉',
        autoresponse_message: `Hi ${formData.name},\n\nThank you for joining the GenMobi.Studio waitlist! We're thrilled to have you on board.\n\nYou're now in line to get early access to our AI-powered Flutter app builder. We'll notify you as soon as it's your turn.\n\nIn the meantime, stay tuned for updates!\n\n— The GenMobi.Studio Team`,
      };

      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', role: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" ref={modalRef} onClick={handleBackdrop}>
      <div className="modal-content">
        {/* Close button */}
        <button className="modal-close" onClick={onClose} aria-label="Close">
          <span className="material-symbols-outlined">close</span>
        </button>

        {status === 'success' ? (
          <div className="modal-success">
            <div className="modal-success-icon">
              <span className="material-symbols-outlined">check_circle</span>
            </div>
            <h2>You're on the list! 🎉</h2>
            <p>
              We've sent a confirmation to your email. We'll notify you when GenMobi.Studio
              is ready for you.
            </p>
            <button className="btn-modal-primary" onClick={onClose}>
              Got it!
            </button>
          </div>
        ) : (
          <>
            <div className="modal-header">
              <div className="modal-badge">
                <span className="modal-badge-dot" />
                Early Access
              </div>
              <h2>Join the Waitlist</h2>
              <p>
                Be among the first to build Flutter apps with autonomous AI agents.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="modal-form">
              <div className="form-group">
                <label htmlFor="waitlist-name">Full Name</label>
                <input
                  id="waitlist-name"
                  name="name"
                  type="text"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="waitlist-email">Email Address</label>
                <input
                  id="waitlist-email"
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="waitlist-role">I am a...</label>
                <select
                  id="waitlist-role"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>Select your role</option>
                  <option value="Startup Founder">Startup Founder</option>
                  <option value="Mobile Developer">Mobile Developer</option>
                  <option value="Product Designer">Product Designer</option>
                  <option value="Freelancer">Freelancer</option>
                  <option value="Student">Student</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="waitlist-message">
                  What do you want to build? <span className="optional">(optional)</span>
                </label>
                <textarea
                  id="waitlist-message"
                  name="message"
                  placeholder="Tell us about your dream app..."
                  value={formData.message}
                  onChange={handleChange}
                  rows={3}
                />
              </div>

              <button
                type="submit"
                className="btn-modal-primary neon-glow-primary"
                disabled={status === 'sending'}
              >
                {status === 'sending' ? (
                  <span className="btn-loading">
                    <span className="spinner" />
                    Joining...
                  </span>
                ) : (
                  'Join Waitlist'
                )}
              </button>

              {status === 'error' && (
                <p className="form-error">
                  Something went wrong. Please try again.
                </p>
              )}

              <p className="form-note">
                <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>lock</span>
                We respect your privacy. No spam, ever.
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
