(function() {
  exports.index = function(req, res) {
    global.setNav('customers');
    return res.render(global.site.version + "/customers");
  };

}).call(this);
