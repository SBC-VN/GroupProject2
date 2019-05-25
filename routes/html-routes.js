// Dependencies
// =============================================================
var path = require("path");
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  app.get("/matches", function(req, res) {
    console.log("/matches");
    var myId = 1;
    db.Match.findAll({
                      where: {
                        user1: myId},
                      include: [ {model: db.User, as: 'userInfo2'} ]
                    }
                    ).then(function(dbMatches) {

        // We must extract/convert the data from the sequelize model to what 
        //   handlebars needs.
        var matchDataArray = [];
        var matchData;
        dbMatches.forEach(element => {
          //console.log(element.dataValues);
          matchData = new Object;
          matchData.id = element.dataValues.id;
          matchData.userid = element.dataValues.user2;
          //console.log(element.dataValues.userInfo2.dataValues);
          //console.log(Object.keys(element.dataValues.userInfo2.dataValues));
          matchData.firstname = element.dataValues.userInfo2.dataValues.firstname;
          matchData.screenname = element.dataValues.userInfo2.dataValues.screenname;
          matchDataArray.push(matchData);
        });

        var hbsObject = {
          matches: matchDataArray
          };
      //console.log(hbsObject);
      res.render("matches", hbsObject);
    });
  });
};
