(function() {
  exports.index = function(req, res) {
    global.setNav('home');
    return res.render(global.site.version + "/index");
  };

}).call(this);
