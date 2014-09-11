exports.index = (req, res) ->
  global.setNav 'product'
  res.render global.site.version + "/product"

