var db = require("../models");

module.exports = function(app) {
  app.get("/api/matches", function(req, res) {
    db.Users.findAll({}).then(function(dbMatches) {
      res.json(dbMatches);
    });
  });

  app.post("/api/match", function(req, res) {
    db.Matches.create(req.body).then(function(dbMatch) {
      res.json(dbMatch);
    });
  });

  app.delete("/api/match/:id", function(req, res) {
    db.Match.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbMatch) {
      res.json(dbMatch);
    });
  });

};
