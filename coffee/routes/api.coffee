# api

Hr = require("../models/hr")


# 获取招聘信息
exports.recruitment = (req, res) ->
  Hr.findIt (err, hr) ->
    if err
      res.json
        error: "NOT FIND"
        data: {}
    else
      res.json
        success: 1
        data: hr
