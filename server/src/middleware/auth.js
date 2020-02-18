import { wrapAsync } from "@/server/src/utils/wrapAsync";
import { User, USER_LEVEL_ORDER } from "@/server/src/models/User";
import { NotAuthenticatedError } from "@/server/src/errors/NotAuthenticatedError";
import { InsufficientPermissionLevelError } from "@/server/src/errors/InsufficientPermissionLevelError";

export function auth(requiredLevel = null) {
  return wrapAsync(async (req, res, next) => {
    const id = req.signedCookies.userID;
    const user = await User.findByPk(id);
    req.user = user;

    if (user === null) {
      if (requiredLevel === null) {
        next();
        return;
      }

      throw new NotAuthenticatedError();
    }

    if (USER_LEVEL_ORDER.indexOf(user.level) >= USER_LEVEL_ORDER.indexOf(requiredLevel)) {
      next();
    } else {
      throw new InsufficientPermissionLevelError(requiredLevel, user.level);
    }
  });
}
