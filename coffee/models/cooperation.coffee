mongoose = require('mongoose')

CooperationSchema = require('../schemas/cooperation')
Cooperation = mongoose.model('Cooperation', CooperationSchema)

module.exports  = Cooperation
