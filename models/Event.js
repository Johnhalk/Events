var mongoose = require('mongoose');

var eventSchema = new mongoose.Schema({
  event_title: String,
  start_date: { type: Date, default: Date.now },
  end_date: { type: Date, default: Date.now },
  location: String,
  description: String,
});

module.exports = mongoose.model('Event', eventSchema);
