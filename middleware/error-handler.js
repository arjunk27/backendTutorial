const errorHandlerMiddleware = (error, req, res, next) => {
  return res.status(500);
};
