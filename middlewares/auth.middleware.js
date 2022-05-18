const jwtHelper = require("../helpers/jwt.helper");
const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET;

let isAuth = async (req, res, next) => {
  let tokenFromClient = req.body.token || req.query.token || req.headers["x-access-token"];
  if (req.header('authorization')) {
    tokenFromClient = req.header('authorization').split(" ")[1]
  }
  const decoded = await jwtHelper.verifyToken(tokenFromClient, accessTokenSecret);
  if (tokenFromClient) {
    try {
      req.jwtDecoded = decoded;
      next();
    } catch (error) {
      return res.status(401).json({
        message: 'Unauthorized.',
      });
    }
  } else {
    return res.status(403).send({
      message: 'No token provided.',
    });
  }
}

module.exports = {
  isAuth: isAuth,
};