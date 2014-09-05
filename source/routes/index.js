/*
GET home page.
*/


(function() {
  exports.index = function(req, res) {
    return res.render(global.site.version + "/index");
  };

}).call(this);
