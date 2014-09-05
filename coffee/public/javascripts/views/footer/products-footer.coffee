define (require, exports, module) ->
  
  $ = require 'jquery'
  Backbone = require 'backbone'
  _ = require 'underscore'

  Util = require '../../common/util'

  tpl = require '../../../tpl/products-footer.tpl'

  ThisView = Backbone.View.extend

    initialize: ->
      @render()
      @setArrow @$el.find('li:first')

    events:
      'click li': 'switchTab'

    render: ->
      html = _.template tpl, {}
      @$el.html html
      @

    setCurrentTab: ($this) ->
      @$el.find('li').removeClass 'active'
      $this.addClass 'active'
      @setArrow $this

    setArrow: ($this) ->
      $arrow = @$el.find('i.footer-arrow')
      $arrow.css left: $this.offset().left + ($this.width()-15)/2

    switchTab: (e) ->
      self = @
      $this = $(e.currentTarget)
      @setCurrentTab $this
      $('.container-in').append('<div class="sub-body"></div>')
      
      view = $this.data 'view'
      switch view
        when 'site'
        then self.siteView()

        when 'client'
        then self.clientView()

        when 'operations'
        then self.operationsView()

      @addAnimate()

    siteView: ->
      ConView = require '../content/products-site'
      conView = new ConView el: $('.sub-body:last')

    clientView: ->
      ConView = require '../content/products-client'
      conView = new ConView el: $('.sub-body:last')

    operationsView: ->
      ConView = require '../content/products-operations'
      conView = new ConView el: $('.sub-body:last')

    switchView: (view) ->
      #console.lgo 1
      

    addAnimate: ->
      $containerIn = $('.sub-section .container-in')
      $containerIn.addClass 'animated fadeInUp'
      setTimeout ->
        $containerIn.removeClass 'animated fadeInUp'
      , 600

  module.exports = ThisView
