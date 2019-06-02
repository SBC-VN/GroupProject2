//  The match table contains the 'match' relationship between users.
//  Each user can have many matches, and can be matched to many other users - so
//  matches are fundimentally a many to many relationship.
//
//  This table 'normalizes' those matches into a one-to-one record: each record is one user  
//  matched to one other user.    No duplicates means that we don't have to pull a user's
//  matches then filter out duplicates in the code...

module.exports = function(sequelize, DataTypes) {
    var match = sequelize.define("match", {
       // A match is 'owned' by one user, but has an association to another.
        deltascore:  
        { 
          type: DataTypes.INTEGER,
          allowNull: false
        },
        user1:
        {
          type: DataTypes.INTEGER,
          allowNull:false
        },
        user2:
        {
          type: DataTypes.INTEGER,
          allowNull:false
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
    },

    {
      indexes: [
          {
              // If you don't understand this unique index, please close the file and back away
              // from the data model.  Then go and review 'composite keys', many-to-many relationships
              // and 'bridging' tables.  Continue to follow this instruction until you understand.
              unique: true,
              fields: ['user1', 'user2']
          }
      ]
    });
  
    //
    // Joseph, do not delete the associations.   You will break the include in the
    //  matches API and therefore the match page.
    //
    //  The associations allow us to 'pull' (include) the match 'to' user's data from the user table when we 
    //    select the match.
    match.associate = function(models) {
      match.belongsTo(models.user, {
        as: 'userInfo1',
        foreignKey: {
          name: 'user1',
          allowNull: false
          }
      });
      match.belongsTo(models.user, {
        as: 'userInfo2',
        foreignKey: {
          name: 'user2',
          allowNull: false
          }
      });
    }

    return match;
  };