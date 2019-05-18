module.exports = function(sequelize, DataTypes) {
    var Match = sequelize.define("Match", {
      // Giving the Author model a name of type STRING
        userid1: DataTypes.INTEGER,
        userid2: DataTypes.INTEGER,
        deltascore: DataTypes.INTEGER        
    });
  
    return Match;
  };