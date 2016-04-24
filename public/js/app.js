angular.module('portfolioApp',  ['ngRoute', 'ui.router', 'ui.bootstrap']).config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('main', {
        url: '/',
        views: {
          '/': {
            templateUrl: '/views/main.html'
          }
        }
      });
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
  }]);
