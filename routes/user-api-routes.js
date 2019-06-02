var db = require("../models");
var mLogic=require("../routes/match-logic.js");
var sLogic=require("../routes/score-logic.js");
var users=[];
var path = require('path');

module.exports = function(app) {
  
  app.get("/api/users", function(req, res) {
    db.user.findAll({}).then(function(dbUsers) {
      //initialize scores
      
      // console.log({dbUsers});
      // mLogic.populateScores();

      for (var x=0;x<dbUsers.length;x++) {
        mLogic.matchUser(dbUsers[x]);
      }

      res.json(dbUsers);
    });

    });
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
        //res.send("404 - User Not Found");
      }
      else if (req.body.password === dbUser.password) {
        console.log("User login ",dbUser.screenname);
        dbUser.password = "****";
        updateUserProfile(dbUser);
        res.status(200);
        res.json(dbUser);
      }
      else {
        console.log("Bad password");
        res.status(401).json("Access denied");
      }
    });
  });






  app.get("/api/user/:id", function(req, res) {
    db.user.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Match]
    }).then(function(dbUser) {
      dbUser.password = "****";
      res.json(dbUser);
    });
  });



  app.post("/api/users", function(req, res) {
    
    console.log(req.body);
    var newUser=req.body;
    //call sentiment on userSample
    newUser.sentimentScore=sLogic.scoreSample(req.body.userSample);    
    //RETURNS ENTIRE USER
    db.user.create(newUser).then(function(dbUser) {
      mLogic.matchUser(dbUser);
      console.log(dbUser.sentimentScore);
      console.log(dbUser.matches);      
      res.json(dbUser);
    }).catch(function (errors) {
      console.log("Error on user insert");
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


//**************************************************************************************************** */
