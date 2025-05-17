const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv=require('dotenv');

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb+srv://bharathreddy372k4:C7EUktJpUgz8rIe0@flames.ixwqvym.mongodb.net/?retryWrites=true&w=majority&appName=flames', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use('/api/flames', require('./routes/flames'));

app.listen(5000, () => {
  console.log('Server running on port 5000');
});
