(function() {
  var UserSchema, mongoose;

  mongoose = require('mongoose');

  UserSchema = new mongoose.Schema({
    name: String,
    password: String,
    admin: String,
    dec: String,
    available: Boolean,
    salt: String,
    hash: String,
    meta: {
      createAt: {
        type: Date,
        "default": Date.now()
      }
    }
  });

  UserSchema.pre("save", function(next) {
    if (this.isNew) {
      this.meta.createAt = this.meta.createAt = Date.now();
    }
    return next();
  });

  UserSchema.statics = {
    fetch: function(cb) {
      return this.find({}).exec(cb);
    },
    findById: function(id, cb) {
      return this.findOne({
        _id: id
      }).exec(cb);
    }
  };

  module.exports = UserSchema;

}).call(this);
