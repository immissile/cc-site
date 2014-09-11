
/*
GET detail listing.
 */

(function() {
  exports.list = function(req, res) {
    return res.render('index', {
      title: '### detail page'
    });
  };

}).call(this);
