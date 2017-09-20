var mongoose = require('mongoose');
var Event = mongoose.model('Event');

var eventController = {}

  // Show list of events function

  eventController.list = function(req, res) {
    Event.find({}).exec(function (err, events){
    if (err){
      console.log("Error:", err);
    }
    else {
      res.render("../views/events/index", {events: events});
    }
  });
};


  // Show single event by id function,

  eventController.show = function(req, res) {
    Event.findOne({_id: req.params.id}).exec(function (err, event) {
      if (err) {
        console.log("Error", err);
      }
      else {
        res.render("../views/events/show", {event: event});
      }
    });
  };

  // Create new event function, redirects to create page

  eventController.create = function(req, res) {
    res.render("../views/events/create");
  };

  // Save new event function

  eventController.save = function(req, res) {
    var event = new Event(req.body);

    event.save(function(err){
      if(err) {
        console.log(err);
        res.render("../views/events/create");
      } else {
        console.log("Successfully created an event.");
        res.redirect("/events/show/"+event._id);
      }
    });
  };

  // Edit event function, just redirects to edit page

  eventController.edit = function(req, res) {
    Event.findOne({_id: req.params.id}).exec(function (err, event) {
      if (err) {
        console.log("Error", err);
      } else {
        res.render("../views/events/edit", {event: event});
      }
    });
  };

  // Update event function for updating edited event

  eventController.update = function(req, res) {
    Event.findByIdAndUpdate(req.params.id, { $set: { event_title: req.body.event_title, start_date: req.body.start_date, end_date: req.body.end_date, location: req.body.location, description: req.body.description }}, {new: true}, function (err, event) {
      if (err) {
        console.log(err);
        res.render("..views/events/edit", {event: req.body});
      } else {
      res.redirect("/events/show/"+event._id);
      }
    });
  };

  // Delete event by id for removing event data

  eventController.delete = function(req, res) {
    Event.remove({_id: req.params.id}, function(err) {
      if (err) {
        console.log(err);
      } else {
        console.log("Event deleted!");
        res.redirect("/events");
      }
    });
  };

module.exports = eventController;
