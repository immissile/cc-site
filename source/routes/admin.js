(function() {
  var Cooperation, Hr, User, access, hash, moment;

  moment = require("moment");

  access = require("../access");

  hash = require('../pass').hash;

  Cooperation = require("../models/cooperation");

  User = require("../models/user");

  Hr = require("../models/hr");

  exports.index = function(req, res) {
    if (!req.session.user) {
      res.redirect("/admin/login");
    }
    return Cooperation.fetch(function(err, cooperations) {
      if (err) {
        console.log(err);
      }
      return res.render("admin/index", {
        title: "管理后台 - 云信",
        active: {
          cooperation: true
        },
        cooperations: cooperations,
        moment: moment
      });
    });
  };

  exports.setup = function(req, res) {
    if (req.session.user) {
      return res.redirect("/");
    } else {
      return User.findOne({}, function(err, user) {
        if (user) {
          req.session.error = "你没有setup权限";
          return res.redirect("/admin/login");
        } else {
          return res.render("admin/setup");
        }
      });
    }
  };

  exports.postSetup = function(req, res) {
    var name, password;
    name = req.body.name;
    password = req.body.password;
    return hash(password, function(err, salt, hash) {
      var _user;
      if (err) {
        throw err;
      }
      return _user = new User({
        name: name,
        admin: 1,
        salt: salt,
        hash: hash
      }).save(function(err, newUser) {
        if (err) {
          throw err;
        }
        return access.authenticate(newUser.name, password, function(err, user) {
          if (err) {
            res.render("admin/error", {
              msg: err
            });
          }
          if (user) {
            return req.session.regenerate(function() {
              req.session.user = user;
              req.session.success = "已登录 req.session.success=true";
              return res.redirect("/admin");
            });
          }
        });
      });
    });
  };

  exports.login = function(req, res) {
    var from;
    from = req.query.from;
    if (from !== "undefined") {
      from = "?from=" + from;
    } else {
      from = "";
    }
    return res.render("admin/login", {
      title: "登陆 - 云信",
      from: from
    });
  };

  exports.postLogin = function(req, res) {
    var from;
    from = req.query.from;
    return access.authenticate(req.body.name, req.body.password, function(err, user) {
      if (user) {
        return req.session.regenerate(function() {
          req.session.user = user;
          req.session.success = "Login succ";
          if (from !== "undefined") {
            return res.redirect(from);
          } else {
            return res.redirect("/admin");
          }
        });
      } else {
        req.session.error = "账号或密码错误";
        return res.redirect("/admin/login");
      }
    });
  };

  exports.logout = function(req, res) {
    return req.session.destroy(function() {
      return res.redirect("/admin/login");
    });
  };

  exports.signup = function(req, res) {
    return res.render("admin/sign");
  };

  exports.deleteCooperation = function(req, res) {
    var id;
    id = req.query.id;
    if (id) {
      return Cooperation.remove({
        _id: id
      }, function(err, user) {
        if (err) {
          return console.log(err);
        } else {
          return res.json({
            success: 1
          });
        }
      });
    }
  };

  exports.hr = function(req, res) {
    return Hr.findIt(function(err, hr) {
      var btnText;
      if (err) {
        return console.log(err);
      } else {
        if (hr === null) {
          hr = [];
          btnText = "保存";
        } else {
          btnText = "更新";
        }
        return res.render("admin/hr", {
          title: "招聘相关",
          active: {
            hr: true
          },
          cooperations: [],
          hr: hr,
          btnText: btnText
        });
      }
    });
  };

  exports.postHr = function(req, res) {
    var conditions, content, id, options, update, _hr;
    id = req.body._id;
    content = req.body.content;
    if (id === "undefined") {
      _hr = new Hr({
        content: content
      });
      return _hr.save(function(err, hr) {
        if (err) {
          console.log(err);
        }
        return res.redirect("/admin/hr");
      });
    } else {
      conditions = {
        _id: id
      };
      update = {
        $set: {
          content: content
        }
      };
      options = {
        multi: true
      };
      return Hr.update(conditions, update, options, function(err, hr) {
        if (err) {
          return console.log(err);
        } else {
          return res.redirect("/admin/hr");
        }
      });
    }
  };

}).call(this);
