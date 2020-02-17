const { sequelize, Sequelize } = require("../sequelize");

export class BlogPost extends Sequelize.Model {}

BlogPost.init({
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },

  slug: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },

  title: {
    type: Sequelize.STRING,
    allowNull: false
  },

  content: {
    type: Sequelize.STRING,
    defaultValue: "{}",
    allowNull: false
  },

  excerpt: {
    type: Sequelize.STRING,
    allowNull: false
  },

  publishedAt: {
    type: Sequelize.DATE,
    allowNull: true
  }
}, { sequelize: sequelize(), modelName: "blogpost" });

BlogPost.associate = ({ Upload }) => {
  BlogPost.hasOne(Upload, {
    foreignKey: {
      name: "imageID",
      allowNull: true
    }
  });
};
