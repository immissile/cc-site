(function() {
  define(function(require) {
    var $;
    $ = require('jquery');
    window.$ = $;
    window.CC = {};
    $("form").find("input").blur(function() {
      if ($(this).val() !== "") {
        $(this).removeClass("error");
        return $(this).addClass("succ");
      } else {
        $(this).removeClass("succ");
        return $(this).addClass("error");
      }
    });
    $("form").find("input").focus(function() {
      $(this).removeClass("error");
      return $(this).removeClass("succ");
    });
    return $("form").submit(function(e) {
      var $company, $mobile, $name, notice, pass;
      notice = function(obj) {
        e.preventDefault();
        return obj.addClass("error");
      };
      pass = function(obj) {
        obj.removeClass("error");
        return obj.addClass("succ");
      };
      $name = $("#name");
      $mobile = $("#mobile");
      $company = $("#company");
      if ($.trim($name.val()) === "") {
        notice($name);
      } else {
        pass($name);
      }
      if ($.trim($mobile.val()) === "") {
        notice($mobile);
      } else {
        pass($mobile);
      }
      if ($.trim($company.val()) === "") {
        return notice($company);
      } else {
        return pass($company);
      }
    });
  });

}).call(this);
