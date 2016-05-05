angular.module('kalanto').service('kalantoService', function($http){
   //addCustomer to database aka add a new client
      this.addCustomer = function(customer){
         return $http({
            method: 'POST',
            url: '/customers/add',
            data: {
               firstname: customer.firstname,
               lastname: customer.lastname,
               address: customer.address,
               city: customer.city,
               state: customer.state,
               zipCode: customer.zipCode,
               phone:{
                  areaCode: customer.phone.areaCode,
                  ANI: customer.phone.ANI
               }
            }
         });
      };
//get all customers
   this.getCustomers = function(customer){
      return $http({
         method: 'GET',
         url: '/customers/get'
      }).then(function(response){
         return response.data;
      });
   };
//get customer specific
   this.getOneCustomer = function(customer){
      return $http({
         method: 'GET',
         url:'/customers/get/'+customer.id
      }).then(function(response){
         return response.data;
      });
   };
//delete customer specific
   this.deleteCustomer = function(customer){
      return $http({
         method: 'DELETE',
         url: '/customers/delete/' + customer.id
      });
   };
//update customer specific
   this.updateCustomer = function(selected){
      return $http({
         method:'PUT',
         url: '/customers/put/'+selected.id,
         data: {
            customerFirstName: customer.first,
            customerLastName: customer.last,
            address: customer.address,
            city: customer.city,
            state: customer.state,
            zipCode: customer.zip,
            phone:{
               areaCode: customer.areacode,
               ANI:customer.phone
            }
         }
      });
   };
});
