module.exports = function(sequelize, DataTypes) {
    var UserInfo = sequelize.define("UserInfo", {
        // User info is associated with a specific user.   Really is a KVP
        key: 
          { type: DataTypes.STRING,
            allowNull: false},
        value:  
          { type: DataTypes.STRING,
            allowNull: false},
        level:  
          { type: DataTypes.INTEGER,
            allowNull: false}        
    });
  
    UserInfo.associate = function(models) {
      // We're saying that a Match should belong to an User
      // A Match can't be created without an User due to the foreign key constraint
      UserInfo.belongsTo(models.user, {
        foreignKey: {
          allowNull: false
        }
      });
    };

    return UserInfo;
  };