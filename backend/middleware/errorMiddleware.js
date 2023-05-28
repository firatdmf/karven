//all middleware are the function that execute all request, respond cycle
//now the node has its default error handler. So if you want to create a custom one like below, you need to address err here as well. (bc in its original it has it)
const errorHandler = (err, req, res, next) => {
  // if res.statusCode is there then use that, if not then use 500 (maybe a statusCode from default error handler is passed so we do like below)
  const statusCode = res.statusCode ? res.statusCode : 500;

  //send the error to the client with status code along with err.stack (lists lines where in the code error happened) if we are in development mode.
  res.status(statusCode).json({
    message: err.message,
    //we can also get stack trace which gives us some additional information, but
    //we only want that if we are in development mode. (if in production use null else show err.stack) -> this is to protect privacy of your code when in production
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
};

module.exports = {errorHandler}
