"use strict";

var _path = _interopRequireDefault(require("path"));

var _apolloServerExpress = require("apollo-server-express");

var _nuxt = require("nuxt");

var _express = _interopRequireDefault(require("express"));

var _typeDefs = _interopRequireDefault(require("./typeDefs"));

var _resolvers = _interopRequireDefault(require("./resolvers"));

var _config = _interopRequireDefault(require("./config"));

var _sequelize = require("./sequelize");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const expressApp = (0, _express.default)();

async function startNuxt() {
  // Should not be compiled by Babel
  const nuxtConfig = require(_path.default.resolve(__dirname, "../../nuxt.config.js"));

  nuxtConfig.mode = _config.default.isDevelopment ? "spa" : "universal";
  nuxtConfig.dev = _config.default.isDevelopment;
  const nuxt = new _nuxt.Nuxt(nuxtConfig);
  await nuxt.ready(); // Build only in dev mode

  if (nuxtConfig.dev) {
    const builder = new _nuxt.Builder(nuxt);
    await builder.build();
  }

  expressApp.use(nuxt.render);
}

function startGraphQL() {
  const server = new _apolloServerExpress.ApolloServer({
    typeDefs: _typeDefs.default,
    resolvers: _resolvers.default
  });
  server.applyMiddleware({
    app: expressApp
  });

  if (_config.default.isDevelopment) {
    console.log(`GraphQL playground on 127.0.0.1:${_config.default.port}/graphql`);
  }
}

async function start() {
  (0, _sequelize.sequelize)();
  await startGraphQL();
  await startNuxt();
  expressApp.listen(_config.default.port, _config.default.host);
  console.log(`Server listening on ${_config.default.host}:${_config.default.port}`);
}

start();