var db = require("../models");

module.exports = function(app) {

  app.get("/api/userinfo/:userid", function(req, res) {
    db.UserInfo.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Match]
    }).then(function(dbUser) {
      res.json(dbUser);
    });
  });

  app.post("/api/userinfo", function(req, res) {
    db.UserInfo.create(req.body).then(function(dbUserinfo) {
      res.json(dbUserinfo);
    });
  });

  app.delete("/api/user/:id", function(req, res) {
    db.UserInfo.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbUserinfo) {
      res.json(dbUserinfo);
    });
  });

};
