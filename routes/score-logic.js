//SIMPLE FOR NOW BUT COULD BE EXPANDED UPON!!!

var Sentiment = require('sentiment');
var sentiment = new Sentiment();


//pass in entire object or just sample

function scoreSample(usersample){
  var scoreArr=[];
  var scoreTotal=0;
  
  for(var x=0;x<usersample.length;x++)
    {
        textScore=sentiment.analyze(usersample[x]);
        console.log(textScore);
        scoreArr.push([usersample[x],textScore.score]);
        scoreTotal+=parseInt(textScore.score);
    }
    
  return scoreTotal;
  
}
  

module.exports={scoreSample}

//***********************************************************************************************************************

  // function logScores(){
    //would have to log after matching
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
