define (require, exports, module) ->

  $ = require 'jquery'
  Backbone = require 'backbone'
  
  Util = require '../common/util'
  RES = require '../common/res'
  common = require '../views/common'

  AppRouter = Backbone.Router.extend

    currentView: null
    
    initialize: ->
      self = @
      @common = common
      @res = RES
      @resLoaded = false

    routes:
      ''                : 'home'
      'page-:view*'      : 'page'

    ## 载入资源文件
    loadRes: (callback) ->
      self = @

      if @resLoaded
        callback()
        return

      counter = 0

      # 载入时间过长时提示用户
      $tips = $('.landing-tips')
      setTimeout ->
        $tips.addClass 'animated fadeInUp'
      , 5000
      setTimeout ->
        $tips.addClass 'animated fadeOutUp'
        setTimeout ->
          $tips.removeClass 'animated fadeInUp fadeOutUp'
          $tips.text '载入文件较多，再等等看~'
          $tips.addClass 'animated fadeInUp'
        , 200
        setTimeout ->
          $tips.addClass 'animated fadeOutUp'
          setTimeout ->
            $tips.removeClass 'animated fadeInUp fadeOutUp'
            $tips.text '看样子你得刷新页面重新加载一次了 >_<'
            $tips.addClass 'animated fadeInUp'
          , 200
        , 10000
      , 10000

      for key of @res
        prefix = '?v=' + new Date().getTime()
        #url = self.res[key] #+ prefix
        url = self.res['home'] #+ prefix
        CC.funs.imgLoader url, (o) ->
          counter++
          if counter == Util.countLength self.res
            self.resLoaded = true
            # fadeout & remove landing wrapper
            $('.landing-status').addClass('fadeOutUp animated')
            setTimeout ->
              $landing = $('#landing')
              $landing.fadeOut()
              setTimeout ->
                $landing.remove()
              , 1000
              callback()
            , 1000

    newWrapper: ->
      $('.page').append '<div class="wrapper"></div>'

    # 首页
    home: ->
      self = @
      @loadRes ->
        App = require '../views/main'
        self.newWrapper()
        new App

    #;q 各个page view
    page: (page)->
      #console.log 'page: ', page
      self = @
      @loadRes ->
        self.newWrapper()
        PageView = require '../views/page/page'
        new PageView
          el: $('.wrapper:last')
          currentView: page

    switchView: (view) ->
      if @currentView
        @currentView.remove()

      @currentView = view

  module.exports = AppRouter
