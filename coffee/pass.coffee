crypto = require('crypto')

len = 128
iterations = 12000

exports.hash = (pwd, salt, fn) ->
  if 3 == arguments.length
    crypto.pbkdf2 pwd, salt, iterations, len, (err, hash) ->
      hash = new Buffer(hash).toString('base64')
      fn err, hash
  else
    fn = salt
    crypto.randomBytes len, (err, salt) ->
      if err
        return fn err
      salt = salt.toString "base64"
      crypto.pbkdf2 pwd, salt, iterations, len, (err, hash) ->
        if err
          return fn err
        hash = new Buffer(hash).toString('base64')
        fn null, salt, hash
