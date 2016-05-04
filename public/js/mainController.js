angular.module('kalanto').controller('kalantoController', function($scope, kalantoService){
   $scope.customer={
      firstname: "",
      lastname: "",
      address:"",
      city:"",
      state:"",
      zipCode:"",
      phone:{areaCode:"",
      ANI:""}
   };
   // $scope.customer.first="";
   // $scope.customer.last="";
   // $scope.customer.address="";
   // $scope.customer.state="";
   // $scope.customer.zip="";
   // $scope.customer.phone.arecode="";
   // $scope.customer.phone.ANI="";
// gets all customers in database
   $scope.getCustomers=function(customer){
      kalantoService.getCustomers(customer);
   };
// gets customer by ID
$scope.getOneCustomer = function(customer){
   kalantoService.getOneCustomer(customer);
};
//adds a customer to the database
   $scope.addCustomer = function(customer){
      kalantoService.addCustomer(customer);
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
