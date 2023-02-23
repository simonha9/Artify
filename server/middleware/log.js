export const logRequest = function (req, res, next) {
  console.log("HTTP request", req.method, req.url, req.body);
  next();
};
