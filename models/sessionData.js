var mongoose = require('mongoose');

var Session = mongoose.Schema({
userName: String,
  UUID: String,
  userType: String,
  timeStamp:   String,
  entryMood: String,
  entryThoughts: String,
  track: {},
  exitMood: String,
  exitThoughts: String,
  moodShift: String,
  clickLocations: []
});

var SessionData = mongoose.model('Session', Session);

module.exports = SessionData;