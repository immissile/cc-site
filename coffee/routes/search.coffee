
###
search page
###
exports.index = (req, res) ->
    res.render 'search',
        title: 'this is search page'
        content: 'this is content.....'
