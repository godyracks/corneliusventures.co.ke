const mysql = require('mysql2');
const pool = require('../config/db');

const User = {
  // Create a new user
  async create(name, email, googleId, profileImage) {
    try {
      const connection = await pool.getConnection();
      const query = 'INSERT INTO users (id, name, email, google_id, profile_image) VALUES (?, ?, ?, ?, ?)';
      const [rows] = await connection.query(query, [
        mysql.escape(mysql.randomUUID()),
        name,
        email,
        googleId,
        profileImage,
      ]);
      connection.release();
      return rows.insertId; // Return the ID of the inserted user
    } catch (error) {
      console.error('Error creating user:', error);
      throw error;
    }
  },

  // Find a user by ID
  async findById(id) {
    try {
      const connection = await pool.getConnection();
      const query = 'SELECT * FROM users WHERE id = ?';
      const [rows] = await connection.query(query, [id]);
      connection.release();
      return rows[0]; // Return the first user found (assuming IDs are unique)
    } catch (error) {
      console.error('Error finding user by ID:', error);
      throw error;
    }
  },

  // Find a user by email
  async findByEmail(email) {
    try {
      const connection = await pool.getConnection();
      const query = 'SELECT * FROM users WHERE email = ?';
      const [rows] = await connection.query(query, [email]);
      connection.release();
      return rows[0]; // Return the first user found (assuming emails are unique)
    } catch (error) {
      console.error('Error finding user by email:', error);
      throw error;
    }
  },

  // Update a user by ID
  async update(id, name, email, googleId, profileImage) {
    try {
      const connection = await pool.getConnection();
      const query = 'UPDATE users SET name = ?, email = ?, google_id = ?, profile_image = ? WHERE id = ?';
      const [rows] = await connection.query(query, [name, email, googleId, profileImage, id]);
      connection.release();
      return rows.affectedRows > 0; // Return true if updated successfully
    } catch (error) {
      console.error('Error updating user:', error);
      throw error;
    }
  },

  // Delete a user by ID
  async delete(id) {
    try {
      const connection = await pool.getConnection();
      const query = 'DELETE FROM users WHERE id = ?';
      const [rows] = await connection.query(query, [id]);
      connection.release();
      return rows.affectedRows > 0; // Return true if deleted successfully
    } catch (error) {
      console.error('Error deleting user:', error);
      throw error;
    }
  },
};

module.exports = User;
