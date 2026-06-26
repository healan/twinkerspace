require('dotenv').config(); 
'use strict';

const express = require('express');
const cors = require('cors');
const db = require('./db');

const app = express();
const PORT = process.env.SERVER_PORT || 5001;

app.use(cors({ origin: [process.env.CLIENT_ORIGIN] }));
app.use(express.json());

// POST /api/contact — submit a new inquiry
app.post('/api/contact', async (req, res) => {
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

  try {
  const record = await db.insertInquiry(name.trim(), email.trim(), message.trim());
  console.log(`[inquiry #${record.id}] ${name} <${email}>`);
  return res.status(201).json({ success: true, id: record.id });
} catch (err) {
  console.error('[db] failed to insert inquiry:', err);
  return res.status(500).json({ error: 'Failed to submit inquiry.' });
}

// GET /api/inquiries — list all submissions (demo admin endpoint)
app.get('/api/inquiries', async (_req, res) => {
  try {
    const inquiries = await db.getAllInquiries();
    const stats = await db.getStats();
    res.json({ inquiries, stats });
  } catch (err) {
    console.error('[db] failed to fetch inquiries:', err);
    return res.status(500).json({ error: 'Failed to fetch inquiries.' });
  }
});
});

// GET /api/health
app.get('/api/health', (_req, res) => res.json({ ok: true }));

db.init().then(() => {
  app.listen(PORT, () => {
    console.log(`twinkerspace server running on http://localhost:${PORT}`);
  });
}).catch((err) => {
  console.error('[db] connection failed:', err);
  process.exit(1);
});