import path from "path";
import { Nuxt, Builder } from "nuxt";
import express from "express";
import fs from "fs-extra";
import config from "./config";
import { sequelize } from "./sequelize";
import Router from "./routes";

const expressApp = express();
expressApp.use(Router);

async function startNuxt () {
  // Should not be compiled by Babel
  const nuxtConfig = require(path.resolve(__dirname, "../../nuxt.config.js"));
  nuxtConfig.mode = config.isDevelopment ? "spa" : "universal";
  nuxtConfig.dev = config.isDevelopment;

  const nuxt = new Nuxt(nuxtConfig);
  await nuxt.ready();

  // Build only in dev mode
  if (nuxtConfig.dev) {
    const builder = new Builder(nuxt);
    await builder.build();
  }

  expressApp.use(nuxt.render);
}

async function start() {
  await fs.ensureDir(config.uploadsPath);

  sequelize();

  await startNuxt();

  expressApp.listen(config.port, config.host);
  console.log(`Server listening on ${config.host}:${config.port}`);
}

start();
