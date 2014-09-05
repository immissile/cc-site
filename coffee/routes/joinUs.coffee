###
GET joinUs page.
###

Hr = require("../models/hr")

exports.index = (req, res) ->
  Hr.findIt (err, hr) ->
    if err
      hr = null
    else
      hr = hr

    res.render "joinUs",
      title: "加入我们"
      hr: hr

