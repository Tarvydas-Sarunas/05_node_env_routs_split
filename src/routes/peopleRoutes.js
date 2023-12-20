const express = require('express');
const peopleRouter = express.Router();

// data
const people = [
  {
    id: 1,
    name: 'Jonas',
    surname: 'Jonaitis',
    sex: 'male',
    favColors: ['red', 'blue'],
    age: 26,
    income: 1200,
    married: false,
    hasCar: false,
  },
  {
    id: 2,
    name: 'Severija',
    surname: 'Piktutytė',
    sex: 'female',
    favColors: ['red', 'violet', 'blue'],
    age: 26,
    income: 1300,
    married: false,
    hasCar: true,
  },
  {
    id: 3,
    name: 'Valdas',
    surname: 'Vilktorinas',
    sex: 'male',
    favColors: ['green', 'blue'],
    age: 16,
    income: 0,
    married: false,
    hasCar: false,
  },
  {
    id: 4,
    name: 'Virginijus',
    surname: 'Uostauskas',
    sex: 'male',
    favColors: ['red', 'green', 'blue'],
    age: 32,
    income: 2400,
    married: true,
    hasCar: true,
  },
  {
    id: 5,
    name: 'Samanta',
    surname: 'Uostauskienė',
    sex: 'female',
    favColors: ['red', 'green', 'blue', 'violet'],
    age: 28,
    income: 1200,
    married: true,
    hasCar: true,
  },
  {
    id: 6,
    name: 'Janina',
    surname: 'Stalautinskienė',
    sex: 'female',
    favColors: ['red', 'green'],
    age: 72,
    income: 364,
    married: false,
    hasCar: false,
  },
];

// ROUTES

// gauti visus zmones
peopleRouter.get('/api/people', (req, res) => {
  res.json(people);
});

// gauti visus susituokusius zmones
peopleRouter.get('/api/people/married', (req, res) => {
  const married = people.filter((pObj) => pObj.married === true);
  res.json(married);
});

// gauti visu zmoniu atlyginimu vidurki
peopleRouter.get('/api/people/salary/avg', (req, res) => {
  const salary = people.reduce((multi, pObj) => multi + pObj.income, 0);
  const avg = (salary / people.length).toFixed(2);
  res.json(avg);
});

// GET - /api/people/colors/red - grazins red spalva spalvu masyve

// is exportuoju rautus
module.exports = peopleRouter;
