(function() {
  define(function(require, exprots, module) {
    var $, Backbone, RES, ThisView, Util, common, tpl, _;
    $ = require('jquery');
    Backbone = require('backbone');
    _ = require('underscore');
    Util = require('../../common/util');
    common = require('../common');
    RES = require('../../common/res');
    tpl = require('../../../tpl/cc-about.tpl');
    ThisView = Backbone.View.extend({
      initialize: function() {
        this.common = common;
        this.render();
        return this.bindHover();
      },
      render: function() {
        var self;
        self = this;
        this.$el.html(_.template(tpl));
        this.common.removeSubBody();
        this.common.addAnimateText(this.$el);
        return this;
      },
      bindHover: function() {
        var timmer;
        timmer = null;
        return this.$el.find('.team-in-list .ava-tar').hover(function() {
          var $ava, $name, $title, h, margin, self, w, _content;
          self = this;
          w = $(this).width();
          h = $(this).height();
          $ava = $(this).find('.ava');
          $ava.removeClass('animated-');
          $ava.removeClass('flipInY');
          $ava.removeClass('flipInX');
          $ava.removeClass('flipInYrev');
          if ($ava.hasClass('fli-x')) {
            $ava.addClass('animated- flipInX');
          } else {
            $ava.addClass('animated- flipInY');
          }
          $title = $(this).find('h3');
          $name = $(this).find('p');
          _content = $title.height() + $name.height();
          _content = 70;
          margin = ($(this).find('div:first').height() - _content) / 2;
          $title.css({
            marginTop: margin
          });
          return setTimeout(function() {
            return $(self).find('.ava-in').fadeIn();
          }, 0);
        }, function() {
          var $ava, self;
          self = this;
          $ava = $(self).find('.ava');
          $(self).find('.ava-in').fadeOut();
          return timmer = setTimeout(function() {
            $ava.removeClass('animated');
            $ava.removeClass('flipInY');
            return $ava.removeClass('flipInX');
          }, 20);
        });
      }
    });
    return module.exports = ThisView;
  });

}).call(this);
