(function() {
  var Cooperation;

  Cooperation = require("../models/cooperation");

  exports.index = function(req, res) {
    return res.render("cooperation", {
      title: "商务合作 - 云信"
    });
  };

  exports.succ = function(req, res) {
    return res.render("cooperation_succ", {
      title: "提交成功"
    });
  };

  exports["new"] = function(req, res) {
    var obj, _cooperation;
    obj = req.body.cooperation;
    _cooperation = new Cooperation({
      name: obj.name,
      mobile: obj.mobile,
      company: obj.company
    });
    return _cooperation.save(function(err, cooperation) {
      if (err) {
        console.log(err);
      }
      return res.redirect("/cooperation/succ");
    });
  };

}).call(this);
