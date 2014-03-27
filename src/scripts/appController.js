require('typeahead.an');

require('an').controller(AppController);

function AppController($scope, $http) {
  $scope.formatProduct = function (model) {
   if (typeof  model === 'string') {
      return model;
    }
    return model && model.title;
  };

  $scope.getProduct = function (val) {
      return $http.get( 'http://amasearch.herokuapp.com/', {
        params: { keywords:val }
      }).then(function (res) {
        if (res.data) return res.data.map(flatten);
      });
    };
}


function flatten(papiItem) {
  var image = 'http://images.amazon.com/images/P/' + papiItem.ASIN[0] + '.01.jpg';
  return {
    asin: papiItem.ASIN[0],
    url: papiItem.DetailPageURL[0],
    image: image,
    title: papiItem.ItemAttributes[0].Title[0],
    toString: function () {
      return this.title;
    }
  };
}
