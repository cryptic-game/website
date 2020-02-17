const { sequelize, Sequelize } = require("../sequelize");

export class User extends Sequelize.Model {}

User.init({
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },

  username: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },

  displayName: {
    type: Sequelize.STRING,
    allowNull: false
  },

  password: {
    type: Sequelize.STRING,
    allowNull: false
  },

  // 0 = Author, 1 = Admin
  level: {
    type: Sequelize.INTEGER,
    default: 0,
    allowNull: false
  }
}, { sequelize: sequelize(), modelName: "user" });

User.associate = ({ Upload }) => {
  User.hasOne(Upload, {
    foreignKey: {
      name: "profileImageID",
      allowNull: true
    }
  });
};
