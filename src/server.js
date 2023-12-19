const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

const PORT = 3000;

// Middleware
app.use(cors());
app.use(morgan('dev'));
// Middleware
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

const users = [
  {
    id: 1,
    name: 'Serbentautas',
    town: 'Vilnius',
    isDeleted: false,
  },
  {
    id: 2,
    name: 'Lenteja',
    town: 'Kaunas',
    isDeleted: false,
  },
  {
    id: 3,
    name: 'James',
    town: 'London',
    isDeleted: false,
  },
];

// ROUTES
app.get('/', (req, res) => {
  res.send('Hello World');
});

// app.listen(PORT);
app.listen(PORT, () => {
  console.log(`Server runing on http://localhost:${PORT}`);
});
