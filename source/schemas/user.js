(function() {
  var UserSchema, mongoose;

  mongoose = require('mongoose');

  UserSchema = new mongoose.Schema({
    name: String,
    password: String,
    admin: String,
    salt: String,
    hash: String
  });

  UserSchema.pre("save", function(next) {
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
