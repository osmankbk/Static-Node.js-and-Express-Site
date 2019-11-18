const express = require('express');
const router = express.Router();
const { projects } = require('../data/Data.json');

router.get('/:id', (req, res) => {
  res.render('project', {projs: projects[req.params.id].project_name});
});

module.exports = router;
