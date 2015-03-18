var Session = require('../models/sessionData.js');


var indexController = {
	index: function(req, res) {
		res.render('index');
	},
  about: function(req, res) {
    res.render('about');
  },
  moodEntry: function(req, res) {
    res.render('entry-mood');
  },
  instrument: function(req, res) {
    res.render('instrument');
  },
  moodExit: function(req, res) {
    res.render('exit-mood');
  },
  profile: function(req, res) {
    // console.log('req.user = ', req.user)
    console.log('req.user = ', req.user.userSession)
    res.render('profile-page', {user:req.user});
  },
  startSession: function(req, res) {
    // res.send(req.body);
    req.session.entryMood = req.body;
    res.redirect('/instrument');
  },
  exitSession: function(req, res) {
    console.log('req.body: ', req.body);
    var timeStamp = new Date();
    var entryMood = req.session.entryMood.entryMood;
    var entryThoughts = req.session.entryMood.entryThoughts;
		var track = req.session.track;
    var exitMood = req.body.exitMood;
    var exitThoughts = req.body.exitThoughts;
    var moodShift = req.body.moodShift;
    var clickLocations = req.session.clickLocations;
    // var newSession = new Session({
    //   timeStamp: timeStamp,
    //   entryMood: entryMood,
    //   entryThoughts: entryThoughts,
    //   exitMood: exitMood,
    //   track: track,
    //   exitMood: exitMood,
    //   exitThoughts: exitThoughts,
    //   moodShift: moodShift,
    //   clickLocations: clickLocations
    // });
    // newSession.save(function (err, results){
    //   res.send(results);
    //   this is where redirect goes
    // })
    req.user.userSession.push({
      timeStamp: timeStamp,
      entryMood: entryMood,
      entryThoughts: entryThoughts,
      exitMood: exitMood,
      track: track,
      exitMood: exitMood,
      exitThoughts: exitThoughts,
      moodShift: moodShift,
      clickLocations: clickLocations
    })
    req.user.save(function (err, results){
      res.redirect('/profile-page');
    });
  },
	saveInstrument: function(req, res){
		req.session.track = req.body.notes;
    req.session.clickLocations = req.body.clickLocations;
		res.sendStatus(200);
	}
};

module.exports = indexController;
