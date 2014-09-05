(function() {
  define(function(require, exports, module) {
    var $, Backbone, ThisView, Util, common, tpl, _;
    $ = require('jquery');
    Backbone = require('backbone');
    _ = require('underscore');
    Util = require('../../common/util');
    common = require('../common');
    tpl = require('../../../tpl/page.tpl');
    ThisView = Backbone.View.extend({
      initialize: function() {
        this.$el.addClass('animated slow');
        this.common = common;
        return this.render();
      },
      events: {
        'click button': 'button'
      },
      render: function() {
        var $wrapper, HeaderView, SubHeaderView, headerView, self, subHeaderView;
        self = this;
        $wrapper = $('.wrapper');
        this.$el.html(tpl);
        HeaderView = require('../header/s-header');
        headerView = new HeaderView({
          el: $("header.s-header")
        });
        SubHeaderView = require('../header/sub-header');
        subHeaderView = new SubHeaderView({
          el: $('.sub-header')
        });
        this.$el.find('li[data-view=customers]').addClass('active');
        setTimeout(function() {
          var FooterView, footerView;
          FooterView = require('../footer/customers-footer');
          footerView = new FooterView({
            el: $('footer.sub-footer')
          });
          return self.common.resetContainer();
        }, 300);
        this.$el.css({
          top: 0
        }).addClass('slideInUp');
        return this.common.removeWrapper();
      },
      button: function() {
        return alert(33333);
      }
    });
    return module.exports = ThisView;
  });

}).call(this);
