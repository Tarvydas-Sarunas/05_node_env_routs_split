const express = require('express');
const booksRouter = express.Router();

// Data
const books = [
  {
    id: 1,
    title: 'Book 1',
    year: 2021,
    isPublished: true,
    category: 'Fiction',
  },
  {
    id: 2,
    title: 'Book 2',
    year: 2022,
    isPublished: false,
    category: 'Mystery',
  },
  {
    id: 3,
    title: 'Book 3',
    year: 2020,
    isPublished: true,
    category: 'Fantasy',
  },
  {
    id: 4,
    title: 'Book 4',
    year: 2019,
    isPublished: true,
    category: 'Science Fiction',
  },
  {
    id: 5,
    title: 'Book 5',
    year: 2023,
    isPublished: false,
    category: 'Thriller',
  },
];

// Routes

// GET gauti visas books
booksRouter.get('/api/books', (req, res) => {
  res.json(books);
});

// GET gauti viena book
booksRouter.get('/api/books/:bookId', (req, res) => {
  const bookId = +req.params.bookId;
  const found = books.find((bObj) => bObj.id === bookId);
  if (found === undefined) {
    res.status(404);
    json({
      msg: `user not found with id ${userId}`,
    });
    return;
  }
  res.json(found);
});

// is exportuoju rautus
module.exports = booksRouter;
