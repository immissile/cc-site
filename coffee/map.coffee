#_ = require('underscore')

# inArray func
inArray = (elem, array, i) ->
  len = undefined
  if array
    len = array.length
    i = (if i then (if i < 0 then Math.max(0, len + i) else i) else 0)
    while i < len
      return i  if i of array and array[i] is elem
      i++
  -1

exports.HavePermission = (uname, page,  map) ->
  map = map or global.AccessMap
  if map[page]
    if inArray(uname, map[page]) == -1
      false
    else
      true
  else
    false

exports.AccessMap =
  cooperation: [
    'ccadmin'
    'admin'
    'missile'
  ]
  contact: [
    'ccadmin'
    'admin'
    'missile'
  ]
  hr: [
    'ccadmin'
    'admin'
    'hr'
  ]
  account: [
    'ccadmin'
    'admin'
  ]
