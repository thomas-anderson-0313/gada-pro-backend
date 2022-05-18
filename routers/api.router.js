const router = require('express-promise-router')();
const AuthMiddleWare = require("../middlewares/auth.middleware");
const AuthController = require("../controllers/auth.controller");
const PoolController = require('../controllers/pool.controller');
const PoolRouter = require("./router/pool.router");

let initAPIs = (app) => {
    router.post("/api/v1/login", AuthController.login);
    router.post("/api/v1/register", AuthController.register);
    router.route('/api/v1/pool/list-pool').get(PoolController.getListPoolNotToken);
    router.route('/api/v1/pool/:id').get(PoolController.getPool);
    // router.post("/refresh-token", AuthController.refreshToken);
    router.use(AuthMiddleWare.isAuth);
    app.use("/api/v1/pool", PoolRouter);

    return app.use('/', router);
}
module.exports = initAPIs;