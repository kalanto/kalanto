var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var customerSchema = new Schema({
   customerName: {type: String, required: true},
   address: {type: String, required:true},
   state: {type: String, required: true},
   zipCode: {type: Number, required: true},
   phone:{type: Number, required: true}
});
module.exports = mongoose.model('customer', customerSchema);
