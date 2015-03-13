var mongoose = require('mongoose');

var sessionSchema = mongoose.Schema({
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

var SessionData = mongoose.model('Session', sessionSchema);

module.exports = SessionData;