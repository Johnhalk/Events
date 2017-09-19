var express = require('express');
var router = express.Router();
var event = require("../controllers/EventController.js");


// Get all event
router.get('/', event.list);

// Get single event by id
router.get('/show/:id', event.show);

// Create event
router.get('/create', event.create);

// Save event
router.post('/save', event.save);

// Edit event
router.get('/edit/:id', event.edit);

// Edit update
router.post('/update/:id', event.update);

// Edit update
router.post('/delete/:id', event.delete);


module.exports = router;
