mongoose = require 'mongoose'

HrSchema = new mongoose.Schema
  content: String
  cid:
    type: String
    default: "recruitment"
  meta:
    createAt:
      type: Date
      default: Date.now()
    updateAt:
      type: Date
      default: Date.now()

HrSchema.pre "save", (next) ->
  if @isNew
    @meta.createAt = Date.now()
  else
    @meta.updateAt = Date.now()

  next()

HrSchema.statics =
  findIt: (cb) ->
    @findOne
      cid: "recruitment"
    .exec(cb)

module.exports = HrSchema
