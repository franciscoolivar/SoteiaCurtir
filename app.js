var app = angular.module('SorteiaCurtir', [])

app.controller('SorteioController', function($scope, $http) {
  $scope.getResources = function() {
    $http.get('http://graph.facebook.com/' + $scope.pubID).success(function(data) {
      $scope.likes = data.likes.data
     }).error(function() { alert('ocorreu algum erro na sua req.') })
  }

  $scope.$watch('pubID', function(value) {
    if(value) {
      $scope.getResources()
    }
  })


})
