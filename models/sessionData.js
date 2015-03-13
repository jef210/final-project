var mongoose = require('mongoose');

var session = mongoose.Schema({
  userName: String,
  UUID: String,
  userType: String,
  timeStamp: String,
  entryMood: String,
  entryThoughts: String,
  track: {},
  exitMood: String,
  exitThoughts: String,
  moodShift: String
});

var SessionData = mongoose.model('Session', session);

module.exports = SessionData;