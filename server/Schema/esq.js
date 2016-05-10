var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var customer = require('./customer.js');

var attorneySchema = new Schema({

   firstname: {type: String, required: true}
,   lastname: {type: String, required: true}
,   address: {type: String, required:true}
,   city: {type: String, required: true}
,   state: {type: String, required: true,min:2,max:2}
,   zipCode: {type: Number, required: true,min:5,max:5}
,   phone:{
      areaCode:{type:Number,required:true,min:3,max:3}
   ,   ANI:{type:Number,required:true,min:7,max:8}
   }
,   email: {type:String, required: true},
   clients:{type:Schema.ObjectId, ref:'customer'}
});


module.exports = mongoose.model('attorney', attorneySchema);
