angular.module('commitsApp', []).controller('commitsAppController', function($scope, $http){
  $scope.watch('githubUsername', function(){
    $http.get('https://api.github.com/users/' + $scope.githubUsername + '/repos')
    .then(function(response){
      $scope.repos = response.data;
    });
  });
});
