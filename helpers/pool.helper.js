const Pool = require('../models/Pool.model')

const listPoolFilterType = async (value, pageOptions) => {
  const docAllLength = await Pool
    .find(value)
    .count()
    .exec();
  const doc = await Pool
    .find(value)
    .skip(pageOptions.page * pageOptions.limit)
    .limit(pageOptions.limit)
    .exec();
  const data = {
    pools: doc || [],
    page: pageOptions.page,
    limit: pageOptions.limit,
    total: docAllLength,
  };
  return data;
}

module.exports = {
  listPoolFilterType,
}