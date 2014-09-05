(function() {
  var CooperationSchema, mongoose;

  mongoose = require('mongoose');

  CooperationSchema = new mongoose.Schema({
    name: String,
    mobile: String,
    company: String,
    meta: {
      createAt: {
        type: Date,
        "default": Date.now()
      }
    }
  });

  CooperationSchema.pre("save", function(next) {
    if (this.isNew) {
      this.meta.createAt = this.meta.createAt = Date.now();
    }
    return next();
  });

  CooperationSchema.statics = {
    fetch: function(cb) {
      return this.find({}).sort({
        'meta.createAt': -1
      }).exec(cb);
    },
    findById: function(id, cb) {
      return this.findOne({
        _id: id
      }).exec(cb);
    }
  };

  module.exports = CooperationSchema;

}).call(this);
