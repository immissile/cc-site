(function() {
  define(function(require, exports, module) {
    var $, Backbone, RES, ThisView, Util, tpl, _;
    $ = require('jquery');
    window.$ = $;
    Backbone = require('backbone');
    _ = require('underscore');
    Util = require('../common/util');
    RES = require('../common/res');
    tpl = require('../../tpl/container.tpl');
    ThisView = Backbone.View.extend({
      id: 'home-container',
      initialize: function() {
        var self;
        self = this;
        this.resize();
        this.render();
        return $(window).resize(function() {
          return self.resize();
        });
      },
      resize: function() {
        var w;
        w = $('.header').height() + $('.footer').height();
        return this.$el.height($(window).height() - w);
      },
      render: function() {
        var container, self;
        self = this;
        container = _.template(tpl);
        this.$el.html(container);
        return setTimeout(function() {
          var $homeSlider;
          $homeSlider = $(".home-slider");
          return $homeSlider.css({
            top: (self.$el.height() - $(".footer").height() - $homeSlider.height()) / 2
          });
        }, 5);
      }
    });
    return module.exports = ThisView;
  });

}).call(this);
