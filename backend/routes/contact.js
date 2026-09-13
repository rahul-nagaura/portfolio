const express = require('express');
const router = express.Router();
const { sendMail } = require('../controllers/mail');

router.post('/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    
    if (!name || !email || !message) {
      return res.status(400).json({ success: false, message: 'Please provide name, email, and message' });
    }
    
    await sendMail({ name, email, message, ip: req.ip });
    
    res.status(200).json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    if (error.message === 'Rate limit exceeded') {
      return res.status(429).json({ success: false, message: 'Too many requests, please try again later' });
    }
    console.error('Error in contact route:', error);
    res.status(500).json({ success: false, message: 'Failed to send email' });
  }
});

module.exports = router;
