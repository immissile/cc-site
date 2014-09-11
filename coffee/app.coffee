###
Module dependencies.
App Interface
###

express = require("express")
http = require("http")
path = require("path")
mongoose = require("mongoose")
Cooperation = require("./models/cooperation")
app = express()

## global config
global.site = require("../config.json")

# init mongo
mongoose.connect('mongodb://127.0.0.1:27017/creditcloud')

access = require("./access")

# all environments
app.set "port", process.env.PORT or 3000
app.set "views", path.join(__dirname, "views")
app.set "view engine", "jade"
app.use(express.bodyParser())
app.use(express.cookieParser('Authentication Tutorial '))
app.use(express.session())

# compress html or not
app.configure "development", ->
  app.use express.errorHandler()
  # 压缩html
  app.locals.pretty = true
  #app.locals.pretty = false

app.use(express.favicon(path.join(__dirname,'public/images/favicon.ico')))
app.use express.logger("dev")
app.use express.json()
app.use express.urlencoded()
app.use express.methodOverride()

app.use (req, res, next) ->
  err = req.session.error
  msg = req.session.success

  delete req.session.error
  delete req.session.success

  res.locals.user = req.session.user
  res.locals.error = err

  next()

global.active = {}
global.setNav = (_nav) ->
  global.active = {}
  global.active[_nav] = 'active'

app.use app.router
app.use(
  require("less-middleware")(
    src: path.join(__dirname, "public/less")
    dest: path.join(__dirname, "public/stylesheets")
    prefix: '/stylesheets'
    # 压缩css
    #compress: false
    compress: true
  )
)
app.use express.static(path.join(__dirname, "public"))

# development only
app.use express.errorHandler()  if "development" is app.get("env")

routes = require("./routes")
product = require("./routes/product")
services = require("./routes/services")
customers = require("./routes/customers")
team = require("./routes/team")
detail = require("./routes/detail")
joinUs = require("./routes/joinUs")
cooperation = require("./routes/cooperation")
admin = require("./routes/admin")
api = require("./routes/api")

# 首页
app.get "/", routes.index
app.get /^\/page-*?(?:\/(\d+)(?:\.\.(\d+))?)?/, routes.index
#app.get "/user*?", routes.index

app.get "/product", product.index
app.get "/services", services.index
app.get "/customers", customers.index
app.get "/team", team.index

# detail 
#app.get "/detail*?", detail.list

# 商务合作
app.get "/cooperation", cooperation.index
app.post "/cooperation/new", cooperation.new
app.get "/cooperation/succ", cooperation.succ

# 管理后台
app.get "/admin", access.requiredAuthentication, admin.index
app.delete "/admin/cooperation", access.requiredAuthentication, admin.deleteCooperation
app.get "/admin/login", admin.login
app.post "/admin/login", admin.postLogin
app.get "/admin/logout", admin.logout
app.get "/admin/setup", admin.setup
app.post "/admin/setup", access.userExist, admin.postSetup
app.get "/admin/hr", access.requiredAuthentication, admin.hr
app.post "/admin/hr", access.requiredAuthentication, admin.postHr

# api
app.get "/api/recruitment", api.recruitment

#joinUs
app.get "/joinUs.html", joinUs.index

http.createServer(app).listen app.get("port"), ->
  console.log "Express server listening on port " + app.get("port")
