const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const accountSchema = new Schema({
    accountID: {
        type: String,
    },
    password: {
        type: String,
    },
    createdDate: {
        type: Date,
        default: new Date(),
    },
    // pool: {
    //     type: Schema.Types.ObjectId,
    //     ref: "pool",
    // },
});

const Account = mongoose.model('account', accountSchema);

module.exports = Account