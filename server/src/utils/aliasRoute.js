export function aliasRoute (router, route, target, computePlaceholder) {
  const computedTarget = target.endsWith("/") ? target.slice(0, -1) : target;

  router.use(route, (req, res) => {
    if (computePlaceholder !== undefined) {
      computedTarget.replace("::", computePlaceholder(req, res));
    }

    console.log(computedTarget + req.path);
    res.redirect(307, computedTarget + req.path);
  });
}
