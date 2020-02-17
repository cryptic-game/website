"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BlogPost = void 0;

const {
  sequelize,
  Sequelize
} = require("../sequelize");

class BlogPost extends Sequelize.Model {}

exports.BlogPost = BlogPost;
BlogPost.init({
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  slug: {
    type: Sequelize.STRING,
    unique: true
  },
  title: {
    type: Sequelize.STRING
  },
  content: {
    type: Sequelize.STRING,
    defaultValue: "{}"
  },
  imageURL: {
    type: Sequelize.STRING,
    allowNull: true
  },
  excerpt: {
    type: Sequelize.STRING
  },
  publishedAt: {
    type: Sequelize.DATE,
    allowNull: true
  }
}, {
  sequelize: sequelize(),
  modelName: "blogpost"
});
BlogPost.sync();