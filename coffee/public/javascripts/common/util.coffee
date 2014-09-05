define (require, exports, module) ->
  
  module.exports =
    
    # 获取对象长度
    countLength: (obj) ->
      o = typeof obj
      len = 0
      if o == 'string'
        len = obj.length
      else if o == 'object'
        n = 0
        for k of obj
          n++
        len = n

      len
