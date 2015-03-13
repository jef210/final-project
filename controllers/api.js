var Session = require('../models/sessionData.js');

var apiController = {
  addSession: function(req, res){
    // 1. Store a reference to the submitted data
    var newSession = req.body;

    // 1.5. Do any validation here

    // 2. Create a new Beer instance from the data
    var session = new session(newsession);

    // 3. Save the new instance
    session.save(function(err, savedSession){
      // 4. Once the save is completed, send the response
      res.send(savedSession);
    });
  },

  deleteSession: function(req, res){
    var toDelete = req.body.targetId;
    Session.findByIdAndRemove(toDelete, function(err, result){
      // Assume success here:
      res.send('success');
    });
  },

  getSession: function(req, res){
    // res.send(req.params.beer_id);
    var sessionId = req.params.session_id;
    // Find the given ID in the database
    Session.findById(sessionId, function(err, result){
      // console.log('Err:', err);
      console.log('Result:', result);
      // ## ANY ERROR CHECKING GOES HERE
      // Send the beer data right back to the requester
      res.send(result);
    });
  },
};

module.exports = apiController;