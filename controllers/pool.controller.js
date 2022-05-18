const jwtHelper = require("../helpers/jwt.helper");
const Account = require("../models/Account.model");
const Pool = require("../models/Pool.model");
const poolHelper = require("../helpers/pool.helper");
const moment = require("moment");

module.exports.getListPool = async (req, res) => {
  try {
    const { page, limit } = req.query;
    const _id = await jwtHelper.decodeToken(req);
    const findAccount = await Account.findOne({ _id: _id });

    if (!findAccount)
      return res.status(500).json({ status: 0, data: "Auth failed!" });

    const pageOptions = {
      page: parseInt(page, 10) || 0,
      limit: parseInt(limit, 10) || 10,
      total: 0,
    };
    const docAllLength = await Pool.find().count().exec();

    const doc = await Pool.find()
      .skip(pageOptions.page * pageOptions.limit)
      .limit(pageOptions.limit)
      .exec();
    const data = {
      pools: doc,
      page: pageOptions.page,
      limit: pageOptions.limit,
      total: docAllLength,
    };
    return res.status(200).json({ status: 1, data });
  } catch (error) {
    return res.status(500).json({ status: 0, data: error });
  }
};

module.exports.getListPoolNotToken = async (req, res) => {
  try {
    const { page, limit, type } = req.query;
    const nowTime = moment();
    const timeOpen = moment().add(1, "d");

    const pageOptions = {
      page: parseInt(page, 10) || 0,
      limit: parseInt(limit, 10) || 10,
    };
    let data = {};
    switch (type) {
      case "closed":
        {
          const value = { endTime: { $lte: nowTime } };
          data = await poolHelper.listPoolFilterType(value, pageOptions);
        }
        break;
      case "open":
        {
          const value = {
            $and: [
              { endTime: { $gte: nowTime } },
              { startTime: { $lte: timeOpen } },
            ],
          };
          data = await poolHelper.listPoolFilterType(value, pageOptions);
        }
        break;
      case "upcoming":
        {
          const value = { startTime: { $gte: timeOpen } };
          data = await poolHelper.listPoolFilterType(value, pageOptions);
        }
        break;
      default:
        {
          const value = {
            $and: [
              { endTime: { $gte: nowTime } },
              { startTime: { $lte: timeOpen } },
            ],
          };
          data = await poolHelper.listPoolFilterType(value, pageOptions);
        }
        break;
    }
    return res.status(200).json({ status: 1, data });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ status: 0, data: error });
  }
};

module.exports.createPool = async (req, res) => {
  try {
    const _id = await jwtHelper.decodeToken(req);
    const findAccount = await Account.findOne({ _id: _id });

    if (!findAccount)
      return res.status(500).json({ status: 0, data: "Auth failed!" });

    const newPool = new Pool({ ...req.body });
    await newPool.save();

    return res.status(200).json({ status: 1, data: newPool });
  } catch (error) {
    return res.status(500).json({ status: 0, data: error });
  }
};

module.exports.updatePool = async (req, res) => {
  try {
    const { id } = req.body;
    const newPool = { ...req.body };
    const _id = await jwtHelper.decodeToken(req);
    const findAccount = await Account.findOne({ _id: _id });

    if (!findAccount)
      return res.status(500).json({ status: 0, data: "Auth failed!" });

    const updatePool = await Pool.findOneAndUpdate({ _id: id }, newPool, {
      new: true,
    });
    if (!updatePool)
      return res.status(500).json({ status: 0, data: "Not found pool!" });

    return res.status(200).json({ status: 1, data: updatePool });
  } catch (error) {
    return res.status(500).json({ status: 0, data: error });
  }
};

module.exports.updatePoolUser = async (req, res) => {
  try {
    const { id } = req.body;
    const newPool = { ...req.body };
    const updatePool = await Pool.findOneAndUpdate({ _id: id }, newPool, {
      new: true,
    });
    if (!updatePool)
      return res.status(500).json({ status: 0, data: "Not found pool!" });
    return res.status(200).json({ status: 1, data: updatePool });
  } catch (error) {
    return res.status(500).json({ status: 0, data: error });
  }
};

module.exports.deletePool = async (req, res) => {
  try {
    const { id } = req.body;
    const _id = await jwtHelper.decodeToken(req);
    const findAccount = await Account.findOne({ _id: _id });

    if (!findAccount)
      return res.status(500).json({ status: 0, data: "Auth failed!" });

    const deletePool = await Pool.findOneAndDelete({ _id: id });
    if (!deletePool)
      return res.status(500).json({ status: 0, data: "Not found pool!" });

    return res.status(200).json({ status: 1, data: true });
  } catch (error) {
    return res.status(500).json({ status: 0, data: error });
  }
};

module.exports.getPool = async (req, res) => {
  try {
    const { id } = req.params;
    const nowTime = moment();
    const timeOpen = moment().add(1, "d");

    const findPoolOpen = await Pool.find({
      $and: [{ endTime: { $gte: nowTime } }, { startTime: { $lte: timeOpen } }],
    }).findOne({ _id: id });
    const findPoolUpComing = await Pool.find({
      startTime: { $gte: timeOpen },
    }).findOne({ _id: id });
    const findPoolClosed = await Pool.find({
      endTime: { $lte: nowTime },
    }).findOne({ _id: id });
    if (!findPoolOpen && !findPoolClosed && !findPoolUpComing)
      return res.status(500).json({ status: 0, data: "Not found pool!" });
    const findPool = findPoolUpComing
      ? { ...findPoolUpComing._doc, status: "upcoming" }
      : findPoolClosed
      ? { ...findPoolClosed._doc, status: "closed" }
      : findPoolOpen
      ? { ...findPoolOpen._doc, status: "open" }
      : null;

    return res.status(200).json({ status: 1, data: findPool });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ status: 0, data: error });
  }
};
