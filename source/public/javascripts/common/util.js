(function() {
  define(function(require, exports, module) {
    return module.exports = {
      countLength: function(obj) {
        var k, len, n, o;
        o = typeof obj;
        len = 0;
        if (o === 'string') {
          len = obj.length;
        } else if (o === 'object') {
          n = 0;
          for (k in obj) {
            n++;
          }
          len = n;
        }
        return len;
      }
    };
  });

}).call(this);
