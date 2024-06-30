const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const passport = require('passport');
const session = require('express-session');
const morgan = require('morgan');
const mysql = require('mysql2');
const multer = require('multer'); // Add multer for file uploads
const path = require('path');
const authRoutes = require('./routes/authRoutes');
const serviceRoutes = require('./routes/serviceRoutes');
const userRoutes = require('./routes/userRoutes');
const portfolioRoutes = require('./routes/portfolioRoutes');
const portfolioController = require('./controllers/portfolioController');

dotenv.config();

const app = express();
const { protect } = require('./middleware/authMiddleware');

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.use(protect);

app.use(
  session({
    secret: process.env.SESSION_SECRET || 'your_session_secret_here',
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());

// Configure Passport and Google OAuth2
require('./utils/googleAuth')(passport);

// MySQL Connection Pool setup
const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '$@Godygaro66',
  database: process.env.DB_NAME || 'cvk',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Specify the directory where files will be stored
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname); // Specify how the file should be named
  }
});

const upload = multer({ storage: storage });


// Routes
app.use('/api/users', userRoutes); // Example user routes
app.use('/api/services', serviceRoutes); // Use your service routes
app.use('/api/auth', authRoutes); // Use your authentication routes

// Portfolio routes with file upload handling
app.use('/api/portfolio', portfolioRoutes); 

// Serve uploaded files statically
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

const PORT = process.env.PORT || 8080;

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
