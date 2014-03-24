var test = require('tape').test;
var flatten = require('../src/scripts/flatten');

test('can flatten product advertising api', function (t) {
  var testItem = {
    ASIN: ['PAPI'],
    DetailPageURL: ['PAPI'],
    ItemAttributes: [ { Title: ['PAPI']}]
  };

  var product = flatten(testItem);
  t.equal(product.asin, 'PAPI', 'asin is converted');
  t.equal(product.url, 'PAPI', 'url is converted');
  t.equal(product.title, 'PAPI', 'title is converted');
  t.end();
});
