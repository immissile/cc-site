(function() {
  exports.index = function(req, res) {
    global.setNav('contact');
    return res.render(global.site.version + "/contact");
  };

}).call(this);
