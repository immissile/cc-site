(function() {
  var Cooperation, CooperationSchema, mongoose;

  mongoose = require('mongoose');

  CooperationSchema = require('../schemas/cooperation');

  Cooperation = mongoose.model('Cooperation', CooperationSchema);

  module.exports = Cooperation;

}).call(this);
