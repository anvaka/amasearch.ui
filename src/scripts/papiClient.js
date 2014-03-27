var flatten = require('./flatten');

module.exports = function (http) {
  return function (val) {
      return http.get( 'http://amasearch.herokuapp.com/', {
        params: { keywords:val }
      }).then(function (res) {
        if (res.data) return res.data.map(flatten);
      });
    };
};
