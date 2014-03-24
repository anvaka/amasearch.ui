module.exports = function (papiItem) {
  var image = 'http://g-ecx.images-amazon.com/images/G/01/x-site/icons/no-img-sm.gif';
  if (papiItem.SmallImage) {
    image = papiItem.SmallImage[0].URL[0];
  }
  return {
//    asin: papiItem.ASIN[0],
    url: papiItem.DetailPageURL[0],
    image: image,
    title: papiItem.ItemAttributes[0].Title[0]
  };
};
