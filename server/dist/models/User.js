"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.User = void 0;

const {
  sequelize,
  Sequelize
} = require("../sequelize");

class User extends Sequelize.Model {}

exports.User = User;
User.init({
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  username: {
    type: Sequelize.STRING,
    unique: true
  },
  displayName: {
    type: Sequelize.STRING
  },
  password: {
    type: Sequelize.STRING
  },
  avatarURL: {
    type: Sequelize.STRING,
    allowNull: true
  },
  // 0 = Author, 1 = Admin
  level: {
    type: Sequelize.INTEGER,
    default: 0
  }
}, {
  sequelize: sequelize(),
  modelName: "user"
});
User.sync();