const { sequelize, Sequelize } = require("../sequelize");

// TODO: Delete uploads when they are not used anymore

export class Upload extends Sequelize.Model {}

Upload.init({
  id: {
    type: Sequelize.STRING(14),
    primaryKey: true
  },

  altText: {
    type: Sequelize.STRING(255),
    allowNull: true
  }
}, { sequelize: sequelize(), modelName: "upload" });

Upload.associate = ({ User }) => {
  Upload.belongsTo(User, {
    foreignKey: {
      name: "uploaderID",
      allowNull: true
    }
  });
};
