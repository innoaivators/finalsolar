const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const { Resend } = require('resend');
const resend = new Resend(process.env.RESEND_API_KEY);

// Basic route
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Enquiry route
app.post('/api/enquiry', async (req, res) => {
  const { email, productName } = req.body;

  try {
    const data = await resend.emails.send({
      from: 'Metallica Enquiry <onboarding@resend.dev>',
      to: ['info@metallicakw.com'], // Using your verified Resend testing email (must match exactly)
      reply_to: email,
      subject: `New Enquiry: ${productName}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; border: 1px solid #eee; border-top: 5px solid #c9a84c;">
          <h2 style="color: #001f3f;">New Enquiry</h2>
          <p>You have received a new enquiry regarding <strong>${productName}</strong>.</p>
          <hr />
          <p><strong>From Email:</strong> ${email}</p>
          <p style="color: #666; font-size: 14px; margin-top: 20px;">
            Please reply directly to ${email} to assist the customer.
          </p>
        </div>
      `,
    });

    if (data.error) {
      console.error('Resend Error (Enquiry):', data.error);
      return res.status(400).json({ error: data.error });
    }

    res.status(200).json({ success: true, data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Contact Section Route
app.post('/api/contact', async (req, res) => {
  const { name, email, phone, message } = req.body;

  try {
    const data = await resend.emails.send({
      from: 'Metallica Contact <onboarding@resend.dev>',
      to: ['info@metallicakw.com'], // testing email (must match exactly)
      reply_to: email,
      subject: `New Contact Request from ${name}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; border: 1px solid #eee; border-top: 5px solid #001f3f;">
          <h2 style="color: #001f3f;">New Contact Submission</h2>
          <hr />
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Message:</strong></p>
          <p style="background: #f9f9f9; padding: 15px; border-radius: 5px;">${message}</p>
        </div>
      `,
    });

    if (data.error) {
      console.error('Resend Error (Contact):', data.error);
      return res.status(400).json({ error: data.error });
    }

    res.status(200).json({ success: true, data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
