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
        sentimentScore: {
          type:DataTypes.INTEGER,
          allowNull: false,
          defaultValue: 0,
        },
        matches:{
          type:DataTypes.JSON,
        },
        
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
        locale: 
          { type: DataTypes.STRING,
            allowNull: true,
            // validate: {
            //   len: [6]
            //   },
          },
        profilepic: 
          { type: DataTypes.STRING,
            allowNull: true
          },
          createdAt:
        {
          type: DataTypes.DATE,
          allowNull:true},
        updatedAt:
      {
        type: DataTypes.DATE,
        allowNull:true
      }

      });
 
  return user;
};
