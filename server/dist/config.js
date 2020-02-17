"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _dotenv = _interopRequireDefault(require("dotenv"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dotenv.default.config();

var _default = {
  mariadb: {
    host: process.env.MARIADB_HOST || "127.0.0.1",
    port: process.env.MARIADB_PORT || 3306,
    username: process.env.MARIADB_USERNAME || "crypticwebsite",
    password: process.env.MARIADB_PASSWORD,
    database: process.env.MARIADB_DATABASE || "website"
  },
  port: process.env.PORT || 3000,
  host: process.env.HOST || "0.0.0.0",
  isDevelopment: process.env.NODE_ENV === "development"
};
exports.default = _default;