const express = require('express');
const router = express.Router();
const { projects } = require('../data/data.json');

router.get('/', (req, res, next) => {
  res.render('index', { projects });
});

router.get('/about', (req, res, next) => {
  res.render('about');
});


router.get('/project/:id', (req, res, next) => {
  const projectId = req.params.id;
  const project = projects.find( ({ id }) => id === +projectId);

  if(project){
    res.render('project', { project });
  } else {
    res.send("Page Not Found! Please navigate back to the index page or enter a valaid page ID");
  }
});

module.exports = router;
