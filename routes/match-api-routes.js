var db = require("../models");
var mLogic=require("../routes/match-logic.js");
var sLogic=require("../routes/score-logic.js");
var users=[];
var path = require('path');


module.exports = function(app) {
  app.get("/api/match", function(req, res) {
    db.Users.findAll({}).then(function(dbMatches) {

      users=dbUsers;
      // console.log(dbUsers);
      mLogic.populateScores(dbUsers);

      for (var x=0;x<dbMatches.length;x++) {
        mLogic.matchUser(dbMatches[x]);
        //   console.log(
      //     "First Name: "+dbUsers[x].firstname +   " ".repeat(mLogic.colSpacer(dbUsers[x].firstname))  + " Score:" + dbUsers[x].sentimentScore
      //   ); //+"\n")
      //   var closeArr = mLogic.calculateMatches(dbUsers[x]);
      //   var matches = mLogic.getMatches(closeArr);
      //   // console.log(matches);
      //   tempMatches = JSON.stringify(matches);
      //   dbUsers[x].matches = JSON.parse(tempMatches);
      //   // console.log(dbUsers[x].matches);
      //   // dbUsers[x].matches=users[x].matches;
      }

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
