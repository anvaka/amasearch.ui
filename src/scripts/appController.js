require('typeahead.an');

require('an').controller(AppController);

function AppController($scope, $http) {
  $scope.getProduct = require('./papiClient')($http);
}
