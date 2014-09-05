(function() {
  define(function(require, exprots, module) {
    var $, Backbone, RES, ThisView, Util, common, tpl, _;
    $ = require('jquery');
    Backbone = require('backbone');
    _ = require('underscore');
    Util = require('../../common/util');
    common = require('../common');
    RES = require('../../common/res');
    tpl = require('../../../tpl/customers-partner.tpl');
    ThisView = Backbone.View.extend({
      initialize: function() {
        this.common = common;
        return this.render();
      },
      render: function() {
        var self;
        self = this;
        this.$el.html(_.template(tpl));
        this.common.removeSubBody();
        return this;
      }
    });
    return module.exports = ThisView;
  });

}).call(this);
