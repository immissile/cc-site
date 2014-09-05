(function() {
  define(function(require, exports, module) {
    var $, Backbone, RES, ThisView, Util, tpl, _;
    $ = require('jquery');
    Backbone = require('backbone');
    _ = require('underscore');
    Util = require('../../common/util');
    RES = require('../../common/res');
    tpl = require('../../../tpl/header.tpl');
    ThisView = Backbone.View.extend({
      id: 'ID-header',
      className: 'header',
      initialize: function() {
        return this.render();
      },
      events: {
        'click .logo': 'goHome',
        'click .show-more .btn-more': 'more'
      },
      render: function() {
        var html;
        html = _.template(tpl, {
          logo: RES.landing
        });
        this.$el.html(html);
        return this;
      },
      goHome: function() {
        return Backbone.history.navigate("/", true);
      },
      more: function(e) {
        var $page, $this, MoreView, moreView, self;
        $this = $(e.currentTarget);
        self = this;
        $page = $('.page');
        $page.append('<div class="more-wrap"></div>');
        MoreView = require('../page/more');
        return moreView = new MoreView({
          el: $('.more-wrap')
        });
      }
    });
    return module.exports = ThisView;
  });

}).call(this);
