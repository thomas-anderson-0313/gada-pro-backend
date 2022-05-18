const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const poolSchema = new Schema({
    projectName: {
        type: String,
    },
    tokenSymbol: {
      type: String,
    },
    supply: {
        type: Number,
    },
    tokenAddress: {
        type: String,
    },
    saleDate: {
        type: Date,
    },
    amount: {
      type: Number,
    },
    typeOfSale: {
      type: String,
    },
    forPrivateSale: {
      type: Number,
    },
    swapRate: {
      type: Number,
    },
    softCap: {
      type: String,
    },
    hardCap: {
      type: String,
    },
    minAllocation: {
      type: Number,
    },
    maxAllocation: {
      type: Number,
    },
    raise: {
      type: Number,
    },
    total: {
      type: Number,
    },
    telegram: {
      type: String,
    },
    telegramIcon: {
      type: String,
    },
    website: {
      type: String,
    },
    websiteIcon: {
      type: String,
    },
    twitter: {
      type: String,
    },
    twitterIcon: {
      type: String,
    },
    logo: {
      type: String,
    },
    pricepertoken: {
      type: Number,
    },
    projectLogo: {
      type: String,
    },
    projectTitle: {
      type: String,
    },
    projectSubtitle: {
      type: String,
    },
    projectImage: {
      type: String,
    },
    projectHighlights: {
      type: String,
    },
    productDescription: {
      type: String,
    },
    productImage: {
      type: String,
    },
    solution: {
      type: String,
    },
    businessModel: {
      type: String,
    },
    investors: {
      type: String,
    },
    team: {
      type: String,
    },
    tokenUtility: {
      type: String,
    },
    tokenomiceImage: {
      type: String,
    },
    solutionImage: {
      type: String,
    },
    businessModelImage: {
      type: String,
    },
    investorsImage: {
      type: String,
    },
    tokenUtilityImages: {
      type: String,
    },
    productImage: {
      type: String,
    },
    heroImg : {
      type: String,
    },
    market: {
      type: String,
    },
    linkWhiteList: {
      type: String,
    },
    tokenDistribution: {
      type: String,
    },
    initialMarketCap: {
      type: String,
    },
    initialTokenCirculation: {
      type: String,
    },
    teams: {
      type: String,
      length: 10000,
    },
    whiteList: [{
      type: String,
    }],
    startTime: {
      type: Date,
    },
    endTime: {
      type: Date,
    },
    soldAmount: {
      type: Number,
    },
    // owner: {
    //     type: Schema.Types.ObjectId,
    //     ref: "Account",
    // },
});

const Pool = mongoose.model('pool', poolSchema);

module.exports = Pool;
