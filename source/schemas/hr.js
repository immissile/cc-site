(function() {
  var HrSchema, mongoose;

  mongoose = require('mongoose');

  HrSchema = new mongoose.Schema({
    content: String,
    cid: {
      type: String,
      "default": "recruitment"
    },
    meta: {
      createAt: {
        type: Date,
        "default": Date.now()
      },
      updateAt: {
        type: Date,
        "default": Date.now()
      }
    }
  });

  HrSchema.pre("save", function(next) {
    if (this.isNew) {
      this.meta.createAt = Date.now();
    } else {
      this.meta.updateAt = Date.now();
    }
    return next();
  });

  HrSchema.statics = {
    findIt: function(cb) {
      return this.findOne({
        cid: "recruitment"
      }).exec(cb);
    }
  };

  module.exports = HrSchema;

}).call(this);
