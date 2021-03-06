/* Treehouse FSJS Techdegree
 * Project 6 - Static Node.js and Express Site
 * app.js
  Goal: Exceed Expectation
  */

const express = require('express');
const app = express();

app.set('view engine', 'pug');

const routes = require('./routes');
app.use(routes);

app.use('/static', express.static('public'));


app.use((req, res, next) => {
  const err = new Error(`Page Not Found`);
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  res.locals.error = err;
  res.status(err.status);
  console.log('Error: Page not found! Please navigate back to the index page or enter a valaid page ID');
  res.render('error');
});
app.listen(3000, () =>{
  console.log(`This project is running on local host: ${3000} Boi!`);
});
