require('an').controller(AppController);

var config = require('./config');
var flatten = require('./flatten');

function AppController($scope, $http) {
  $scope.formatProduct = function (model) {
   if (typeof  model === 'string') {
      return model;
    }
    return model && model.title;
  };

  $scope.getProduct = function (val) {
      return $http.get(config.amasearch, {
        params: {
          keywords:val,
          searchIndex: 'Books',
          responseGroup: 'Images,ItemAttributes'
        }
      }).then(function (res) {
        var products = [];

        for (var i = 0; i < res.data.length; ++i) {
          products.push(flatten(res.data[i]));
        }

        return products;
      });
    };
}
