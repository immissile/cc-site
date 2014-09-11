exports.index = (req, res) ->
  global.setNav 'services'
  res.render global.site.version + "/services"

