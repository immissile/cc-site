/*
Module dependencies.
App Interface
*/


(function() {
  var Cooperation, access, admin, api, app, contact, cooperation, customers, detail, express, http, joinUs, mongoose, path, product, routes, services, team;

  express = require("express");

  http = require("http");

  path = require("path");

  mongoose = require("mongoose");

  Cooperation = require("./models/cooperation");

  app = express();

  global.site = require("../config.json");

  mongoose.connect('mongodb://127.0.0.1:27017/creditcloud');

  access = require("./access");

  app.set("port", process.env.PORT || 3000);

  app.set("views", path.join(__dirname, "views"));

  app.set("view engine", "jade");

  app.use(express.bodyParser());

  app.use(express.cookieParser('Authentication Tutorial '));

  app.use(express.session());

  app.configure("development", function() {
    app.use(express.errorHandler());
    return app.locals.pretty = true;
  });

  app.use(express.favicon(path.join(__dirname, 'public/images/favicon.ico')));

  app.use(express.logger("dev"));

  app.use(express.json());

  app.use(express.urlencoded());

  app.use(express.methodOverride());

  app.use(function(req, res, next) {
    var err, msg;
    err = req.session.error;
    msg = req.session.success;
    delete req.session.error;
    delete req.session.success;
    res.locals.user = req.session.user;
    res.locals.error = err;
    return next();
  });

  global.active = {};

  global.setNav = function(_nav) {
    global.active = {};
    return global.active[_nav] = 'active';
  };

  app.use(app.router);

  app.use(require("less-middleware")({
    src: path.join(__dirname, "public/less"),
    dest: path.join(__dirname, "public/stylesheets"),
    prefix: '/stylesheets',
    compress: true
  }));

  app.use(express["static"](path.join(__dirname, "public")));

  if ("development" === app.get("env")) {
    app.use(express.errorHandler());
  }

  routes = require("./routes");

  product = require("./routes/product");

  services = require("./routes/services");

  customers = require("./routes/customers");

  team = require("./routes/team");

  contact = require('./routes/contact');

  detail = require("./routes/detail");

  joinUs = require("./routes/joinUs");

  cooperation = require("./routes/cooperation");

  admin = require("./routes/admin");

  api = require("./routes/api");

  app.get("/", routes.index);

  app.get(/^\/page-*?(?:\/(\d+)(?:\.\.(\d+))?)?/, routes.index);

  app.get("/product", product.index);

  app.get("/services", services.index);

  app.get("/customers", customers.index);

  app.get("/team", team.index);

  app.get("/contact", contact.index);

  app.get("/cooperation", cooperation.index);

  app.post("/cooperation/new", cooperation["new"]);

  app.get("/cooperation/succ", cooperation.succ);

  app.get("/admin", access.requiredAuthentication, admin.index);

  app["delete"]("/admin/cooperation", access.requiredAuthentication, admin.deleteCooperation);

  app.get("/admin/login", admin.login);

  app.post("/admin/login", admin.postLogin);

  app.get("/admin/logout", admin.logout);

  app.get("/admin/setup", admin.setup);

  app.post("/admin/setup", access.userExist, admin.postSetup);

  app.get("/admin/hr", access.requiredAuthentication, admin.hr);

  app.post("/admin/hr", access.requiredAuthentication, admin.postHr);

  app.get("/api/recruitment", api.recruitment);

  app.get("/joinUs.html", joinUs.index);

  http.createServer(app).listen(app.get("port"), function() {
    return console.log("Express server listening on port " + app.get("port"));
  });

}).call(this);
