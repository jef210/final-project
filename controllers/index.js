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
    res.render('profile-page');
  },
  startSession: function(req, res) {
    // res.send(req.body);
    req.session.startMood = req.body;
    res.redirect('/instrument');
  },
  exitSession: function(req, res) {
		var exitMood = req.body;
    var timeStamp = req.session.timeStamp;
    var entryMood: req.session.entryMood;
    var entryThoughts: req.session.entryThoughts;
		var track = req.session.track;
    var exitMood = req.session.exitMood;
    var exitThoughts = req.session.exitThoughts;
    var moodShift = req.session.moodShift;
    res.send({
      timeStamp: timeStamp,
      entryMood: entryMood,
      exitMood: exitMood,
      track: track,
      exitMood: exitMood,
      exitThoughts: exitThoughts,
      moodShift: moodShift
    });
  },
	saveInstrument: function(req, res){
		req.session.track = req.body.notes;
		res.sendStatus(200);
	}
};

module.exports = indexController;
