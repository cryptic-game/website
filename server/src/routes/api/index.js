import { Router } from "express";
import PostsRouter from "./posts";
import UsersRouter from "./users";
import UploadsRouter from "./uploads";

const R = new Router();

R.use("/posts", PostsRouter);

R.use("/users", UsersRouter);

R.use("/uploads", UploadsRouter);

R.use((req, res) => {
  res.status(404).send();
});

export default R;
