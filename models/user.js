module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
      // Information about the user.
        firstname: 
          { type: DataTypes.STRING,
            allowNull: false,
            validate: {
              len: [1]
              }
            },
        lastname: 
          { type: DataTypes.STRING,
            allowNull: false,
            validate: {
              len: [2]
              }
            },
        screenname: 
          { type: DataTypes.STRING,
            allowNull: false,
            validate: {
              len: [6]
              }
            },
        password:  
          { type: DataTypes.STRING,
            allowNull: false,
            validate: {
              len: [6]
              }
            },
<<<<<<< HEAD
        score: {type:DataTypes.INTEGER},
        matches: {type:DataTypes.JSON},
=======
        email: 
          { type: DataTypes.STRING,
            allowNull: false,
            validate: {
              len: [6]
              }
            },
        score: DataTypes.INTEGER,
>>>>>>> 61d72e91d6b2a099393d960b2dffc75cdb70916e
    });
 
    return User;
  };


