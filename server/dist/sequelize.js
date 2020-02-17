"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Sequelize", {
  enumerable: true,
  get: function () {
    return _sequelize.default;
  }
});
exports.sequelize = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _config = _interopRequireDefault(require("./config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let instance = null;

const sequelize = () => {
  if (instance === null) {
    try {
      instance = new _sequelize.default({
        dialect: "mariadb",
        ..._config.default.mariadb
      });
      console.log("Database connection has been established successfully.");
    } catch (error) {
      console.error("Unable to connect to the database:", error); // eslint-disable-next-line unicorn/no-process-exit

      process.exit(1);
    }
  }

  return instance;
};

exports.sequelize = sequelize;