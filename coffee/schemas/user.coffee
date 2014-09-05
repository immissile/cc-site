mongoose = require('mongoose')

UserSchema = new mongoose.Schema
  name: String
  password: String
  admin: String
  salt: String
  hash: String

UserSchema.pre "save", (next) ->
  next()

UserSchema.statics =
  fetch: (cb) ->
    @find({}).exec(cb)

  findById: (id, cb) ->
    @findOne({_id:id}).exec(cb)

module.exports = UserSchema
