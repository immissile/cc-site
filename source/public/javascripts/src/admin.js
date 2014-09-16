(function() {
  define(function(require) {
    var $;
    $ = require('jquery');
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
    $(".setup-page form").submit(function(e) {
      var $name, $password, notice, pass;
      notice = function(obj) {
        e.preventDefault();
        return obj.addClass("error");
      };
      pass = function(obj) {
        obj.removeClass("error");
        return obj.addClass("succ");
      };
      $name = $("#name");
      $password = $("#password");
      if ($.trim($name.val()) === "") {
        notice($name);
      } else {
        pass($name);
      }
      if ($.trim($password.val()) === "") {
        return notice($password);
      } else {
        return pass($password);
      }
    });
    $(".cooperation-page button.btn-del").click(function() {
      var $tr, id;
      id = $(this).data("id");
      $tr = $(this).parent().parent();
      if (confirm("确认删除？")) {
        return $.ajax({
          type: "DELETE",
          url: "/admin/cooperation?id=" + id
        }).done(function(results) {
          if (results.success === 1) {
            if ($tr.length > 0) {
              return $tr.fadeOut(function() {
                return $tr.remove();
              });
            }
          }
        });
      }
    });
    return $(".contact-page button.btn-del").click(function() {
      var $tr, id;
      id = $(this).data("id");
      $tr = $(this).parent().parent();
      if (confirm("确认删除？")) {
        return $.ajax({
          type: "DELETE",
          url: "/admin/contact?id=" + id
        }).done(function(results) {
          if (results.success === 1) {
            if ($tr.length > 0) {
              return $tr.fadeOut(function() {
                $tr.next().remove();
                return $tr.remove();
              });
            }
          }
        });
      }
    });
  });

}).call(this);
