define (require, exports, module) ->
  
  $ = require 'jquery'
  window.$ = $
  Backbone = require 'backbone'
  _ = require 'underscore'

  Util = require '../common/util'
  RES = require '../common/res'

  tpl = require '../../tpl/container.tpl'

  ThisView = Backbone.View.extend
    
    id: 'home-container'

    initialize: ->
      self = @
      @resize()
      @render()

      $(window).resize ->
        self.resize()

    resize: ->
      w = $('.header').height() + $('.footer').height()
      @$el.height $(window).height() - w

    render: ->
      self = @
      container = _.template tpl
      @$el.html container

      setTimeout ->
        $homeSlider = $(".home-slider")
        $homeSlider.css
          top: (self.$el.height() - $(".footer").height() - $homeSlider.height()) / 2
      , 5

  module.exports = ThisView
