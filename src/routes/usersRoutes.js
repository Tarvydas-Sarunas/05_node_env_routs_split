const express = require('express');
const usersRouter = express.Router();

// Data
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

// Rautes

// GET /api/users - gauti visus users
usersRouter.get('/api/users', (req, res) => {
  res.json(users);
});

// GET /api/users/:userId - gauti viena users
usersRouter.get('/api/users/:userId', (req, res) => {
  const userId = +req.params.userId;
  // surasti obj su id === userId
  const found = users.find((uObj) => uObj.id === userId);
  // jei neradom
  if (found === undefined) {
    res.status(404).json({
      msg: `user not found with id ${userId}`,
    });
    return;
  }
  res.json(found);
});

// is exportuoju rautus
module.exports = usersRouter;
