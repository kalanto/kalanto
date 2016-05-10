var Customer = require('./schema/customer.js');
module.exports = {
// CUSOMTER END POINTS//
postCustomer: function(req, res){
   console.log(req.body);
   var customer = new Customer(req.body);
   customer.save(function(err, status){
      console.log(err);
      return err ? res.status(500).send(err) : res.send(status);
   });
},
getCustomer: function(req, res, next){
   var query = req.query;
   Customer.find(query, function(err, response){
      if(err){
         res.status(500).json(err);
      }
      else{
         res.json(response);
      }
   });
},
getOneCustomer: function(req,res,next){
   Customer.findOne(req.params.id, function(err, response){
      if(err){
         res.status(500).send(err);
      }
      else{
         res.send(response);
      }
   });
},
updateCustomer: function(req, res, next){
   Customer.findOneAndUpdate(req.params.id, function(err, response){
      if(err){
         res.status(500).send(err);
      }
      else{
         res.send(response.data);
      }
   });
},
deleteCustomer: function(req,res,next){
   Customer.findOneAndRemove(req.query, function(err,response){
      if(err){
         return res.status(500).send(err);
      }
      else{
         return res.send(response);
      }
   });
}
};
