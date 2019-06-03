//SIMPLE FOR NOW BUT COULD BE EXPANDED UPON!!!

var Sentiment = require('sentiment');
var sentiment = new Sentiment();

//pass in entire object or just sample

function scoreSample(usersample){
  var scoreArr=[];
  var scoreTotal=0;

  // Uncomment out for debug purposes.  Otherwise, just a bunch of stuff going to screen.
  //console.log("*".repeat(process.stdout.columns));
  //console.log("SENTIMENT SCORING ANALYSIS")
  //console.log("*".repeat(process.stdout.columns));

  for(var x=0;x<usersample.length;x++)
    {
        textScore=sentiment.analyze(usersample[x]);

        //console.log(textScore);
   
        scoreArr.push([usersample[x],textScore.score]);
        scoreTotal+=parseInt(textScore.score);
    }

    //console.log("*".repeat(process.stdout.columns));
 
  return scoreTotal;
  
} 

module.exports={scoreSample}