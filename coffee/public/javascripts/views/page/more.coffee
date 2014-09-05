define (require, exports, module) ->
  
  $ = require 'jquery'
  Backbone = require 'backbone'
  _ = require 'underscore'

  Util = require '../../common/util'
  tpl = require '../../../tpl/more.tpl'
  tpl_about = require '../../../tpl/about.tpl'
  tpl_contact = require '../../../tpl/contact.tpl'
  tpl_joinus = require '../../../tpl/joinus.tpl'

  ThisView = Backbone.View.extend
    
    initialize: ->
      @render()
      @bindActions()

    events:
      'click .more-close': 'close'
      'click .more-detail': 'detail'

    render: ->
      self = @
      @$el.html _.template tpl
      $content = self.$el.find '.more-content'
      $content.css marginTop: 0
      $content.addClass 'animated bounceInDown'
      @$el.animate
        opacity: 1
      , 300
      @

    bindActions: ->
      @$el.find('.more-close').hover ->
        $(@).addClass 'animated pulse'
      , ->
        $(@).removeClass 'animated pulse'

    close: ->
      self = @
      @$el.animate
        opacity: 0
      , 1000
      $content = @$el.find('.more-content')
      $content.removeClass 'bounceInDown'
      $content.addClass 'bounceOutUp'
      setTimeout ->
        self.$el.remove()
      , 1000
    
    detail: (e) ->
      $this = $(e.currentTarget)
      view = $this.data 'view'
      @renderDetail view

    renderDetail: (view) ->
      switch view
        when 'about'
        then _tpl = tpl_about

        when 'contact'
        then _tpl = tpl_contact

        when 'joinus'
        then _tpl = tpl_joinus
      @$el.append _tpl
      if view == "joinus"
        $.ajax
          url: '/api/recruitment'
        .done (o) ->
          $(".hr-content").html o.data.content
        .error (err) ->
          error = "抱歉~ 服务器出了点小问题，系统已自动给管理员发了警告信息，正在处理中"
          $(".hr-content").html(error)
          .css
            color: "#c43"

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


  module.exports = ThisView
