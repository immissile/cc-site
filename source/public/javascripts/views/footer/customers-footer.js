(function() {
  define(function(require, exports, module) {
    var $, Backbone, RES, ThisView, Util, tpl, _;
    $ = require('jquery');
    Backbone = require('backbone');
    _ = require('underscore');
    Util = require('../../common/util');
    RES = require('../../common/res');
    tpl = require('../../../tpl/customers-footer.tpl');
    ThisView = Backbone.View.extend({
      initialize: function() {
        this.render();
        return this.setArrow(this.$el.find('li:first'));
      },
      events: {
        'click li': 'switchTab'
      },
      render: function() {
        var html;
        html = _.template(tpl);
        this.$el.html(html);
        return this;
      },
      setCurrentTab: function($this) {
        this.$el.find('li').removeClass('active');
        $this.addClass('active');
        return this.setArrow($this);
      },
      setArrow: function($this) {
        var $arrow;
        $arrow = this.$el.find('i.footer-arrow');
        return $arrow.css({
          left: $this.offset().left + ($this.width() - 15) / 2
        });
      },
      switchTab: function(e) {
        var $this, self, view;
        self = this;
        $this = $(e.currentTarget);
        this.setCurrentTab($this);
        $('.container-in').append('<div class="sub-body"></div>');
        view = $this.data('view');
        switch (view) {
          case 'evaluate':
            self.evaluateView();
            break;
          case 'partner':
            self.partnerView();
        }
        return this.addAnimate();
      },
      evaluateView: function() {
        var ConView, conView;
        ConView = require('../content/customers-evaluate');
        return conView = new ConView({
          el: $('.sub-body:last')
        });
      },
      partnerView: function() {
        var ConView, conView;
        ConView = require('../content/customers-partner');
        return conView = new ConView({
          el: $('.sub-body:last')
        });
      },
      addAnimate: function() {
        var $containerIn;
        $containerIn = $('.sub-section .container-in');
        $containerIn.addClass('animated fadeInUp');
        return setTimeout(function() {
          return $containerIn.removeClass('animated fadeInUp');
        }, 600);
      }
    });
    return module.exports = ThisView;
  });

}).call(this);
