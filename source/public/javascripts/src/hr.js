(function() {
  define(function(require) {
    var $;
    $ = require('jquery');
    window.$ = $;
    require('bootstrap');
    require('wysihtml5');
    require('wysiwyg');
    window.CC = {};
    return $(function() {
      var $textarea;
      $textarea = $('.textarea');
      $textarea.wysihtml5({
        "font-styles": true,
        "emphasis": true,
        "align": false,
        "lists": true,
        "html": true,
        "link": true,
        "image": true,
        "color": true,
        "size": 'sm'
      });
      return $(".wysihtml5-toolbar a.btn").tooltip({
        container: "body",
        placement: "top",
        html: true
      });
    });
  });

}).call(this);
