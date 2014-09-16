mongoose = require('mongoose')

ContactSchema = new mongoose.Schema
  name:String
  email:String
  phone:String
  company:String
  remark:String
  meta:
    createAt:
      type:Date
      default:Date.now()

ContactSchema.pre "save", (next) ->
  if @isNew
    @meta.createAt = @meta.createAt = Date.now()

  next()

ContactSchema.statics =
  fetch: (cb) ->
    @find({})
    .sort({'meta.createAt': -1})
    .exec(cb)

  findById: (id, cb) ->
    @findOne({_id:id}).exec(cb)


module.exports = ContactSchema
