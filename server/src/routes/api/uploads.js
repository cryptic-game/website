import { Router } from "express";
import { aliasRoute } from "../../utils/aliasRoute";

const R = new Router();

R.post("/");

R.get("/:id");

aliasRoute(R, "/:id/content", "/uploads/::", req => req.params.id);

R.put("/:id");

export default R;
