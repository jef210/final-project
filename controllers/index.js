var indexController = {
	index: function(req, res) {
		res.render('index');
	},
  instrumentController: function(req, res) {
    res.render('instrument');
  }
};

module.exports = indexController;