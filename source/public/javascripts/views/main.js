(function() {
  define(function(require, exports, module) {
    var $, Backbone, ThisView, common, tpl, _;
    $ = require('jquery');
    Backbone = require('backbone');
    _ = require('underscore');
    common = require('./common');
    tpl = require('../../tpl/main.tpl');
    ThisView = Backbone.View.extend({
      initialize: function() {
        this.common = common;
        return this.render();
      },
      render: function() {
        var FooterView, HeaderView, SectionView, footerView, headerView, sectionView;
        $('.page').html("<div class=\"wrapper\">" + tpl + "</div>");
        HeaderView = require('./header/header');
        headerView = new HeaderView({
          el: $("header")
        });
        SectionView = require('./section');
        sectionView = new SectionView({
          el: $('section')
        });
        FooterView = require('./footer/footer');
        footerView = new FooterView({
          el: $('footer')
        });
        return this;
      }
    });
    return module.exports = ThisView;
  });

}).call(this);
