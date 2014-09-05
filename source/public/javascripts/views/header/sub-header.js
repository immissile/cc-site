(function() {
  define(function(require, exports, module) {
    var $, Backbone, RES, ThisView, Util, tpl, _;
    $ = require('jquery');
    Backbone = require('backbone');
    _ = require('underscore');
    Util = require('../../common/util');
    RES = require('../../common/res');
    tpl = require('../../../tpl/sub-header.tpl');
    ThisView = Backbone.View.extend({
      id: 'ID-sub-header',
      className: 'sub-header',
      initialize: function() {
        return this.render();
      },
      events: {
        'click li': 'subHeader'
      },
      render: function() {
        var html;
        html = _.template(tpl, {
          logo: RES.landing
        });
        this.$el.html(html);
        return this;
      },
      subHeader: function(e) {
        var $this, self, sub_view;
        self = this;
        $this = $(e.currentTarget);
        sub_view = $this.data('view');
        this.$el.find('li').removeClass('active');
        $this.addClass('active');
        switch (sub_view) {
          case 'cc':
            return self.creditCloud();
          case 'products':
            return self.products();
          case 'customers':
            return self.customers();
        }
      },
      creditCloud: function() {
        return Backbone.history.navigate("/page-cc", true);
      },
      products: function() {
        return Backbone.history.navigate("/page-products", true);
      },
      customers: function() {
        return Backbone.history.navigate("/page-customers", true);
      }
    });
    return module.exports = ThisView;
  });

}).call(this);
