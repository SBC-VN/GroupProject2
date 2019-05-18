module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
      // Giving the Author model a name of type STRING
        firstname: DataTypes.STRING,
        lastname: DataTypes.STRING,
        screenname: DataTypes.STRING,
        password: DataTypes.STRING,
        score: DataTypes.INTEGER        
    });
  
    return User;
  };