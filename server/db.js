'use strict';

// In-memory demo database — resets on server restart
const inquiries = [];
let nextId = 1;

module.exports = {
  insertInquiry(name, email, message) {
    const record = {
      id: nextId++,
      name,
      email,
      message,
      createdAt: new Date().toISOString(),
      status: 'new',
    };
    inquiries.push(record);
    console.log(`[db] inserted inquiry #${record}`);
    return record;
  },

  getAllInquiries() {
    return [...inquiries].reverse();
  },

  getStats() {
    return {
      total: inquiries.length,
      new: inquiries.filter((r) => r.status === 'new').length,
    };
  },
};
