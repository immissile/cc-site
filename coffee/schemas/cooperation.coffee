mongoose = require('mongoose')

CooperationSchema = new mongoose.Schema
  name:String
  mobile:String
  company:String
  meta:
    createAt:
      type:Date
      default:Date.now()

CooperationSchema.pre "save", (next) ->
  if @isNew
    @meta.createAt = @meta.createAt = Date.now()

  next()


CooperationSchema.statics =
  fetch: (cb) ->
    @find({})
    .sort({'meta.createAt': -1})
    .exec(cb)

  findById: (id, cb) ->
    @findOne({_id:id}).exec(cb)


module.exports = CooperationSchema
