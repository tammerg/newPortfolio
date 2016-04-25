var commits = angular.module('commitsApp',  []);

commits.controller('commitsAppController', function($scope, $http){
  $scope.$watch('username', function(){
    $http.get('https://api.github.com/users/' + $scope.username)
    .success(function (data) {
       if (data.name == "") data.name = data.login;
       $scope.user = data;
       $scope.loaded = true;
    })
    .error(function () {
       $scope.userNotFound = true;
    });
    $http.get("https://api.github.com/users/" + $scope.username + "/repos").success(function (data) {
        $scope.repos = data;
        $scope.reposFound = data.length > 0;
     });
  });
});
