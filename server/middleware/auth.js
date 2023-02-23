export const isAuthenticated = function (req, res, next) {
  if (
    !req.session.username ||
    req.session.username === undefined ||
    !req.session.userId ||
    req.session.userId === undefined
  ) {
    return res.status(401).json({ error: "User is not authenticated." });
  }
  next();
};

export const isThisMe = function (req, res, next) {
  if (!req.session.username || req.body.username !== req.session.username) {
    return res.status(403).json({ error: "User is not authorized." });
  }
  next();
};

export const isThisGalleryMine = async function (req, res, next) {
  if (
    !req.session.galleryId ||
    JSON.stringify(req.session.galleryId) !== req.params.id
  ) {
    return res
      .status(403)
      .json({ error: "User is not authorized to manage other's galleries." });
  }
  next();
};
