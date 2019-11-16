const express = require('express');
const router = express.Router();
const { projects } = require('../data.json/projectData.json');

router.get('/', (req, res) =>{
  res.render('project', { projs: projects[0].project_name});

});

module.exports = router;
