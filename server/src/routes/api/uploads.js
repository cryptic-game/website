import { Router } from "express";
import multer from "multer";
import nanoid from "nanoid/async";
import { celebrate, Joi, Segments } from "celebrate";
import { aliasRoute } from "../../utils/aliasRoute";
import { Upload } from "../../models/Upload";
import config from "../../config";
import { UnknownUploadError } from "../../errors/UnknownUploadError";
import { wrapAsync } from "@/server/src/utils/wrapAsync";

const R = new Router();
const uploads = multer({
  storage: multer.diskStorage({
    destination: config.uploadsPath,
    filename: (req, file, callback) => {
      nanoid(14)
        .then(id => {
          callback(null, id);
        })
        .catch(error => {
          callback(error);
        });
    }
  })
});

R.post("/", uploads.single("file"), (req, res) => {
  const id = req.file.filename;

  Upload.create({ id, altText: req.body.altText || null, uploaderID: req.user.id });

  res.status(201).send({
    data: {
      id
    }
  });
});

R.get("/:id", async (req, res) => {
  const { id } = req.params;
  const upload = await Upload.findByPk(id);

  if (upload === null) {
    throw new UnknownUploadError(id);
  }

  res.send(upload);
});

aliasRoute(R, "/:id/content", "/uploads/::", req => req.params.id);

R.put(
  "/:id",
  celebrate({
    [Segments.BODY]: Joi.object({
      altText: [Joi.string().required().max(255), Joi.any().allow(null)]
    })
  }),
  wrapAsync(async (req, res) => {
    const { id } = req.params;
    const upload = await Upload.findByPk(id);

    if (upload === null) {
      throw new UnknownUploadError(id);
    }

    upload.altText = req.body.altText;
    await upload.save();

    res.status(204).send();
  })
);

export default R;
