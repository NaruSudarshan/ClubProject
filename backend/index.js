const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const hotelRoutes = require('./routes/hotels');
require('dotenv').config(); 
const connectDB = require('./config'); 
const app = express();

app.use(express.json());
app.use(cors());

// Connect to MongoDB
connectDB();

// Routes

app.use('/api/auth', authRoutes);
app.use('/api/hotels', hotelRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
