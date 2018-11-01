const errorHandler = (err, req, res, next) => {
  const message = err.message || "Unknown error found from server";
  console.log(message)
  return res.status(err.code || 500).json({
    message: message
  });
}
module.exports = errorHandler;