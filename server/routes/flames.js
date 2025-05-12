const express = require('express');
const router = express.Router();
const FlamesEntry = require('../models/FlamesEntry');

router.post('/save', async (req, res) => {
  const { name1, name2, result } = req.body;

  try {
    const entry = new FlamesEntry({ name1, name2, result });
    await entry.save();
    res.status(201).json({ message: 'Saved successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Server Error' });
  }
});
module.exports = router;
