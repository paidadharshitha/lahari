import { useState, useEffect } from 'react';

const STORAGE_KEY = 'll-disclaimer-accepted';

export default function DisclaimerPopup() {
  const [visible, setVisible] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    try {
      const accepted = localStorage.getItem(STORAGE_KEY);
      if (accepted !== 'true') {
        setVisible(true);
      }
    } catch {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    try {
      localStorage.setItem(STORAGE_KEY, 'true');
    } catch {
      /* ignore */
    }
    setVisible(false);
  };

  const handleDecline = () => {
    setError(
      'You must accept the disclaimer to continue using this website. This website provides legal information only and does not constitute legal advice.'
    );
  };

  if (!visible) return null;

  return (
    <div className="disclaimer-overlay" role="dialog" aria-modal="true" aria-label="Legal disclaimer">
      <div className="disclaimer-modal">
        <div className="disclaimer-header">
          <i className="fas fa-scale-balanced" aria-hidden="true" />
          <h2>Legal Disclaimer</h2>
        </div>

        <div className="disclaimer-body">
          <p>
            Welcome to Lahari Legal Associates. Before proceeding, please read
            and acknowledge the following disclaimer:
          </p>
          <ul className="disclaimer-list">
            <li>
              The content on this website is for general informational purposes
              only and does not constitute legal advice.
            </li>
            <li>
              No attorney-client relationship is created by your use of this
              website or the information provided herein.
            </li>
            <li>
              The information on this website may not reflect the most current
              legal developments and is subject to change without notice.
            </li>
            <li>
              Outcomes described in case studies and testimonials are not
              guaranteed and may vary based on individual circumstances.
            </li>
            <li>
              For legal advice specific to your situation, please contact us
              directly to schedule a consultation with one of our attorneys.
            </li>
            <li>
              Transmission of information via this website does not create a
              confidential communication channel.
            </li>
          </ul>
          {error && <p className="disclaimer-error">{error}</p>}
        </div>

        <div className="disclaimer-actions">
          <button type="button" className="btn-primary" onClick={handleAccept}>
            Accept &amp; Continue
          </button>
          <button type="button" className="btn-outline" onClick={handleDecline}>
            Decline
          </button>
        </div>
      </div>
    </div>
  );
}
