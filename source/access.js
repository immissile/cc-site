(function() {
  var Access, User, hash;

  hash = require("./pass").hash;

  User = require("./models/user");

  Access = {
    authenticate: function(name, pass, fn) {
      if (!module.parent) {
        console.log('authenticating %s:%s', name, pass);
      }
      return User.findOne({
        name: name
      }, function(err, user) {
        if (user) {
          return hash(pass, user.salt, function(err, hash) {
            if (err) {
              return fn(err);
            }
            if (hash === user.hash) {
              return fn(null, user);
            }
            return fn(new Error('invalid password' + hash + ' #### ' + user.hash));
          });
        } else {
          return fn(new Error('cannot find user'));
        }
      });
    },
    requiredAuthentication: function(req, res, next) {
      if (req.session.user) {
        return next();
      } else {
        req.session.error = "请先登陆";
        return res.redirect("/admin/login?from=" + req.url);
      }
    },
    userExist: function(req, res, next) {
      return User.count({
        name: req.body.name
      }, function(err, count) {
        if (count === 0) {
          return next();
        } else {
          req.session.error = "User Exist, login only.";
          return res.redirect("/admin");
        }
      });
    }
  };

  module.exports = Access;

}).call(this);
