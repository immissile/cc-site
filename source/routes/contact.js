(function() {
  var Contact;

  Contact = require("../models/contact");

  exports.index = function(req, res) {
    global.setNav('contact');
    return res.render(global.site.version + "/contact");
  };

  exports["new"] = function(req, res) {
    var obj, _contact;
    obj = req.body.contact;
    if (obj.name === '' || obj.phone === '' || obj.email === '' || obj.company === '') {
      res.render(global.site.version + "/contact", {
        error: "姓名、邮箱、联系电话以及公司名称都不能为空"
      });
      return;
    }
    _contact = new Contact({
      name: obj.name,
      email: obj.email,
      phone: obj.phone,
      company: obj.company,
      remark: obj.remark
    });
    return _contact.save(function(err, contact) {
      if (err) {
        console.log(err);
      }
      return res.redirect("/contact/succ");
    });
  };

  exports.succ = function(req, res) {
    return res.render(global.site.version + "/message", {
      title: "操作结果",
      result: {
        message: "联系信息提交成功，稍后我们将联系您",
        url: '/contact'
      }
    });
  };

}).call(this);
