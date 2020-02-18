const { sequelize, Sequelize } = require("../sequelize");

export const USER_LEVEL = {
  DEFAULT: "default",
  AUTHOR: "author",
  ADMIN: "admin"
};

export const USER_LEVEL_ORDER = Object.freeze([USER_LEVEL.DEFAULT, USER_LEVEL.AUTHOR, USER_LEVEL.ADMIN]);

export class User extends Sequelize.Model {}

User.init({
  id: {
    type: Sequelize.INTEGER({ unsigned: true }),
    primaryKey: true,
    autoIncrement: true
  },

  username: {
    type: Sequelize.STRING({ length: 30 }),
    unique: true,
    allowNull: false
  },

  displayName: {
    type: Sequelize.STRING({ length: 40 }),
    allowNull: false
  },

  password: {
    type: Sequelize.STRING(100),
    allowNull: false
  },

  level: {
    type: Sequelize.ENUM,
    values: Object.values(USER_LEVEL),
    default: USER_LEVEL.DEFAULT,
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
