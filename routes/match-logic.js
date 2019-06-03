var db = require("../models");
var Sequelize = require("sequelize");
const Op = Sequelize.Op;


// Function creates a match record in the database.
function createMatch(user1,user2){

  // Try to find if the match already exists.
  db.match.findOne({
    where: {
      user1:user1.id,
      user2:user2.id
    }
  }).then(function(dbMatch) {

    // If the match *does not* already exist - create it.  Otherwise, we are done here.
    if (dbMatch == null) {
      var newMatch={
        deltascore:Math.abs(user1.sentimentScore-user2.sentimentScore),
        user1:user1.id,
        user2:user2.id
      }
      db.match.create(newMatch).then(function(dbMatch){
        console.log("A new match was created between user ID#:"+dbMatch.user1+
        " and user ID#:"+dbMatch.user2+" with a delta of: "+dbMatch.deltascore);
      });
    }
  });
}

// Function finds any matches in the database.   Anyone +/- 25 points away.
function findMatches(user1) {
  var low = user1.sentimentScore - 25;
  var high = user1.sentimentScore + 25;

  db.user.findAll({
    where:  { sentimentScore: 
              { [Op.and] : {
                  [Op.gte]: low,
                  [Op.lte]: high,
                }
              } 
            }
  }).then(function(dbMatchUser) {
    dbMatchUser.forEach(element => {
      var userInfo = element.dataValues;
      if (userInfo.id != user1.id) {
        createMatch(user1,userInfo);
        createMatch(userInfo,user1);
      }
    });
    
    //console.log
  });
}

module.exports= {findMatches};