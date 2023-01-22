//all middleware are the function that execute all request, repond cycle
const errorHandler = (err, req, res, next) => {
  // if res.statusCode is there then use that, if not then use 500
  const statusCode = res.statusCode ? res.statusCode : 500;

  res.status(statusCode);
  //this will pass in a message
  res.json({
    message: err.message,
    //we can also get stack trace which gives us some   additional information, but
    //we only want that if we are in development mode. (if in production use null else show err.stack)
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
};

module.exports = {
  errorHandler,
};
