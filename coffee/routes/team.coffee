exports.index = (req, res) ->
  global.setNav 'team'
  res.render global.site.version + "/team"

