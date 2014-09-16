Contact = require("../models/contact")

exports.index = (req, res) ->
  global.setNav 'contact'
  res.render global.site.version + "/contact"

exports.new = (req, res) ->
  obj = req.body.contact

  if(
    obj.name == '' or
    obj.phone == '' or
    obj.email == '' or
    obj.company == ''
  )
    res.render global.site.version + "/contact",
      error: "姓名、邮箱、联系电话以及公司名称都不能为空"
    return

  _contact = new Contact
    name: obj.name
    email: obj.email
    phone: obj.phone
    company: obj.company
    remark: obj.remark
    
  _contact.save (err, contact) ->
    if err
      console.log err
    res.redirect "/contact/succ"

exports.succ = (req, res) ->
  res.render global.site.version + "/message",
    title: "操作结果"
    result:
      message: "联系信息提交成功，稍后我们将联系您"
      url: '/contact'
