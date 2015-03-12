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
    req.session.startMood = req.body
    res.redirect('/instrument');
  },
  exitSession: function(req, res) {
    res.send({body:req.body, session: req.session});
  }
};

module.exports = indexController;