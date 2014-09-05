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
      initialize: function(e) {
        this.currentView = e.currentView;
        if ($('.s-header').length <= 0) {
          this.$el.addClass('animated slow');
        } else {
          this.sHeader = true;
        }
        this.common = common;
        return this.render();
      },
      render: function() {
        var $wrapper, ANIMATION, HeaderView, SubHeaderView, headerView, self, subHeaderView;
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
        this.$el.find("li[data-view=" + this.currentView + "]").addClass('active');
        switch (this.currentView) {
          case 'cc':
            self.renderCreditcloud();
            break;
          case 'products':
            self.renderProducts();
            break;
          case 'customers':
            self.renderCustomers();
        }
        ANIMATION = 'fadeInUpBig';
        if (this.sHeader) {
          this.$el.find('.sub-page').css({
            top: 0
          }).addClass(ANIMATION);
        } else {
          this.$el.css({
            top: 0
          }).addClass(ANIMATION);
        }
        this.common.removeWrapper();
        this.resetDom();
        return $(window).resize(function() {
          return self.resetDom();
        });
      },
      resetDom: function() {
        var h_h, h_s, h_sub_footer;
        h_h = $('.s-header').height();
        h_s = $('.sub-header').height();
        $('.sub-page').height($(window).height() - h_h - h_s);
        h_sub_footer = $(".sub-footer").height();
        if ($(window).width() < 700) {
          return $('.container-in').height($('.sub-page').height());
        } else {
          return $('.container-in').height($('.sub-page').height() - 84);
        }
      },
      renderCreditcloud: function() {
        var ContainerView, containerView, self;
        self = this;
        ContainerView = require('../content/cc-about');
        containerView = new ContainerView({
          el: $('.sub-body:last')
        });
        return setTimeout(function() {
          var CcFooterView, ccFooterView;
          CcFooterView = require('../footer/cc-footer');
          return ccFooterView = new CcFooterView({
            el: $('.sub-footer')
          });
        }, 300);
      },
      renderProducts: function() {
        var ContainerView, containerView, self;
        self = this;
        ContainerView = require('../content/products-site');
        containerView = new ContainerView({
          el: $('.sub-body:last')
        });
        return setTimeout(function() {
          var FooterView, footerView;
          FooterView = require('../footer/products-footer');
          return footerView = new FooterView({
            el: $('.sub-footer')
          });
        }, 300);
      },
      renderCustomers: function() {
        var ContainerView, containerView, self;
        self = this;
        ContainerView = require('../content/customers-evaluate');
        containerView = new ContainerView({
          el: $('.sub-body:last')
        });
        return setTimeout(function() {
          var FooterView, footerView;
          FooterView = require('../footer/customers-footer');
          return footerView = new FooterView({
            el: $('footer.sub-footer')
          });
        }, 300);
      }
    });
    return module.exports = ThisView;
  });

}).call(this);
