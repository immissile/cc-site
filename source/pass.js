(function() {
  var crypto, iterations, len;

  crypto = require('crypto');

  len = 128;

  iterations = 12000;

  exports.hash = function(pwd, salt, fn) {
    if (3 === arguments.length) {
      return crypto.pbkdf2(pwd, salt, iterations, len, function(err, hash) {
        hash = new Buffer(hash).toString('base64');
        return fn(err, hash);
      });
    } else {
      fn = salt;
      return crypto.randomBytes(len, function(err, salt) {
        if (err) {
          return fn(err);
        }
        salt = salt.toString("base64");
        return crypto.pbkdf2(pwd, salt, iterations, len, function(err, hash) {
          if (err) {
            return fn(err);
          }
          hash = new Buffer(hash).toString('base64');
          return fn(null, salt, hash);
        });
      });
    }
  };

}).call(this);
