import express, { Router } from "express";
import config from "../config";

const R = new Router();

R.use("/", express.static(config.uploadsPath));

export default R;
