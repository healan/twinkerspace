'use strict';

const express = require('express');
const cors = require('cors');
const db = require('./db');

const app = express();
const PORT = process.env.PORT || 6000;

app.use(cors({ origin: ['http://localhost:5173'] }));
app.use(express.json());

// POST /api/contact — submit a new inquiry
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body ?? {};

  if (!name || typeof name !== 'string' || name.trim().length === 0) {
    return res.status(400).json({ error: 'Name is required.' });
  }
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: 'Valid email is required.' });
  }
  if (!message || typeof message !== 'string' || message.trim().length === 0) {
    return res.status(400).json({ error: 'Message is required.' });
  }

  const record = db.insertInquiry(name.trim(), email.trim(), message.trim());
  console.log(`[inquiry #${record.id}] ${name} <${email}>`);
  return res.status(201).json({ success: true, id: record.id });
});

// GET /api/inquiries — list all submissions (demo admin endpoint)
app.get('/api/inquiries', (_req, res) => {
  res.json({ inquiries: db.getAllInquiries(), stats: db.getStats() });
});

// GET /api/health
app.get('/api/health', (_req, res) => res.json({ ok: true }));

app.listen(PORT, () => {
  console.log(`twinkerspace server running on http://localhost:${PORT}`);
});
