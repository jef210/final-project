var indexController = {
	index: function(req, res) {
		res.render('index');
	},
  moodEntry: function(req, res) {
    res.render('moodEntry');
  },
  instrument: function(req, res) {
    res.render('instrument');
  },
  moodExit: function(req, res) {
    res.render('moodExit');
  }, 
  profile: function(req, res) {
    res.render('profile');
  }
};

module.exports = indexController;