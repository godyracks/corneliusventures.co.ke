const mysql = require('mysql2');
const dotenv = require('dotenv');

dotenv.config();

// Create a pool connection
const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '********',
  database: process.env.DB_NAME || 'cvk',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

pool.getConnection((err, connection) => {
  if (err) {
    console.error('Error connecting to database:', err);
    return;
  }
  console.log('Database connection successful!');
  connection.release(); // Release the connection
});

// Export the connection pool for async/await usage
module.exports = pool.promise();
