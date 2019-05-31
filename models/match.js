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
    },

    {
      indexes: [
          {
              unique: true,
              fields: ['user1', 'user2']
          }
      ]
    });
  
    //
    // Joseph, do not delete the associations.   You will break the include in the
    //  matches API and therefore the match page.
    //
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