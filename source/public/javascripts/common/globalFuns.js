(function() {
  define(function(resource, exports, module) {
    var Funs;
    Funs = {
      imgLoader: function(url, callback) {
        var img;
        img = new Image();
        img.onload = function() {
          img.onload = img.onerror = null;
          return callback(img);
        };
        img.onerror = function() {
          return console.log('load img error:', img, err);
        };
        img.src = url;
        if (img.complete) {
          return callback(img);
        }
      }
    };
    return module.exports = Funs;
  });

}).call(this);
