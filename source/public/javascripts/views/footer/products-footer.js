(function() {
  define(function(require, exports, module) {
    var $, Backbone, ThisView, Util, tpl, _;
    $ = require('jquery');
    Backbone = require('backbone');
    _ = require('underscore');
    Util = require('../../common/util');
    tpl = require('../../../tpl/products-footer.tpl');
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
        html = _.template(tpl, {});
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
          case 'site':
            self.siteView();
            break;
          case 'client':
            self.clientView();
            break;
          case 'operations':
            self.operationsView();
        }
        return this.addAnimate();
      },
      siteView: function() {
        var ConView, conView;
        ConView = require('../content/products-site');
        return conView = new ConView({
          el: $('.sub-body:last')
        });
      },
      clientView: function() {
        var ConView, conView;
        ConView = require('../content/products-client');
        return conView = new ConView({
          el: $('.sub-body:last')
        });
      },
      operationsView: function() {
        var ConView, conView;
        ConView = require('../content/products-operations');
        return conView = new ConView({
          el: $('.sub-body:last')
        });
      },
      switchView: function(view) {},
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
