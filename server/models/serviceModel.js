const mysql = require('mysql2');
const pool = require('../config/db');

const User = {
  async create(name, email, password) {
    try {
      const connection = await pool.getConnection();
      const query = 'INSERT INTO users (id, name, email, password) VALUES (?, ?, ?, ?)';
      const [rows] = await connection.query(query, [mysql.escape(mysql.randomUUID()), name, email, password]);
      connection.release();
      return rows.insertId;
    } catch (error) {
      console.error('Error creating user:', error);
      throw error;
    }
  },

  async findById(id) {
    try {
      const connection = await pool.getConnection();
      const query = 'SELECT * FROM users WHERE id = ?';
      const [rows] = await connection.query(query, [id]);
      connection.release();
      return rows[0];
    } catch (error) {
      console.error('Error finding user by ID:', error);
      throw error;
    }
  },

  async findByEmail(email) {
    try {
      const connection = await pool.getConnection();
      const query = 'SELECT * FROM users WHERE email = ?';
      const [rows] = await connection.query(query, [email]);
      connection.release();
      return rows[0];
    } catch (error) {
      console.error('Error finding user by email:', error);
      throw error;
    }
  },

  async update(id, name, email, password) {
    try {
      const connection = await pool.getConnection();
      const query = 'UPDATE users SET name = ?, email = ?, password = ? WHERE id = ?';
      const [rows] = await connection.query(query, [name, email, password, id]);
      connection.release();
      return rows.affectedRows > 0;
    } catch (error) {
      console.error('Error updating user:', error);
      throw error;
    }
  },

  async delete(id) {
    try {
      const connection = await pool.getConnection();
      const query = 'DELETE FROM users WHERE id = ?';
      const [rows] = await connection.query(query, [id]);
      connection.release();
      return rows.affectedRows > 0;
    } catch (error) {
      console.error('Error deleting user:', error);
      throw error;
    }
  },
};

module.exports = User;
