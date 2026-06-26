'use strict';

const mysql = require('mysql2/promise');
require('dotenv').config();

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
  waitForConnections: true,
  connectionLimit: 10,
});

// table initialization
async function init() {
  await pool.execute(`
    CREATE TABLE IF NOT EXISTS inquiries (
      id        INT AUTO_INCREMENT PRIMARY KEY,
      name      VARCHAR(255) NOT NULL,
      email     VARCHAR(255) NOT NULL,
      message   TEXT         NOT NULL,
      status    VARCHAR(50)  NOT NULL DEFAULT 'new',
      createdAt DATETIME     NOT NULL DEFAULT CURRENT_TIMESTAMP
    )
  `);
  console.log('[db] inquiries table ready');
}

module.exports = {
  init,

  async insertInquiry(name, email, message) {
    const [result] = await pool.execute(
      'INSERT INTO inquiries (name, email, message) VALUES (?, ?, ?)',
      [name, email, message]
    );
    console.log(`[db] inserted inquiry #${result.insertId}`);
    return { id: result.insertId, name, email, message, status: 'new' };
  },

  async getAllInquiries() {
    const [rows] = await pool.execute(
      'SELECT * FROM inquiries ORDER BY createdAt DESC'
    );
    return rows;
  },

  async getStats() {
    const [[{ total }]] = await pool.execute(
      'SELECT COUNT(*) as total FROM inquiries'
    );
    const [[{ newCount }]] = await pool.execute(
      "SELECT COUNT(*) as newCount FROM inquiries WHERE status = 'new'"
    );
    return { total, new: newCount };
  },
};