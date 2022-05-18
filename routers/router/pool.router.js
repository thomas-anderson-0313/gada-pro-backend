const router = require("express-promise-router")();

const PoolController = require("../../controllers/pool.controller");

router.route("/").get(PoolController.getListPool);

router.route("/").post(PoolController.createPool);

router.route("/update").post(PoolController.updatePool);

router.route("/update-user").post(PoolController.updatePoolUser);

router.route("/delete").post(PoolController.deletePool);

module.exports = router;
