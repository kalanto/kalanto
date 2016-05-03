var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var customerSchema = new Schema({
   firstname: {type: String, required: true},
   lastname: {type: String, required: true},
   address: {type: String, required:true},
   city: {type: String, required: true},
   state: {type: String, required: true},
   zipCode: {type: Number, required: true},
   phone:{
      areaCode:{type:Number,required:true},
      ANI:{type:Number,required:true}
   }
});
module.exports = mongoose.model('customer', customerSchema);
