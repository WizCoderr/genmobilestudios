export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, role, message } = req.body || {};

  if (!name || !email || !role) {
    return res.status(400).json({ error: 'Name, email, and role are required.' });
  }

  const accessKey = process.env.WEB3FORMS_KEY;
  if (!accessKey) {
    return res.status(500).json({ error: 'Email service key is not configured.' });
  }

  const payload = {
    access_key: accessKey,
    subject: `🚀 New Waitlist Signup — ${name}`,
    from_name: 'GenMobi.Studio Waitlist',
    from_email: 'no-reply@genmobi.studio',
    reply_to: email,
    name,
    email,
    role,
    message: message || 'No message provided',
    autoresponse_email: email,
    autoresponse_subject: 'Welcome to GenMobi.Studio Waitlist! 🎉',
    autoresponse_message: `Hi ${name},\n\nThank you for joining the GenMobi.Studio waitlist! We're thrilled to have you on board.\n\nYou're now in line to get early access to our AI-powered Flutter app builder. We'll notify you as soon as it's your turn.\n\nIn the meantime, stay tuned for updates!\n\n— The GenMobi.Studio Team`,
  };

  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    const data = await response.json();

    if (!response.ok) {
      return res.status(response.status).json({ error: data.error || 'Email submission failed.' });
    }

    return res.status(200).json({ success: true, data });
  } catch (error) {
    console.error('waitlist api error', error);
    return res.status(500).json({ error: 'Unable to submit waitlist request.' });
  }
}
