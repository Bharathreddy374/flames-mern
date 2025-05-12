const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv=require('dotenv');

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/flamesDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use('/api/flames', require('./routes/flames'));

app.listen(5000, () => {
  console.log('Server running on port 5000');
});
