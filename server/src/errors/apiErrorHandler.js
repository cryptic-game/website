import { APIError } from "./APIError";
import { InternalError } from "./InternalError";

export function apiErrorHandler() {
  // eslint-disable-next-line no-unused-vars
  return (req, res, error, next) => {
    if (error instanceof APIError) {
      res.send({
        error
      });
    } else {
      res.send({
        error: new InternalError()
      });

      console.error(error);
    }
  };
}
