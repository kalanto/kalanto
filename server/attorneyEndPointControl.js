var Attorney = require('./schema/esq.js');
module.exports = {
// CUSOMTER END POINTS//
postAttorney: function(req, res){
   console.log(req.body);
   var attorney = new Attorney(req.body);
   attorney.save(function(err, status){
      console.log(err);
      return err ? res.status(500).send(err) : res.send(status);
   });
},
getAttorney: function(req, res, next){
   var query = req.query;
   Attorney.find(query, function(err, response){
      if(err){
         res.status(500).json(err);
      }
      else{
         res.json(response);
      }
   });
},
getOneAttorney: function(req,res,next){
   Attorney.findOne(req.params.id, function(err, response){
      if(err){
         res.status(500).send(err);
      }
      else{
         res.send(response);
      }
   });
},
updateAttorney: function(req, res, next){
   Attorney.findOneAndUpdate(req.params.id, function(err, response){
      if(err){
         res.status(500).send(err);
      }
      else{
         res.send(response.data);
      }
   });
},
deleteAttorney: function(req,res,next){
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
