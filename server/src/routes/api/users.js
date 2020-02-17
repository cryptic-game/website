import { Router } from "express";

const R = new Router();

R.param("idOrUsername", () => {

});

R.get("/");

R.get("/:idOrUsername");

R.get("/:idOrUsername/avatar");

export default R;
