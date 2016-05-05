angular.module('kalanto', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider, $httpProvider){
   $httpProvider.interceptors.push('httpRequestInterceptor');

   //routing
   $stateProvider
      .state('home', {
         url: '/',
         templateUrl: '../views/home.html',
         controller: 'insert controller here'
      })
      .state('add', {
         url: '/customers/add',
         templateUrl: '../views/add.html',
         controller: 'insert file here'
      })
      .state('edit',{
         url: '/customers/put/:id',
         templateUrl: '../views/edit.html',
         controller: 'insert file here'
      })
      .state('delete',{
            url: '/customers/delete/:id',
            templateUrl: '../views/delete.html',
            controller: 'insert file here'
      })
      .state('getCustomers',{
         url: '/customers/get/',
         templateUrl: '../views/get.html',
         controller: 'insert file here'

      })
      .state('getOneCustomer', {
         url: '/customers/get/:id',
         templateUrl: '../views/getOne.html',
         controller: 'insert file here'
      });
});
