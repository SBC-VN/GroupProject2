var friendScores = [];
var users=[];
// require("../routes/user-api-routes.js");

function populateScores(dbUsers) 
{
users=dbUsers; 
friendScores=[];
  for (var x=0;x<dbUsers.length;x++) 
  {
    // console.log(dbUsers[x].score);
  friendScores.push(dbUsers[x].sentimentScore);
  }
}

function calculateMatches(newfriend) {
  var copyScores = friendScores;
  var goal = newfriend.sentimentScore;
  // console.log("Current User's Score: " + goal); //+"\n");
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
    return closestArr.includes(item.sentimentScore);
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
        closestMatches[x].sentimentScore
    );

  }
  console.log(matchLabels);
  console.log("\n");
  closestMatches.matches = "[]";
  return closestMatches;
}

function colSpacer(word) {
  return parseInt(20 - word.length);
}


module.exports= {populateScores, calculateMatches, getMatches, colSpacer}




//************************************************************************* *///************************************************************************* *

// app.post('/api/friends', function(req, res)
//  {
    
//   });



    // app.delete("/api/friends/:id", function (req,res){
    // friends = friends.filter(function (num){
    // return friends !==friends.indexOf(req.id);
    // });
    //     // notes.splice(notes.indexOf(req.id), 1);
    // });





//still have to be able to pull this friend when we figure out which one it is
//extract with its score...might be the wrong one? 
//can create a hash out of its scores? 













// function getMatch(closest){
//   var friendMatch;
//   for(x in friends)
//   {
//      if(friends[x].score===closest)
//      {
//          friendMatch=friends[x];
//      }
//   }

//   console.log(friendMatch);

//   return friendMatch;
// }



// function getClosestArr(newfriend){
  
//   var closestArr=[];
// for(x=0;x<5;x++)
// {

//   console.log("All Scores: "+friendScores);
//   var copyScores=friendScores;



//   var goal=newfriend.score;
//   console.log("Current User's Score: "+goal);
//   if(copyScores.length!==0)
//   {
//   var closest = copyScores.reduce(function(prev, curr) {
//       return (Math.abs(curr - goal) < Math.abs(prev - goal) ? curr : prev);
//     });
//   }
//     console.log("Nearest Match's Score: "+closest);    

//     closestArr.push(closest)
  
//     copyScores.pop(copyScores.indexOf(closest));
// }
  
// return closestArr;

// }


// function getMatches(closestArr){

//   var closestMatches=[];
    
//   for (x in closestArr)
//   {
//     var friendMatch;
//     if(friends[x].score===closestArr[x])
//     {
//         friendMatch=friends[x];
//         console.log(friendMatch);
//      closestMatches.push(friendMatch);
//       }
//   }

//     return closestMatches;

// }





    //now need to find the nearest match
    // for(x in friends)
    // {
    //     console.log(friends[x].score);
    //     friendScores.push(friends[x].score);
    // }

        //now we can push to the Array after check


      //need to locate friend with that score
     //put that in response
     //display with modal
