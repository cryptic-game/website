import { Router } from "express";
import APIRouter from "./api";
import UploadsRouter from "./uploads";

const R = new Router();

R.use("/api", APIRouter);

R.use("/uploads", UploadsRouter);

export default R;
