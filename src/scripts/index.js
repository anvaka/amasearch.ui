require('./appController');

var ngApp = angular.module('brog', []);

require('an').flush(ngApp);

angular.bootstrap(document, [ngApp.name]);

module.exports = ngApp;
