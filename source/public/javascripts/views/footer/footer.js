(function() {
  define(function(require, exports, module) {
    var $, Backbone, ThisView, tpl, _;
    $ = require('jquery');
    Backbone = require('backbone');
    _ = require('underscore');
    tpl = require('../../../tpl/footer.tpl');
    ThisView = Backbone.View.extend({
      initialize: function() {
        return this.render();
      },
      events: {
        'click li': 'footer'
      },
      render: function() {
        this.$el.html(_.template(tpl, {}));
        return this;
      },
      footer: function(e) {
        var $this, self, view;
        self = this;
        $this = $(e.currentTarget);
        view = $this.data('view');
        switch (view) {
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
