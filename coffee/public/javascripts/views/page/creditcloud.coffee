define (require, exports, module) ->
  
  $ = require 'jquery'
  Backbone = require 'backbone'
  _ = require 'underscore'

  Util = require '../../common/util'
  common = require '../common'

  tpl = require '../../../tpl/page.tpl'

  ThisView = Backbone.View.extend

    sHeader: null
    
    initialize: ->
      if $('.s-header').length <= 0
        @$el.addClass 'animated slow'
      else
        @sHeader = true
      @common = common
      @render()

    render: ->
      self = @
      $wrapper = $('.wrapper')
      @$el.html tpl
      if @sHeader
        @$el.find('.sub-page').addClass 'animated slow'
      
      HeaderView = require '../header/s-header'
      headerView = new HeaderView el: $("header.s-header")

      SubHeaderView = require '../header/sub-header'
      subHeaderView = new SubHeaderView el: $('.sub-header')
      @$el.find('li[data-view=cc]').addClass 'active'

      ContainerView = require '../content/cc-about'
      $('.container-in').append('<div class="sub-body"></div>')
      containerView = new ContainerView el: $('.sub-body')
      alert 'page/creditcloud'

      setTimeout ->
        CcFooterView = require '../footer/cc-footer'
        ccFooterView = new CcFooterView el: $('.sub-footer')
        self.common.resetContainer()
      , 300

      if @sHeader
        @$el.find('.sub-page').css({top:0}).addClass 'slideInUp'
      else
        @$el.css({top:0}).addClass 'slideInUp'
      @common.removeWrapper ->
        setTimeout ->
          self.common.resetContainer()
        , 200

  module.exports = ThisView
