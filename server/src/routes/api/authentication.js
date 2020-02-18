import { Router } from "express";
import { celebrate, Segments, Joi } from "celebrate";
import argon2 from "argon2";
import { wrapAsync } from "@/server/src/utils/wrapAsync";
import { User } from "@/server/src/models/User";
import { UnknownUsernameError } from "@/server/src/errors/UnknownUsernameError";
import { InvalidPasswordError } from "@/server/src/errors/InvalidPasswordError";

const R = new Router();

R.post(
  "/login",
  celebrate({
    [Segments.BODY]: Joi.object({
      username: Joi.string().required(),
      password: Joi.string().required()
    })
  }),
  wrapAsync(async (req, res) => {
    const { username } = req.body;
    const user = await User.findOne({ where: { username } });

    if (user === null) {
      throw new UnknownUsernameError(username);
    }

    if (await argon2.verify(user.password, req.body.password)) {
      req.signedCookies.userID = user.id;
      res.status(204).send();
    } else {
      throw new InvalidPasswordError();
    }
  })
);

export default R;
