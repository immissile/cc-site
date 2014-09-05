define (resource, exports, module) ->
  
  Funs =
    imgLoader: (url, callback) ->
      img = new Image()
      img.onload = ->
        img.onload = img.onerror = null
        callback(img)

      img.onerror = ->
        console.log 'load img error:', img, err

      img.src = url

      if img.complete
        #callback(img.width, img.height)
        callback(img)

  module.exports = Funs
