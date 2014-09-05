(function() {
  define(function(require, exports, module) {
    var $, AppRouter, Backbone, RES, Util, common;
    $ = require('jquery');
    Backbone = require('backbone');
    Util = require('../common/util');
    RES = require('../common/res');
    common = require('../views/common');
    AppRouter = Backbone.Router.extend({
      currentView: null,
      initialize: function() {
        var self;
        self = this;
        this.common = common;
        this.res = RES;
        return this.resLoaded = false;
      },
      routes: {
        '': 'home',
        'page-:view*': 'page'
      },
      loadRes: function(callback) {
        var $tips, counter, key, prefix, self, url, _results;
        self = this;
        if (this.resLoaded) {
          callback();
          return;
        }
        counter = 0;
        $tips = $('.landing-tips');
        setTimeout(function() {
          return $tips.addClass('animated fadeInUp');
        }, 5000);
        setTimeout(function() {
          $tips.addClass('animated fadeOutUp');
          setTimeout(function() {
            $tips.removeClass('animated fadeInUp fadeOutUp');
            $tips.text('载入文件较多，再等等看~');
            return $tips.addClass('animated fadeInUp');
          }, 200);
          return setTimeout(function() {
            $tips.addClass('animated fadeOutUp');
            return setTimeout(function() {
              $tips.removeClass('animated fadeInUp fadeOutUp');
              $tips.text('看样子你得刷新页面重新加载一次了 >_<');
              return $tips.addClass('animated fadeInUp');
            }, 200);
          }, 10000);
        }, 10000);
        _results = [];
        for (key in this.res) {
          prefix = '?v=' + new Date().getTime();
          url = self.res['home'];
          _results.push(CC.funs.imgLoader(url, function(o) {
            counter++;
            if (counter === Util.countLength(self.res)) {
              self.resLoaded = true;
              $('.landing-status').addClass('fadeOutUp animated');
              return setTimeout(function() {
                var $landing;
                $landing = $('#landing');
                $landing.fadeOut();
                setTimeout(function() {
                  return $landing.remove();
                }, 1000);
                return callback();
              }, 1000);
            }
          }));
        }
        return _results;
      },
      newWrapper: function() {
        return $('.page').append('<div class="wrapper"></div>');
      },
      home: function() {
        var self;
        self = this;
        return this.loadRes(function() {
          var App;
          App = require('../views/main');
          self.newWrapper();
          return new App;
        });
      },
      page: function(page) {
        var self;
        self = this;
        return this.loadRes(function() {
          var PageView;
          self.newWrapper();
          PageView = require('../views/page/page');
          return new PageView({
            el: $('.wrapper:last'),
            currentView: page
          });
        });
      },
      switchView: function(view) {
        if (this.currentView) {
          this.currentView.remove();
        }
        return this.currentView = view;
      }
    });
    return module.exports = AppRouter;
  });

}).call(this);
