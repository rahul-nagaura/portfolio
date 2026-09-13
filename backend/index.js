const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');
const contactRoute = require('./routes/contact');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

// API routes
app.use('/api/v1/portfolio', contactRoute);

// Serve frontend static files in production
app.use(express.static(path.join(__dirname, '../frontend/dist')));

// Catch-all to serve index.html for SPA routing
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/dist/index.html'));
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ success: false, message: 'Internal Server Error' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
