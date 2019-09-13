const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let logSchema = new Schema({
  time:String,
  type:String,
  user_id:Number,
  revenue:Number
});
module.exports = mongoose.model('log', logSchema);
