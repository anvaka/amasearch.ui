require('an').controller(AppController);

function AppController($scope, $http) {
  $scope.addPrice = require('./transformProduct');
}
