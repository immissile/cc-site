(function() {
  exports.index = function(req, res) {
    global.setNav('product');
    return res.render(global.site.version + "/product");
  };

}).call(this);
