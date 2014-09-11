exports.index = (req, res) ->
  global.setNav 'home'
  res.render global.site.version + "/index"

