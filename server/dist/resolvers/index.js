"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _path = _interopRequireDefault(require("path"));

var _mergeGraphqlSchemas = require("merge-graphql-schemas");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const resolvers = (0, _mergeGraphqlSchemas.fileLoader)(_path.default.resolve(__dirname, "./*.resolvers.js"));
var _default = resolvers;
exports.default = _default;