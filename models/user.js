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
        score: DataTypes.INTEGER,
    });
 
    return User;
  };


