module.exports = function(sequelize, DataTypes) {
    var Match = sequelize.define("match", {
       // A match is 'owned' by one user, but has an association to another.
        deltascore:  
        { type: DataTypes.INTEGER,
          allowNull: false},
          user1:
          {
          type: DataTypes.STRING,
          allowNull:false
          },
          user2:
          {type: DataTypes.STRING,
            allowNull:false},
    },

    {
      indexes: [
          {
              unique: true,
              fields: ['user1', 'user2']
          }
      ]
    });
  
    Match.associate = function(models) {
      Match.belongsTo(models.user, {
        as: 'userInfo1',
        foreignKey: {
          name: 'user1',
          allowNull: false
<<<<<<< HEAD
         }
=======
          }
>>>>>>> b123e249bc3fe645467d0ab2b81b076cf2e78463
      });
      Match.belongsTo(models.user, {
        as: 'userInfo2',
        foreignKey: {
          name: 'user2',
          allowNull: false
<<<<<<< HEAD
         }
=======
          }
>>>>>>> b123e249bc3fe645467d0ab2b81b076cf2e78463
      });
    }

    return Match;
  };