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
$scope.customerOwes = function(date){
   var dude = new Date()
      var day = dude.getDay()
         if(day > 0 && day <= 10){
            day = 5
            console.log(day);
            kalantoService.customerOwes(day).then(function(response){
               $scope.owes = response;
            }
         )}
         else if(day > 10 && day <= 19){
            day = 15
            console.log(day);
            kalantoService.customerOwes(day).then(function(response){
               $scope.owes = response;
            }
         )}
         else if(day > 19 && day <=28){
            day = 25
            console.log(day);
            kalantoService.customerOwes(day).then(function(response){
               $scope.owes = response;
            }
         )}
         else{
            day = 25
            console.log(day);
            kalantoService.customerOwes(day).then(function(response){
               $scope.owes = response;
            }
         )}
}
});
