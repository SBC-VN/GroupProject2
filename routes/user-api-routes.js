var db = require("../models");
var friendScores = [];
var scoreArr = [];
var scoreTotal = 0;
var users = [];

module.exports = function(app) {
  app.get("/api/users", function(req, res) {
    //   db.User.findAll({}).then(function(dbUsers) {
    //   dbUsers.forEach(element => {
    //   element.password = "****";
    //   });
    //   populateScores(dbUsers);
    //   res.json(dbUsers);
    //   });

    db.User.findAll({}).then(function(dbUsers) {
      //initialize scores
      // console.log({dbUsers});
      users = dbUsers;
      populateScores();
      for (var x=0;x<dbUsers.length;x++) {
        console.log(
          "First Name: " + dbUsers[x].firstname + " Score:" + dbUsers[x].score
        ); //+"\n")
        // friendScores.push(dbUsers[x].score);
        // calculateUser(dbUsers[x]);
        var closeArr = calculateMatches(dbUsers[x]);
        var matches = getMatches(closeArr);
        // console.log(matches);
        tempMatches = JSON.stringify(matches);
        dbUsers[x].matches = JSON.parse(tempMatches);
        // console.log("Matches: ");
        // console.log(dbUsers[x].matches);
        // dbUsers[x].matches=users[x].matches;
      }

      res.json(dbUsers);
    });
  });

  function populateScores() {
    for (x in users) {
      friendScores.push(users[x].score);
    }
  }

  function calculateMatches(newfriend) {
    var copyScores = friendScores;
    var goal = newfriend.score;
    console.log("Current User's Score: " + goal); //+"\n");
    // var currIndex=copyScores.indexOf(newfriend.score);
    //FILTER
    //use goal
    //percentages too imprecise without empirical statistics
    // var point20=parseInt(goal*.20);
    var lowCheck = parseInt(goal - 25);
    var highCheck = parseInt(goal + 25);
    function checkDelta(value) {
      return value > lowCheck && value < highCheck;
    }
    // var closestArr=parseInt(copyScores.filter(checkDelta));
    var closestArr = copyScores.filter(checkDelta);
    // console.log("Closest Scores: "+closestArr)
    delete closestArr[closestArr.indexOf(goal)];
    // console.log("Closest Scores: "+closestArr)
    closestArr = closestArr.filter(Number);
    console.log("Closest Scores: " + closestArr);
    return closestArr;
  }

  function getMatches(closestArr) {
    var closestMatches = [];
    // console.log(users);
    closestMatches = users.filter(function(item) {
      return closestArr.includes(item.score);
    });
    //WORKS -Filters ENTIRE USER
    // console.log(closestMatches);

    var matchLabels = [];
    for (x in closestMatches) {
      //  console.log(closestMatches[x].firstname);
      matchLabels.push(
        "Match Name: " +
          closestMatches[x].firstname +
          " ".repeat(colSpacer(closestMatches[x].firstname)) +
          "Score:" +
          closestMatches[x].score
      );

      // console.log(colSpacer(closestMatches[x].firstname))
    }
    console.log(matchLabels);
    console.log("\n");
    closestMatches.matches = "[]";
    return closestMatches;
  }

  function colSpacer(word) {
    return parseInt(20 - word.length);
  }

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

//********************************************************* */
// console.log(array1); // [ 'a', 'c', 'e' ]
// console.log(array2); // [ 'b', 'd', 'f' ]

// console.log(closestMatches);

// for (x in closestArr)
// {
//   var friendMatch;
//   if(users[x].score===closestArr[x])
//   {
//       friendMatch=users[x];
//       // console.log(friendMatch);
//    closestMatches.push(friendMatch.firstname);
//     }
// }
// return closestMatches;
//  return matches;
//SEND MATCHES BACK
// res.json(friendMatch);
// scoreFriend(newfriend);
// var closest=logScores(newfriend);
// var friendMatch=getMatch(closest);

// req.body  is equal to the JSON post sent from the user
//JUST AN EXAMPLE OF WHERE WE ARE GRABBING ...
//  ;
// Using a RegEx Pattern to remove spaces from newfriend
// You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
// newfriend.routeName = newfriend.name.replace(/\s+/g, '').toLowerCase();
// console.log(newfriend.firstname+newfriend.score);

// for(x=0;x<5;x++)
// {

// var closest = copyScores.reduce(function(prev, curr) {
//     return (Math.abs(curr - goal) < Math.abs(prev - goal) ? curr : prev);
//   });
//   console.log("Nearest Match's Score: "+closest);
//   closestArr.push(closest);
//   // copyScores.pop(copyScores.indexOf(closest));
// }
// //add it back to not mess up count?
// // copyScores.push(newfriend.score);
// function scoreFriend(newfriend){

// for(x in newfriend.textArr)
// {
//     textScore=sentiment.analyze(newfriend.textArr[x]);
//     console.log(textScore);
//     scoreArr.push([newfriend.textArr[x],textScore.score]);
//     scoreTotal+=parseInt(textScore.score);

// }
// // console.log(scoreTotal);

// newfriend.scoreArr=scoreArr;
// newfriend.score=scoreTotal;
// friends.push(newfriend);

// }

// function logScores(){

// console.log("All Scores: "+friendScores);
// var copyScores=friendScores;

// var goal=newfriend.score;
// console.log("Current User's Score: "+goal);
// if(copyScores.length!==0)
// {
// var closest = copyScores.reduce(function(prev, curr) {
//     return (Math.abs(curr - goal) < Math.abs(prev - goal) ? curr : prev);
//   });
// }
//   console.log("Nearest Match's Score: "+closest);
//   friendScores.push(goal);

//   return closest;

// }

// function getMatch(closest){

// var friendMatch;

// for(x in friends)
// {
//    if(friends[x].score===closest)
//    {
//        friendMatch=friends[x];
//    }
// }

// console.log(friendMatch);

// return friendMatch;
// }
