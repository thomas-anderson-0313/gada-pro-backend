const bcrypt = require('bcryptjs');
const jwtHelper = require("../helpers/jwt.helper");
const Account = require('../models/Account.model');

// let tokenList = {};
// const accessTokenLife = process.env.ACCESS_TOKEN_LIFE;
const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET;
const refreshTokenLife = process.env.REFRESH_TOKEN_LIFE;
// const refreshTokenSecret = process.env.REFRESH_TOKEN_SECRET;

let register = async (req, res) => {
  const { accountID, password } = req.body;
  const passwordEncode = bcrypt.hashSync(password, 10);
  try {
    // const userFakeData = req.body

    // const refreshToken = await jwtHelper.generateToken(userFakeData, refreshTokenSecret, refreshTokenLife);
    const findUser = await Account.findOne({ userID: req.body.accountID })
    if (!findUser) {
      const newAccount = new Account({ accountID, password: passwordEncode })
      await newAccount.save()
      const accessToken = await jwtHelper.generateToken(newAccount, accessTokenSecret, refreshTokenLife);
      return res.status(200).json({ status: 1, data: { accessToken, accountID } });
    } else {
      return res.status(500).json({ status: 0, data: "Account name already exists" });
    }
    // tokenList[refreshToken] = { accessToken, refreshToken };
  } catch (error) {
    return res.status(500).json({ status: 0, data: error });
  }
}

let login = async (req, res) => {
  const { accountID, password } = req.body
  try {
    const findAccountName = await Account.findOne({ accountID })
    if (!findAccountName) {
      return res.status(500).json({ status: 0, data: "User name, email or password is incorrect" });
    }
    const passwordDecode = bcrypt.compareSync(password, findAccountName.password);

    if (passwordDecode) {
      const accessToken = await jwtHelper.generateToken(findAccountName, accessTokenSecret, refreshTokenLife);
      return res.status(200).json({ status: 1, data: { accessToken, accountID: findAccountName.accountID } });
    } else {
      return res.status(500).json({ status: 0, data: "User name, email or password is incorrect" });
    }
  } catch (error) {
    return res.status(500).json({ status: 0, data: error });
  }
}

// let refreshToken = async (req, res) => {
//   const refreshTokenFromClient = req.body.refreshToken;

//   if (refreshTokenFromClient && (tokenList[refreshTokenFromClient])) {
//     try {
//       const decoded = await jwtHelper.verifyToken(refreshTokenFromClient, refreshTokenSecret);
//       const userFakeData = decoded.data;
//       const accessToken = await jwtHelper.generateToken(userFakeData, accessTokenSecret, accessTokenLife);
//       return res.status(200).json({ accessToken });
//     } catch (error) {
//       res.status(403).json({
//         message: 'Invalid refresh token.',
//       });
//     }
//   } else {
//     return res.status(403).send({
//       message: 'No token provided.',
//     });
//   }
// };
module.exports = {
  login: login,
  register: register,
  // refreshToken: refreshToken,
}