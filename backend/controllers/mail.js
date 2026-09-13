const nodemailer = require('nodemailer');

// Basic in-memory rate limiting
const rateLimitMap = new Map();
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hour
const MAX_EMAILS = 5;

const checkRateLimit = (ip) => {
  const now = Date.now();
  if (rateLimitMap.has(ip)) {
    const data = rateLimitMap.get(ip);
    if (now - data.startTime > RATE_LIMIT_WINDOW) {
      rateLimitMap.set(ip, { count: 1, startTime: now });
      return true;
    }
    if (data.count >= MAX_EMAILS) {
      return false;
    }
    data.count++;
    return true;
  }
  rateLimitMap.set(ip, { count: 1, startTime: now });
  return true;
};

const sendMail = async ({ name, email, message, ip }) => {
  if (ip && !checkRateLimit(ip)) {
    throw new Error('Rate limit exceeded');
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_TO || 'rahulnagora88905@gmail.com',
    subject: `Portfolio Contact: ${name}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 5px;">
        <h2 style="color: #333; border-bottom: 2px solid #0ea5e9; padding-bottom: 10px;">New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <h3 style="margin-top: 20px; color: #555;">Message:</h3>
        <p style="background-color: #f9f9f9; padding: 15px; border-radius: 4px; white-space: pre-wrap;">${message}</p>
      </div>
    `
  };

  return transporter.sendMail(mailOptions);
};

module.exports = { sendMail };
