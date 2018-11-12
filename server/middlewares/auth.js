exports.isAuthenticated = function(req, res, next) {
  console.log(req.header);
  return next();
}