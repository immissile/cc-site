exports.index = (req, res) ->
  global.setNav 'customers'
  res.render global.site.version + "/customers"

