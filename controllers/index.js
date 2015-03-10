var indexController = {
	index: function(req, res) {
		res.render('index');
	},
  instrument: function(req, res) {
    res.render('instrument');
  },
  moodEntry: function(req, res) {
    res.render('moodEntry');
  }
};

module.exports = indexController;