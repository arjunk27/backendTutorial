/*
Middleware :- To put controller in trycatch block
            trycatch block prevent server from crashing 
            server crash during failure in mongoose api call
            mongoose api call fail when validations fail

*/

const controllerWrapper = (cb) => {
  return async (req, res, next) => {
    try {
      await cb(req, res, next);
    } catch (error) {
      //   next(error);
      res.status(500).json({ msg: error });
    }
  };
};

module.exports = controllerWrapper;
