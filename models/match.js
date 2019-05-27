module.exports = function(sequelize, DataTypes) {
    var Match = sequelize.define("Match", {
      // A match is 'owned' by one user, but has an association to another.
        deltascore:  
        { type: DataTypes.INTEGER,
          allowNull: false}
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
         }
      });
      Match.belongsTo(models.user, {
        as: 'userInfo2',
        foreignKey: {
          name: 'user2',
          allowNull: false
         }
      });
    }

    return Match;
  };