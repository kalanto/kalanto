angular.module('kalanto').controller('kalantoController', function($scope, kalantoService){

$scope.getCustomers=function(){
   kalantoService.getCustomers().then(function(response){
      $scope.clients = response;
         console.log(response);
   });

};
   $scope.getCustomers();
// gets customer by ID
$scope.getOneCustomer = function(customer){
   kalantoService.getOneCustomer(customer);
};
//adds a customer to the database
   $scope.addCustomer = function(customer){
      kalantoService.addCustomer(customer);
      $scope.customer = {
         firstname: "",
         lastname: "",
         address:"",
         city:"",
         state:"",
         zipCode:"",
         phone: {
            areaCode:"",
            ANI:""
         },
         email:"",
         debt:"",
         payDate:""
      };
   };
//updates a customer in the database by ID/selection click event
$scope.updateCustomer = function(selected){
   kalantoService.updateCustomer(selected);
};
//delete a customer in database by ID
$scope.deleteCustomer = function(customer){
   kalantoService.deleteCustomer(customer);
};
});
