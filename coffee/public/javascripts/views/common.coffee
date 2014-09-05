define (require, exports, module) ->

  $ = require 'jquery'

  module.exports =

    # 清除多余wrapper
    removeWrapper: (time=500, callback)->
      if $.isFunction time
        callback = time
        time = 500

      $wp = $('.wrapper')
      arr = [0...$wp.length]
      if arr.length <= 1
        return
      setTimeout ->
        for key in arr
          if key < $wp.length - 1
            $wp.eq(key).remove()
        if callback
          callback()
      , time

    # 清除多余的sub-body
    removeSubBody: (time=80, callback) ->
      if $.isFunction time
        callback = time
        time = 500

      $body = $('.container-in .sub-body')
      arr = [0...$body.length]
      if arr.length <= 1
        return
      setTimeout ->
        for key in arr
          if key < $body.length - 1
            $body.eq(key).remove()
        if callback
          callback()
      , time
    
    resetContainer: ($container=$('.container-in'))->
      h_header = $('.s-header').height()
      h_subHeader = $('.sub-header').height()
      h_subFooter = $('.sub-footer').height()

      reset_height = $(window).height() - (h_header + h_subHeader + h_subFooter)
      $container.height reset_height

    addAnimateText: (el, callback) ->
      setTimeout ->
        $text = el.find('.animate-text')
        $text.removeClass 'fadeInLeft'
        setTimeout ->
          $text.addClass 'animated fadeInLeft'
        , 1
        if callback
          callback()
      , 1000

