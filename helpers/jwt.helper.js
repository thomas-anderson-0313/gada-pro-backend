const jwt = require("jsonwebtoken");
const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET;

let generateToken = (account, secretSignature, tokenLife) => {
    return new Promise((resolve, reject) => {
        // Định nghĩa những thông tin của user mà bạn muốn lưu vào token ở đây
        const accountData = {
            _id: account._id,
            accountID: account.accountID,
        }
        // Thực hiện ký và tạo token
        jwt.sign(
            { data: accountData },
            secretSignature,
            {
                algorithm: "HS256",
                expiresIn: tokenLife,
            },
            (error, token) => {
                if (error) {
                    return reject(error);
                }
                resolve(token);
            });
    });
}

let verifyToken = (token, secretKey) => {
    return new Promise((resolve, reject) => {
        jwt.verify(token, secretKey, (error, decoded) => {
            if (error) {
                return reject(error);
            }
            resolve(decoded);
        });
    });
}

let decodeToken = async (req) => {
    let tokenFromClient = req.body.token || req.query.token || req.headers["x-access-token"];
    if(req.header('authorization')) {
        tokenFromClient = req.header('authorization').split(" ")[1]
    }
    const decoded = await verifyToken(tokenFromClient, accessTokenSecret);

    return decoded.data._id
}

module.exports = {
    generateToken: generateToken,
    verifyToken: verifyToken,
    decodeToken: decodeToken,
};