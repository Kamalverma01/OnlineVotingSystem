const express = require('express');
const app = express();
const db = require('./db');
require('dotenv').config();

// Use built-in middleware for JSON parsing
app.use(express.json()); // req.body will be parsed as JSON
app.use(express.urlencoded({ extended: true })); // Optional: For parsing URL-encoded form data

const PORT = process.env.PORT || 3000;

// Import the router files
const userRoutes = require('./routes/userRoutes');
const candidateRoutes = require('./routes/candidateRoutes');

// Use the routers
app.use('/user', userRoutes);
app.use('/candidate', candidateRoutes);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
