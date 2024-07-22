const express = require('express');
const Hotel = require('../models/hotels');

const router = express.Router();

// Get all hotels with filters
router.get('/', async (req, res) => {
  const { name, location, minPrice, maxPrice, rating } = req.query;
  const filter = {};

  if (name) filter.name = new RegExp(name, 'i');
  if (location) filter.location = location;
  if (minPrice || maxPrice) filter.price = {};
  if (minPrice) filter.price.$gte = minPrice;
  if (maxPrice) filter.price.$lte = maxPrice;
  if (rating) filter.rating = { $gte: rating };

  try {
    const hotels = await Hotel.find(filter);
    res.json(hotels);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Get hotel by ID
router.get('/:id', async (req, res) => {
  try {
    const hotel = await Hotel.findById(req.params.id);
    if (!hotel) return res.status(404).json({ error: 'Hotel not found' });
    res.json(hotel);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
