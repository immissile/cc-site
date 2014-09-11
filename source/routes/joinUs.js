/*
GET joinUs page.
*/


(function() {
  var Hr;

  Hr = require("../models/hr");

  exports.index = function(req, res) {
    return Hr.findIt(function(err, hr) {
      if (err) {
        hr = null;
      } else {
        hr = hr;
      }
      return res.render("joinUs", {
        title: "加入我们",
        hr: hr
      });
    });
  };

}).call(this);
