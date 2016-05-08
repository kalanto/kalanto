angular.module('kalanto', ['ui.router'])

.config(function($stateProvider, $urlRouterProvider, $httpProvider){

//routing
   $stateProvider
      .state('home', {
         url: '/',
         templateUrl: 'routes/home.html',
      })
      // .state('add', {
      //    url: '/customers/add',
      //    templateUrl: '../routes/add.html',
      //    // controller: 'insert file here'
      // })
      // .state('edit',{
      //    url: '/customers/put/:id',
      //    templateUrl: '../routes/edit.html',
      //    // controller: 'insert file here'
      // })
      // .state('delete',{
      //       url: '/customers/delete/:id',
      //       templateUrl: '../routes/delete.html',
      //       // controller: 'insert file here'
      // })
      .state('getCustomers',{
         url: '/customers/get/',
         templateUrl: '../routes/get.html',
         // controller: 'insert file here'
      });
      // .state('getOneCustomer', {
      //    url: '/customers/get/:id',
      //    templateUrl: '../routes/getOne.html',
      //    // controller: 'insert file here'
      // });
      $urlRouterProvider.otherwise('/')
});
