(function() {
  var inArray;

  inArray = function(elem, array, i) {
    var len;
    len = void 0;
    if (array) {
      len = array.length;
      i = (i ? (i < 0 ? Math.max(0, len + i) : i) : 0);
      while (i < len) {
        if (i in array && array[i] === elem) {
          return i;
        }
        i++;
      }
    }
    return -1;
  };

  exports.HavePermission = function(uname, page, map) {
    map = map || global.AccessMap;
    if (map[page]) {
      if (inArray(uname, map[page]) === -1) {
        return false;
      } else {
        return true;
      }
    } else {
      return false;
    }
  };

  exports.AccessMap = {
    cooperation: ['admin', 'missile'],
    contact: ['admin', 'missile'],
    hr: ['admin', 'hr'],
    account: ['admin']
  };

}).call(this);
