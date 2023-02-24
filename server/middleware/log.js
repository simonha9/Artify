export const logRequest = function (req, res, next) {
  if (!req.body.password) {
    console.log("HTTP request", req.method, req.url, req.body);
  } else {
    let tmp = JSON.parse(JSON.stringify(req.body));
    tmp.password = "********";
    console.log("HTTP request", req.method, req.url, tmp);
  }
  next();
};
