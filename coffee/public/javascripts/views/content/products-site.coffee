define (require, exprots, module) ->
  
  $ = require 'jquery'
  Backbone = require 'backbone'
  _ = require 'underscore'

  Util = require '../../common/util'
  common = require '../common'
  RES = require '../../common/res'

  tpl = require '../../../tpl/products-site.tpl'
  tpl_a = require '../../../tpl/detail-products-oper-1.tpl'
  tpl_b = require '../../../tpl/detail-products-oper-2.tpl'
  tpl_c = require '../../../tpl/detail-products-oper-3.tpl'

  ThisView = Backbone.View.extend

    initialize: ->
      @common = common
      @render()
      #@bindActions()
    
    events:
      'click li': 'detail'

    render: ->
      self = @
      @$el.html _.template tpl
      @$el.addClass 'site-bg-1'
      @common.removeSubBody()
      @common.addAnimateText @$el
      @

    detail: (e) ->
      $this = $(e.currentTarget)
      self = @
      view = $this.data 'view'
      @renderDetail view

    renderDetail: (view) ->
      $section = $('.sub-section')
      $detail = $section.find('.detail-page')
      switch view
        when 'tech-a'
        then _tpl = tpl_a

        when 'tech-b'
        then _tpl = tpl_b

        when 'tech-c'
        then _tpl = tpl_c
      $section.append _tpl
      $('.detail-page').addClass 'animated moveInRight'

      $('button.hide-detail').hover ->
        $(@).addClass 'animated pulse'
      , ->
        $(@).removeClass 'animated pulse'

      $('button.hide-detail').bind 'click', ->
        $('.detail-page').removeClass('moveInRight').addClass('moveOutRight')
        setTimeout ->
          $('.detail-page').remove()
        , 1000

    bindActions: ->
      self = @
      $body = $('.sub-body')
      arr = [
        RES.banner_pro_1
        RES.home
        RES.banner_a
        RES.banner_b
      ]
      setTimeout ->
        len = arr.length
        currentImg = 0
        window.bgTimmer = setInterval ->
          #self.$el.css 'background-image', arr[currentImg
          self.$el.attr 'style', "background-image: url(#{arr[currentImg]})"
          #self.$el.html arr[currentImg]
          if currentImg+1 == len
            currentImg = 0
          else
            currentImg++
        , 3000
      , 1000

  module.exports = ThisView
