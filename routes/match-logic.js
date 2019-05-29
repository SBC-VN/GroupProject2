var friendScores = [];
var users=[];

//need it to create match obj
var db = require("../models");


// function createMatchObjS(){
// }

function createMatchObj(user1,user2){
  var matchDelta=Math.abs(user1.sentimentScore-user2.sentimentScore);
  // console.log(matchDelta);

  var newMatch={
    deltascore:matchDelta,
    user1:user1.id,
    user2:user2.id    
  }

  db.match.create(newMatch).then(function(dbMatch){});

}

  // $.ajax({
  //   method: 'POST',
  //   url: '/api/match',
  //   data: newMatch
  // }).then(function(data) {
  //   console.log("adding match");
  //   console.log(data);

   //redirect to profile
   //how to make sure correct user is displayed? 


     // // Grab the result from the AJAX post so that the best match's name and photo are displayed.
     // $("#matchName").text(data.name);
     //          $('#matchImg').attr("src", data.photo);
     //          // Show the modal with the best match 
     //          $("#resultsModal").modal('toggle');
  // });







function matchUser(theUser){

  console.log(
    "First Name: "+theUser.firstname +   " ".repeat(colSpacer(theUser.firstname))  + " Score:" + theUser.sentimentScore
  ); //+"\n")
  var closeArr = calculateMatches(theUser);
  var matches = getMatches(closeArr);
  // console.log(matches);
  tempMatches = JSON.stringify(matches);
  theUser.matches = JSON.parse(tempMatches);
  // console.log(dbUsers[x].matches);
  // dbUsers[x].matches=users[x].matches;

  return theUser;
}










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
  // closestMatches.matches = "[]";
  return closestMatches;
}

function colSpacer(word) {
  return parseInt(20 - word.length);
}


module.exports= {populateScores, calculateMatches, getMatches, colSpacer,matchUser, createMatchObj}




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
