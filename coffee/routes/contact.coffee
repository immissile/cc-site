exports.index = (req, res) ->
  global.setNav 'contact'
  res.render global.site.version + "/contact"

