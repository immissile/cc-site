define (require, exports, module) ->
  
  $ = require 'jquery'
  Backbone = require 'backbone'
  _ = require 'underscore'

  Util = require '../../common/util'
  RES = require '../../common/res'

  tpl = require '../../../tpl/s-header.tpl'
  tpl_more = require '../../../tpl/more.tpl'

  ThisView = Backbone.View.extend

    initialize: ->
      @render()

    events:
      'click .logo': 'goHome'
      'click .go-back': 'back'
      'click .show-more .btn-more': 'more'

    render: ->
      html = _.template tpl, {logo: RES.landing}
      @$el.html html
      @

    goHome: ->
      Backbone.history.navigate "/", true

    back: ->
      #window.history.back -1
      Backbone.history.navigate "/", true

    more: (e) ->
      $this = $(e.currentTarget)
      self = @
      $page = $('.page')
      $page.append('<div class="more-wrap"></div>')
      MoreView = require '../page/more'
      moreView = new MoreView el: $('.more-wrap')


  module.exports = ThisView
