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
      sHeader: null,
      initialize: function() {
        if ($('.s-header').length <= 0) {
          this.$el.addClass('animated slow');
        } else {
          this.sHeader = true;
        }
        this.common = common;
        return this.render();
      },
      render: function() {
        var $wrapper, ContainerView, HeaderView, SubHeaderView, containerView, headerView, self, subHeaderView;
        self = this;
        $wrapper = $('.wrapper');
        this.$el.html(tpl);
        if (this.sHeader) {
          this.$el.find('.sub-page').addClass('animated slow');
        }
        HeaderView = require('../header/s-header');
        headerView = new HeaderView({
          el: $("header.s-header")
        });
        SubHeaderView = require('../header/sub-header');
        subHeaderView = new SubHeaderView({
          el: $('.sub-header')
        });
        this.$el.find('li[data-view=cc]').addClass('active');
        ContainerView = require('../content/cc-about');
        $('.container-in').append('<div class="sub-body"></div>');
        containerView = new ContainerView({
          el: $('.sub-body')
        });
        alert('page/creditcloud');
        setTimeout(function() {
          var CcFooterView, ccFooterView;
          CcFooterView = require('../footer/cc-footer');
          ccFooterView = new CcFooterView({
            el: $('.sub-footer')
          });
          return self.common.resetContainer();
        }, 300);
        if (this.sHeader) {
          this.$el.find('.sub-page').css({
            top: 0
          }).addClass('slideInUp');
        } else {
          this.$el.css({
            top: 0
          }).addClass('slideInUp');
        }
        return this.common.removeWrapper(function() {
          return setTimeout(function() {
            return self.common.resetContainer();
          }, 200);
        });
      }
    });
    return module.exports = ThisView;
  });

}).call(this);
