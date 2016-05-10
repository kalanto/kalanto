var mongoose = require('mongoose')
var Customer = require('./schema/customer.js')

module.exports = {
   owesCustomers: function(req, res, next){
      console.log(req.params);
      Customer.find({payDate: parseInt(req.params.day)}).populate('_customer').exec( function(err, response){
         if(err){
            res.status(500).send(err)
         }
         else{
            res.send(response)
         }
      })
   }
};
