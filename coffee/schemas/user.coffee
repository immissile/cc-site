mongoose = require('mongoose')

UserSchema = new mongoose.Schema
  name: String
  password: String
  admin: String #级别
  dec: String #描述
  available: Boolean #是否可用
  salt: String
  hash: String
  meta:
    createAt:
      type:Date
      default:Date.now()

UserSchema.pre "save", (next) ->
  if @isNew
    @meta.createAt = @meta.createAt = Date.now()

  next()

UserSchema.statics =
  fetch: (cb) ->
    @find({}).exec(cb)

  findById: (id, cb) ->
    @findOne({_id:id}).exec(cb)
  
module.exports = UserSchema
