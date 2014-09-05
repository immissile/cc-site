define (require) ->

  $ = require 'jquery'
  window.$ = $

  window.CC = {}


  $("form").find("input").blur ->
    if $(@).val() != ""
      $(@).removeClass "error"
      $(@).addClass "succ"
    else
      $(@).removeClass "succ"
      $(@).addClass "error"

  $("form").find("input").focus ->
      $(@).removeClass "error"
      $(@).removeClass "succ"

  $("form").submit (e)->

    notice = (obj) ->
      e.preventDefault()
      obj.addClass "error"

    pass = (obj) ->
      obj.removeClass "error"
      obj.addClass "succ"

    $name = $("#name")
    $mobile = $("#mobile")
    $company = $("#company")
    
    if $.trim($name.val()) == ""
      notice $name
    else
      pass $name

    if $.trim($mobile.val()) == ""
      notice $mobile
    else
      pass $mobile

    if $.trim($company.val()) == ""
      notice $company
    else
      pass $company

