var Sentiment = require('sentiment');
var sentiment = new Sentiment();



function scoreFriend(newFriend){
    for(x in newfriend.textArr)
    {
        textScore=sentiment.analyze(newfriend.textArr[x]);
        console.log(textScore);
        scoreArr.push([newfriend.textArr[x],textScore.score]);
        scoreTotal+=parseInt(textScore.score);
    }
    // console.log(scoreTotal);
    
    newfriend.scoreArr=scoreArr;
    newfriend.score=scoreTotal;
    friends.push(newfriend);
  
  }
  

  // function logScores(){
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
//     friendScores.push(goal);
//     return closest;
// }


module.exports={scoreFriend}


