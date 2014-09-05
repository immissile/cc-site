###
GET detail listing.
###
exports.list = (req, res) ->
  res.render 'index',
    title: '### detail page'
