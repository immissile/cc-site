(function() {
  var ContactSchema, mongoose;

  mongoose = require('mongoose');

  ContactSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    company: String,
    remark: String,
    meta: {
      createAt: {
        type: Date,
        "default": Date.now()
      }
    }
  });

  ContactSchema.pre("save", function(next) {
    if (this.isNew) {
      this.meta.createAt = this.meta.createAt = Date.now();
    }
    return next();
  });

  ContactSchema.statics = {
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

  module.exports = ContactSchema;

}).call(this);
