export function wrapAsync(middleware) {
  return async (req, res, next) => {
    try {
      await middleware(req, res, next);
    } catch (error) {
      // eslint-disable-next-line callback-return
      next(error);
    }
  };
}
