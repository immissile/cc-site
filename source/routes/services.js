(function() {
  exports.index = function(req, res) {
    global.setNav('services');
    return res.render(global.site.version + "/services");
  };

}).call(this);
