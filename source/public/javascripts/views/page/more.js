(function() {
  define(function(require, exports, module) {
    var $, Backbone, ThisView, Util, tpl, tpl_about, tpl_contact, tpl_joinus, _;
    $ = require('jquery');
    Backbone = require('backbone');
    _ = require('underscore');
    Util = require('../../common/util');
    tpl = require('../../../tpl/more.tpl');
    tpl_about = require('../../../tpl/about.tpl');
    tpl_contact = require('../../../tpl/contact.tpl');
    tpl_joinus = require('../../../tpl/joinus.tpl');
    ThisView = Backbone.View.extend({
      initialize: function() {
        this.render();
        return this.bindActions();
      },
      events: {
        'click .more-close': 'close',
        'click .more-detail': 'detail'
      },
      render: function() {
        var $content, self;
        self = this;
        this.$el.html(_.template(tpl));
        $content = self.$el.find('.more-content');
        $content.css({
          marginTop: 0
        });
        $content.addClass('animated bounceInDown');
        this.$el.animate({
          opacity: 1
        }, 300);
        return this;
      },
      bindActions: function() {
        return this.$el.find('.more-close').hover(function() {
          return $(this).addClass('animated pulse');
        }, function() {
          return $(this).removeClass('animated pulse');
        });
      },
      close: function() {
        var $content, self;
        self = this;
        this.$el.animate({
          opacity: 0
        }, 1000);
        $content = this.$el.find('.more-content');
        $content.removeClass('bounceInDown');
        $content.addClass('bounceOutUp');
        return setTimeout(function() {
          return self.$el.remove();
        }, 1000);
      },
      detail: function(e) {
        var $this, view;
        $this = $(e.currentTarget);
        view = $this.data('view');
        return this.renderDetail(view);
      },
      renderDetail: function(view) {
        var _tpl;
        switch (view) {
          case 'about':
            _tpl = tpl_about;
            break;
          case 'contact':
            _tpl = tpl_contact;
            break;
          case 'joinus':
            _tpl = tpl_joinus;
        }
        this.$el.append(_tpl);
        if (view === "joinus") {
          $.ajax({
            url: '/api/recruitment'
          }).done(function(o) {
            return $(".hr-content").html(o.data.content);
          }).error(function(err) {
            var error;
            error = "抱歉~ 服务器出了点小问题，系统已自动给管理员发了警告信息，正在处理中";
            return $(".hr-content").html(error).css({
              color: "#c43"
            });
          });
        }
        $('.detail-page').addClass('animated moveInRight');
        $('button.hide-detail').hover(function() {
          return $(this).addClass('animated pulse');
        }, function() {
          return $(this).removeClass('animated pulse');
        });
        return $('button.hide-detail').bind('click', function() {
          $('.detail-page').removeClass('moveInRight').addClass('moveOutRight');
          return setTimeout(function() {
            return $('.detail-page').remove();
          }, 1000);
        });
      }
    });
    return module.exports = ThisView;
  });

}).call(this);
