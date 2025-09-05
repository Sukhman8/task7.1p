// server.js
require('dotenv').config();
const express = require('express');
const path = require('path');
const sgMail = require('@sendgrid/mail');

const app = express();
const PORT = process.env.PORT || 3000;

if (!process.env.SENDGRID_API_KEY) {
  console.warn('WARNING: SENDGRID_API_KEY not set. Emails will fail until you set it in .env');
}
if (!process.env.FROM_EMAIL) {
  console.warn('WARNING: FROM_EMAIL not set. Set it in .env to a SendGrid-verified sender.');
}

sgMail.setApiKey(process.env.SENDGRID_API_KEY || '');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// POST /subscribe receives { email }
app.post('/subscribe', async (req, res) => {
  const { email } = req.body;
  if (!email) return res.status(400).json({ success: false, message: 'Email is required' });

  const msg = {
    to: email,
    from: process.env.FROM_EMAIL,
    subject: 'Welcome to DEV@Deakin — DevLink Marketplace',
    text: `Hello!\n\nThanks for joining DEV@Deakin (DevLink). We're happy to have you onboard.\n\nCheers,\nDEV@Deakin Team`,
    html: `
      <div style="font-family:Arial,sans-serif;line-height:1.4">
        <h2>Welcome to DEV@Deakin 🎉</h2>
        <p>Thanks for joining the DevLink Marketplace — we're excited to have you on board.</p>
        <p>If you have any questions reply to this email.</p>
        <p>— The DEV@Deakin Team</p>
      </div>
    `
  };

  try {
    // await to ensure the send was attempted (you can change to fire-and-forget if desired)
    await sgMail.send(msg);
    return res.status(200).json({ success: true, message: 'Welcome email sent' });
  } catch (err) {
    console.error('SendGrid error:', err);
    if (err.response && err.response.body) {
      console.error('SendGrid response body:', err.response.body);
    }
    return res.status(500).json({ success: false, message: 'Failed to send welcome email' });
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
