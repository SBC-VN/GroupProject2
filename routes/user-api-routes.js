var db = require("../models");
var path = require('path');

scoreCalculator = require("../routes/score-logic.js");
matchFinder = require("../routes/match-logic.js");

module.exports = function(app) {
  
  // Returns the profile picture - when given the 'correct' file name (id) - from 
  // the non-public storage location.    
  // This should prevent a random user from navigating to /public/images and see ALL
  // the profile pictures.
  app.get("/api/users/profilepic/:fileid", function(req, res) {
    console.log("get picture API call");
    var fname = "../private/profpics/" + req.params.fileid;
    var fpath = path.join(__dirname,fname);
    console.log(fpath);
    res.sendFile(fpath);
  });

  //
  //  Login user - returns user information in structure.  Login is by email address + password.
  //
  app.put("/api/login/:email", function(req, res) {
    console.log("login api called");
    db.user.findOne({
      where: {
        email: req.params.email
      }
    }).then(function(dbUser) {

      if (dbUser == null) {
        console.log("User not found");
        res.status(404).json("User not found");
      }
      else if (req.body.password === dbUser.password) {
        console.log("User login ",dbUser.screenname);
        dbUser.password = "****";
        res.status(200);
        res.json(dbUser);
      }
      else {
        console.log("Bad password");
        res.status(401).json("Access denied");
      }
    });
  });

  // Create / update user.
  app.post("/api/users", function(req, res) {
    console.log(" ");
    console.log("add/update user");

    var userInfo=req.body;

    var surveyAnswers=userInfo.surveyAnswers;
    if (surveyAnswers != null && surveyAnswers != undefined) {
      delete userInfo.surveyAnswers;
      userInfo.sentimentScore=scoreCalculator.scoreSample(surveyAnswers);
    }
   
    db.user.create(userInfo).then(function(dbUser) {
      console.log("Added user to database");
      // call routine to find user's matches.
      matchFinder.findMatches(dbUser);
      res.json(dbUser);
    }).catch(function (errors) {
      console.log("Error on user insert",errors);
      res.status(411);
      var errtxt = [];
      for (var i=0; i<errors.length; i++) {
        errtxt.push(errmsg[i].message);
        console.log(" ",errmsg[i].message);
      }
      res.json(errtxt);
    });
  });

  app.delete("/api/user/:id", function(req, res) {
    db.user.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbUser) {
      res.json(dbUser);
    });
  });
}