hash = require("./pass").hash
User = require("./models/user")

Access =
  authenticate: (name, pass, fn) ->
    if !module.parent
      console.log('authenticating %s:%s', name, pass)

    User.findOne
      name: name
    , (err, user) ->
      if user
        hash(pass, user.salt, (err, hash) ->
          if err
            return fn err

          if hash == user.hash
            return fn null, user

          fn(new Error('invalid password'+ hash + ' #### ' + user.hash))
        )
      else
        return fn(new Error('cannot find user'))

  requiredAuthentication: (req, res, next) ->
    if req.session.user
      next()
    else
      req.session.error = "请先登陆"
      res.redirect "/admin/login?from=" + req.url

  userExist: (req, res, next) ->
    User.count
      name: req.body.name
    , (err, count) ->
      if count == 0
        next()
      else
        req.session.error = "User Exist, login only."
        res.redirect "/admin"

module.exports = Access
