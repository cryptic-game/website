import { Router } from "express";
import { aliasRoute } from "../../utils/aliasRoute";

const R = new Router();

R.param("idOrSlug", () => {

});

R.get("/");

R.post("/");

R.get("/:idOrSlug");

R.put("/:idOrSlug");

R.get("/:idOrSlug/content");

R.put("/:idOrSlug/content");

aliasRoute(R, "/:idOrSlug/image", "/api/uploads/::", req => req.post.imageID);

R.post("/:idOrSlug/content");

export default R;
