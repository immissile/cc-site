(function() {
  define(function(require, exprots, module) {
    var $, Backbone, RES, ThisView, Util, common, tpl, tpl_a, tpl_b, tpl_c, _;
    $ = require('jquery');
    Backbone = require('backbone');
    _ = require('underscore');
    Util = require('../../common/util');
    common = require('../common');
    RES = require('../../common/res');
    tpl = require('../../../tpl/cc-tech.tpl');
    tpl_a = require('../../../tpl/detail-cc-tech-1.tpl');
    tpl_b = require('../../../tpl/detail-cc-tech-2.tpl');
    tpl_c = require('../../../tpl/detail-cc-tech-3.tpl');
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
        this.$el.addClass('tech-bg-1');
        this.common.removeSubBody();
        this.common.addAnimateText(this.$el);
        return this;
      },
      detail: function(e) {
        var $this, self, view;
        $this = $(e.currentTarget);
        self = this;
        view = $this.data('view');
        return this.renderDetail(view);
      },
      renderDetail: function(view) {
        var $section, _tpl;
        $section = $('.sub-section');
        switch (view) {
          case 'tech-a':
            _tpl = tpl_a;
            break;
          case 'tech-b':
            _tpl = tpl_b;
            break;
          case 'tech-c':
            _tpl = tpl_c;
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
