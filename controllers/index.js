var indexController = {
	index: function(req, res) {
		res.render('index');
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
  }
};

module.exports = indexController;