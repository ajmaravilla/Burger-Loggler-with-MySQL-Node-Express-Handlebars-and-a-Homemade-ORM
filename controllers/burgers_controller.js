// set up dependencies
const express = require('express');
const router = express.Router();

// import required files
const burger = require('../models/burger.js');

// GET route to index
router.get('/', function(req, res) {
  res.redirect('/burgers');
});

// GET collection of burgers
router.get('/burgers', function(req, res) {
  burger.selectAll(function(data) {
    res.render('index', {burgerData: data});
  })
});

// POST new burger
router.post('/burgers/create', function(req, res) {
  burger.insertOne(req.body.burger_name, function(result) {
    console.log(result);
    res.redirect('/');
  })
});

// PUT to update existing burger
router.put('/burgers/update/:id', function(req, res) {
  // req.params.id

  burger.updateOne(req.params.id, function(result) {
    if (result.changedRow == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  })
});

// export router
module.exports = router;
