var portfolio = angular.module('portfolioApp',  ['ui.router', 'ui.bootstrap']);

portfolio.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {
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
