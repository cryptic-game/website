import { Router } from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import { apiErrorHandler } from "../../errors/apiErrorHandler";
import config from "../../config";
import PostsRouter from "./posts";
import UsersRouter from "./users";
import UploadsRouter from "./uploads";

const R = new Router();

R.use(bodyParser.json(config.secret));
R.use(cookieParser(config));

R.use("/posts", PostsRouter);

R.use("/users", UsersRouter);

R.use("/uploads", UploadsRouter);

R.use(apiErrorHandler());

R.use((req, res) => {
  res.status(404).send();
});

export default R;
