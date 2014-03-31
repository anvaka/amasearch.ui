var test = require('tape').test;
var transformPrice = require('../src/scripts/transformProduct');

test('reads list price', function (t) {
  var papiItem = {
    ItemAttributes: [{
      ListPrice: [{ FormattedPrice: [ "$42.00" ] }]
    }]
  };
  var product = {
    title: "Answer to life the universe and everything"
  };

  transformPrice(papiItem, product);
  t.equal(product.title.indexOf('$42'), 0, 'Starts with price');
  t.end();
});
