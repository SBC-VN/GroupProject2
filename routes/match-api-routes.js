var db = require("../models");
var mLogic=require("../routes/match-logic.js");
var sLogic=require("../routes/score-logic.js");
var userAPI=require("../routes/user-api-routes.js");
var path = require('path');


module.exports = function(app) {
  app.get("/api/matches/:id", function(req, res) {

    // The 'where' clause limits the matches to the current user.  Without it ALL the matches
    // for ALL the users will show up.   
    // The 'include' clause pulls the matched user's info so that we can display it.
    
    // Joseph, do not delete or modify the where or include clauses.  Or the data model upon
    //   which then depend.

    // Joseph, do not delete or modify the where or include clauses.  Or the data model upon
    //   which then depend.
    db.match.findAll({
      where: { user1: req.params.id },
      include: [ {model: db.user, as: 'userInfo2'} ]      
    }).then(function(dbMatches) {
      res.json(dbMatches);
    });
    // Joseph, do not delete or modify the where or include clauses.
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


//*************************************************************************************************************** */
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