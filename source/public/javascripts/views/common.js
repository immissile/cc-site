(function() {
  define(function(require, exports, module) {
    var $;
    $ = require('jquery');
    return module.exports = {
      removeWrapper: function(time, callback) {
        var $wp, arr, _i, _ref, _results;
        if (time == null) {
          time = 500;
        }
        if ($.isFunction(time)) {
          callback = time;
          time = 500;
        }
        $wp = $('.wrapper');
        arr = (function() {
          _results = [];
          for (var _i = 0, _ref = $wp.length; 0 <= _ref ? _i < _ref : _i > _ref; 0 <= _ref ? _i++ : _i--){ _results.push(_i); }
          return _results;
        }).apply(this);
        if (arr.length <= 1) {
          return;
        }
        return setTimeout(function() {
          var key, _j, _len;
          for (_j = 0, _len = arr.length; _j < _len; _j++) {
            key = arr[_j];
            if (key < $wp.length - 1) {
              $wp.eq(key).remove();
            }
          }
          if (callback) {
            return callback();
          }
        }, time);
      },
      removeSubBody: function(time, callback) {
        var $body, arr, _i, _ref, _results;
        if (time == null) {
          time = 80;
        }
        if ($.isFunction(time)) {
          callback = time;
          time = 500;
        }
        $body = $('.container-in .sub-body');
        arr = (function() {
          _results = [];
          for (var _i = 0, _ref = $body.length; 0 <= _ref ? _i < _ref : _i > _ref; 0 <= _ref ? _i++ : _i--){ _results.push(_i); }
          return _results;
        }).apply(this);
        if (arr.length <= 1) {
          return;
        }
        return setTimeout(function() {
          var key, _j, _len;
          for (_j = 0, _len = arr.length; _j < _len; _j++) {
            key = arr[_j];
            if (key < $body.length - 1) {
              $body.eq(key).remove();
            }
          }
          if (callback) {
            return callback();
          }
        }, time);
      },
      resetContainer: function($container) {
        var h_header, h_subFooter, h_subHeader, reset_height;
        if ($container == null) {
          $container = $('.container-in');
        }
        h_header = $('.s-header').height();
        h_subHeader = $('.sub-header').height();
        h_subFooter = $('.sub-footer').height();
        reset_height = $(window).height() - (h_header + h_subHeader + h_subFooter);
        return $container.height(reset_height);
      },
      addAnimateText: function(el, callback) {
        return setTimeout(function() {
          var $text;
          $text = el.find('.animate-text');
          $text.removeClass('fadeInLeft');
          setTimeout(function() {
            return $text.addClass('animated fadeInLeft');
          }, 1);
          if (callback) {
            return callback();
          }
        }, 1000);
      }
    };
  });

}).call(this);
