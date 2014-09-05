(function() {
  var Hr;

  Hr = require("../models/hr");

  exports.recruitment = function(req, res) {
    return Hr.findIt(function(err, hr) {
      if (err) {
        return res.json({
          error: "NOT FIND",
          data: {}
        });
      } else {
        return res.json({
          success: 1,
          data: hr
        });
      }
    });
  };

}).call(this);
