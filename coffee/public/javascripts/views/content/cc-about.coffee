define (require, exprots, module) ->
  
  $ = require 'jquery'
  Backbone = require 'backbone'
  _ = require 'underscore'

  Util = require '../../common/util'
  common = require '../common'
  RES = require '../../common/res'

  tpl = require '../../../tpl/cc-about.tpl'

  ThisView = Backbone.View.extend

    initialize: ->
      @common = common
      @render()
      @bindHover()

    render: ->
      self = @
      @$el.html _.template tpl
      @common.removeSubBody()
      @common.addAnimateText @$el
      @

    bindHover: ->
      timmer = null
      @$el.find('.team-in-list .ava-tar').hover ->
        self = @
        w = $(@).width()
        h = $(@).height()

        $ava = $(@).find('.ava')
        $ava.removeClass 'animated-'
        $ava.removeClass 'flipInY'
        $ava.removeClass 'flipInX'
        $ava.removeClass 'flipInYrev'

        if $ava.hasClass 'fli-x'
          $ava.addClass 'animated- flipInX'
        else
          $ava.addClass 'animated- flipInY'

        $title = $(@).find('h3')
        $name = $(@).find('p')
        _content = $title.height() + $name.height()
        _content = 70
        margin = ($(@).find('div:first').height() - _content) / 2
        $title.css marginTop: margin

        setTimeout ->
          $(self).find('.ava-in').fadeIn()
        , 0 #80
      , ->
        self = @
        $ava = $(self).find '.ava'
        $(self).find('.ava-in').fadeOut()
        timmer = setTimeout ->
          $ava.removeClass 'animated'
          $ava.removeClass 'flipInY'
          $ava.removeClass 'flipInX'
        , 20 #250

  module.exports = ThisView
