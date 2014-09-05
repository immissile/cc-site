define (require) ->

  window.CC = {}
  CC.funs = require '../common/globalFuns'

  #App = require '../views/main'
  #new App

  Backbone = require 'backbone'

  App = require '../routers/router'
  new App

  Backbone.history.start
    pushState: true
    hasChange: false
    root: '/'

  #Backbone.history.start pushState: false
