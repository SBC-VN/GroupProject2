var db = require("../models");

module.exports = function(app) {
  app.get("/api/users", function(req, res) {
    db.User.findAll({}).then(function(dbUsers) {
      dbUsers.forEach(element => {
        element.password = "****";
      });
      res.json(dbUsers);
    });
  });

  app.put("/api/login/:email", function(req, res) {
    db.User.findOne({
      where: {
        email: req.params.email
      }
    }).then(function(dbUser) {
       console.log(req.body);
       console.log(dbUser);
      if (dbUser == null) {
        res.send("404 - User Not Found");
      }
      else if (req.body.password === dbUser.password) {
        dbUser.password = "****";    
        res.json(dbUser);
      }
      else {
        res.send("401 - Access denied");
      }
    });
  });

  app.get("/api/user/:id", function(req, res) {
    db.User.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Match]
    }).then(function(dbUser) {
      dbUser.password = "****";
      res.json(dbUser);
    });
  });

  app.post("/api/user", function(req, res) {
    db.User.create(req.body).then(function(dbUser) {
      res.json(dbUser);
    });
  });

  app.delete("/api/user/:id", function(req, res) {
    db.User.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbUser) {
      res.json(dbUser);
    });
  });

};
