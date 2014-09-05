$ ->
  $(window).scroll ->
    if $(".navbar").offset().top > 30
      $(".navbar-fixed-top").addClass "sticky"
    else
      $(".navbar-fixed-top").removeClass "sticky"
    return

  
  # Flex
  $(".flexslider").flexslider()  if $(".flexslider").length
  servicesCircle.initialize()
  staticHeader.initialize()
  portfolioItem.initialize()
  
  # segun esto corrige el pedo del dropdown en tablets and such
  # hay que testearlo!
  $(".dropdown-toggle").click (e) ->
    e.preventDefault()
    setTimeout $.proxy(->
      $(this).siblings(".dropdown-backdrop").off().remove()  if "ontouchstart" of document.documentElement
      return
    , this), 0
    return

  return

portfolioItem = initialize: ->
  $container = $("#portfolio_tem .left_box")
  $bigPics = $container.find(".big img")
  $thumbs = $container.find(".thumbs .thumb")
  $bigPics.hide().eq(0).show()
  $thumbs.click (e) ->
    e.preventDefault()
    index = $thumbs.index(this)
    $bigPics.fadeOut()
    $bigPics.eq(index).fadeIn()
    return

  return

staticHeader = initialize: ->
  $("body").css "padding-top", 0  if $(".navbar-static-top").length
  return

servicesCircle = initialize: ->
  $container = $(".services_circles")
  $texts = $container.find(".description .text")
  $circles = $container.find(".areas .circle")
  $circles.click ->
    index = $circles.index(this)
    $texts.fadeOut()
    $texts.eq(index).fadeIn()
    $circles.removeClass "active"
    $(this).addClass "active"
    return

  return
