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
		var track = req.session.track;
		var startMood = req.session.startMood;
    res.send({
			startMood: startMood,
			exitMood: exitMood,
			track: track
		});
  },

	saveInstrument: function(req, res){
		req.session.track = req.body.notes;
		res.sendStatus(200);
	}
};

module.exports = indexController;
