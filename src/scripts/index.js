require('typeahead.an');
require('./appControler');

var ngApp = angular.module('myApp', []);

require('an').flush(ngApp);

angular.bootstrap(document, [ngApp.name]);

