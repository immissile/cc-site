define (require, exports, module) ->

  $ = require 'jquery'
  Backbone = require 'backbone'
  _ = require 'underscore'

  common = require './common'
  tpl = require '../../tpl/main.tpl'

  ThisView = Backbone.View.extend

    initialize: ->
      @common = common
      @render()

    render: ->
      $('.page').html """<div class="wrapper">#{tpl}</div>"""
      HeaderView = require './header/header'
      headerView = new HeaderView el: $("header")

      SectionView = require './section'
      sectionView = new SectionView el: $('section')

      FooterView = require './footer/footer'
      footerView = new FooterView el: $('footer')

      @

  module.exports = ThisView
