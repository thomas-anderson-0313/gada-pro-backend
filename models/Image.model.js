var mongoose = require('mongoose');

const Schema = mongoose.Schema;
  
var imageSchema = new Schema({
    name: String,
    desc: String,
    poolId: String,
    img:
    {
        data: Buffer,
        contentType: String
    }
});
  
//Image is a model which has a schema imageSchema
  
const Image = mongoose.model('image', imageSchema);
