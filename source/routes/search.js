/*
search page
*/


(function() {
  exports.index = function(req, res) {
    return res.render('search', {
      title: 'this is search page',
      content: 'this is content.....'
    });
  };

}).call(this);
