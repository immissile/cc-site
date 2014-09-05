define (require, exports, module) ->
  
  $ = require 'jquery'
  Backbone = require 'backbone'
  _ = require 'underscore'

  Util = require '../../common/util'
  RES = require '../../common/res'

  tpl = require '../../../tpl/customers-footer.tpl'

  ThisView = Backbone.View.extend

    initialize: ->
      @render()
      @setArrow @$el.find('li:first')

    events:
      'click li': 'switchTab'

    render: ->
      html = _.template tpl
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
        when 'evaluate'
        then self.evaluateView()

        when 'partner'
        then self.partnerView()

      @addAnimate()

    evaluateView: ->
      ConView = require '../content/customers-evaluate'
      conView = new ConView el: $('.sub-body:last')

    partnerView: ->
      ConView = require '../content/customers-partner'
      conView = new ConView el: $('.sub-body:last')

    addAnimate: ->
      $containerIn = $('.sub-section .container-in')
      $containerIn.addClass 'animated fadeInUp'
      setTimeout ->
        $containerIn.removeClass 'animated fadeInUp'
      , 600

  module.exports = ThisView
