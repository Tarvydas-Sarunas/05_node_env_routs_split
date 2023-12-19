require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();
// inportinu config fila
const { port } = require('./config');

const PORT = port || 5000;

// Middleware
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// ROUTES
app.get('/', (req, res) => {
  res.send('Hello World');
});

// inportuoju rautus
const usersRoutes = require('./routes/usersRoutes');
const bookRoutes = require('./routes/bookRoutes');
const peopleRoutes = require('./routes/peopleRoutes');

// panaudoju Routes
app.use('/', usersRoutes);
app.use('/', bookRoutes);
app.use('/', peopleRoutes);

// route error
// jei iki cia atejo kodas, reiskia tokio
// url kuriuo kreipiamasi nera
app.all('*', (req, res) => {
  res.status(404).json({
    msg: 'Path does not exist',
    url: req.path,
    method: req.method,
  });
});

// app.listen(PORT);
app.listen(PORT, () => {
  console.log(`Server runing on http://localhost:${PORT}`);
});
