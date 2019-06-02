// The 'user' table contains information specific to a user.
// Each record represents a single user.   We don't want duplicate records for the
// same user, so users are tied to 'email' addresses (which are therefore unique as
// only one user can have the email address.   Likewise screen names are also 
// tied to specific users - two users cannot have the same screen name and therefore
// they are unique as well.

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
            // Screen name must be unique in the database.  If you do not understand why,
            // close this file and back away from the data model.
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
       
        email: 
          { type: DataTypes.STRING,
            allowNull: false,
            validate: {
              len: [6]
              },
            // eMail must be unique in the database.  If you do not understand why,
            // close this file and back away from the data model.
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
            allowNull: false,        // People should not register with no location.
          },
        profilepic: 
          { type: DataTypes.STRING,
            allowNull: true          // Profile pics are added a bit differently.
          },
          bio: 
          { type: DataTypes.STRING,
            allowNull: false          // A user should say at least *a little* about themselves.
          },
        createdAt:
          {
            type: DataTypes.DATE,
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
          },
        updatedAt:
          {
            type: DataTypes.DATE,
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP')
          }
      });
 
  return user;
};
