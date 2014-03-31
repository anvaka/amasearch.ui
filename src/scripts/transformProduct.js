/**
 * Attempts to add list price if it can
 */
module.exports = function transform(papiResponse, product) {
  // let's add price if we can
  var attributes = (papiResponse.ItemAttributes && papiResponse.ItemAttributes[0]);
  var listPrice = (attributes.ListPrice && attributes.ListPrice[0]);
  if (listPrice && listPrice.FormattedPrice && listPrice.FormattedPrice[0]) {
    product.title = listPrice.FormattedPrice[0] + " " + product.title;
  }
};
