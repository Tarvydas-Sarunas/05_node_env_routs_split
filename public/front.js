'use strict';
console.log('front.js file was loaded');

const url = 'http://localhost:3000/api/books';

// surinkti inputus ir issiusti i back end api
const form = document.getElementById('addBookForm');
const title = document.getElementById('title');
const year = document.getElementById('year');
const isPublished = document.getElementById('isPublished');
const categorie = document.getElementById('categorie');

// issiusti nauja knyga
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const newBook = {
    title: title.value,
    year: year.value,
    isPublished: isPublished.checked ? 'True' : 'False',
    category: categorie.value,
  };
  console.log('newObj ===', newBook);
  addNewPost(newBook);
});

function addNewPost(newBookObj) {
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newBookObj),
  })
    .then((response) => response.json())
    .then((postsArr) => {
      console.log(postsArr);
      // renderPosts(postsArr);
    })
    .catch((error) => {
      console.warn('ivyko klaida:', error);
    });
}
// atvaizuoti visas knygas korteliu pavidalu su mygtuku edit

// pasudus edit, supildoma forma su tos knygos reiksmem ir paspaus
// submit siunciam atnaujinimo uzklausa
// paspaudus edit pasikeicia submit mygtukas i edit
