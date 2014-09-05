(function() {
  define(function(require, exprots, module) {
    var $, Backbone, RES, ThisView, Util, common, tpl, tpl_a, tpl_b, tpl_c, tpl_d, _;
    $ = require('jquery');
    Backbone = require('backbone');
    _ = require('underscore');
    Util = require('../../common/util');
    common = require('../common');
    RES = require('../../common/res');
    tpl = require('../../../tpl/customers-evaluate.tpl');
    tpl_a = require('../../../tpl/detail-customers-1.tpl');
    tpl_b = require('../../../tpl/detail-customers-2.tpl');
    tpl_c = require('../../../tpl/detail-customers-3.tpl');
    tpl_d = require('../../../tpl/detail-customers-4.tpl');
    ThisView = Backbone.View.extend({
      initialize: function() {
        this.common = common;
        return this.render();
      },
      events: {
        'click li': 'detail'
      },
      render: function() {
        var self;
        self = this;
        this.$el.html(_.template(tpl));
        this.common.removeSubBody();
        this.common.addAnimateText(this.$el);
        this.bindActions();
        return this;
      },
      bindActions: function() {
        return this.$el.find('.video-start').hover(function() {
          return $(this).addClass('animated pulse');
        }, function() {
          return $(this).removeClass('animated pulse');
        });
      },
      detail: function(e) {
        var $this, self, view;
        $this = $(e.currentTarget);
        self = this;
        view = $this.data('view');
        return this.renderDetail(view);
      },
      renderDetail: function(view) {
        var $detail, $section, _tpl;
        $section = $('.sub-section');
        $detail = $section.find('.detail-page');
        switch (view) {
          case 'a':
            _tpl = tpl_a;
            break;
          case 'b':
            _tpl = tpl_b;
            break;
          case 'c':
            _tpl = tpl_c;
            break;
          case 'd':
            _tpl = tpl_d;
        }
        $section.append(_tpl);
        $('.detail-page').addClass('animated moveInRight');
        $('button.hide-detail').hover(function() {
          return $(this).addClass('animated pulse');
        }, function() {
          return $(this).removeClass('animated pulse');
        });
        return $('button.hide-detail').bind('click', function() {
          $('.detail-page').removeClass('moveInRight').addClass('moveOutRight');
          return setTimeout(function() {
            return $('.detail-page').remove();
          }, 1000);
        });
      }
    });
    return module.exports = ThisView;
  });

}).call(this);
