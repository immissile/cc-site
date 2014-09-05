(function() {
  define(function(require) {
    var App, Backbone;
    window.CC = {};
    CC.funs = require('../common/globalFuns');
    Backbone = require('backbone');
    App = require('../routers/router');
    new App;
    return Backbone.history.start({
      pushState: true,
      hasChange: false,
      root: '/'
    });
  });

}).call(this);
