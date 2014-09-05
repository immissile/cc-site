mongoose = require 'mongoose'

HrSchema = require '../schemas/hr'
Hr = mongoose.model 'Hr', HrSchema

module.exports = Hr
