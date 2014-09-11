(function() {
  exports.index = function(req, res) {
    global.setNav('team');
    return res.render(global.site.version + "/team");
  };

}).call(this);
