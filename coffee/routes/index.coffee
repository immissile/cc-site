###
GET home page.
###
exports.index = (req, res) ->
  res.render global.site.version + "/index"

