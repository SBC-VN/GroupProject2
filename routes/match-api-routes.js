var db = require("../models");

module.exports = function(app) {
  
  // Just returns a simple list of matches for a user.
  app.get("/api/matches/:id", function(req, res) {

    db.match.findAll({
      where: { user1: req.params.id }  
    }).then(function(dbMatches) {
      res.json(dbMatches);
    });
  });

  app.post("/api/match", function(req, res) {
    db.match.create(req.body).then(function(dbMatch) {
      res.json(dbMatch);
    });
  });

  app.delete("/api/match/:id", function(req, res) {
    db.match.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbMatch) {
      res.json(dbMatch);
    });
  });
};