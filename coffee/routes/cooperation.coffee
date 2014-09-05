# 商务合作
Cooperation = require("../models/cooperation")

exports.index = (req, res) ->
  res.render "cooperation",
    title: "商务合作 - 云信"

exports.succ = (req, res) ->
  res.render "cooperation_succ",
    title: "提交成功"

exports.new = (req, res) ->
  obj = req.body.cooperation

  _cooperation = new Cooperation
    name:obj.name
    mobile:obj.mobile
    company:obj.company

  _cooperation.save (err, cooperation) ->
    if err
      console.log err
    res.redirect "/cooperation/succ"
