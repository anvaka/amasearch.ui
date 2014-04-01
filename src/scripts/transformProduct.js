/**
 * Attempts to add list price if it can
 */
module.exports = function transform(papiResponse, product) {
  // let's add price if we can
  if (!papiResponse) return;
  if (!papiResponse.ItemAttributes) return;

  var attributes = papiResponse.ItemAttributes[0];
  if (!attributes || !attributes.ListPrice) return;

  var listPrice = attributes.ListPrice[0];
  if (listPrice && listPrice.FormattedPrice && listPrice.FormattedPrice[0]) {
    product.title = listPrice.FormattedPrice[0] + " " + product.title;
  }
};
