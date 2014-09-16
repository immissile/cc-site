mongoose = require('mongoose')

ContactSchema = require('../schemas/contact')
Contact = mongoose.model('Contact', ContactSchema)

module.exports = Contact
