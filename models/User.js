module.exports = function(sequelize, DataTypes) {
    var user = sequelize.define("user", {
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
              },
            unique: true
          },
        password:  
          { type: DataTypes.STRING,
            allowNull: false,
            validate: {
              len: [6]
              }
            },
<<<<<<< HEAD
        sentimentScore: {
          type:DataTypes.INTEGER,
          allowNull: false,
          defaultValue: 0,
        },
        matches:{
          type:DataTypes.JSON,
        },
=======
        score: {type:DataTypes.INTEGER},
>>>>>>> 6015762aabaae8638ee9d7ef7873aab59759efbd
        
        email: 
          { type: DataTypes.STRING,
            allowNull: false,
            validate: {
              len: [6]
              },
            unique: true
          }, 
        age: 
          { type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
              min: 18,
              max: 116
              },
          },
        location: 
          { type: DataTypes.STRING,
            allowNull: false,
            validate: {
              len: [6]
              },
          },
        profilepic: 
          { type: DataTypes.STRING,
            allowNull: true
          }         
      });
 
    return user;
  };


