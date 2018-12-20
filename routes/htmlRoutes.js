// var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    res.render("index");
  });

  //load report page
  app.get("/report", function(req, res) {
    res.render("./partials/report");
  });

  //load search page
  app.get("/search", function(req, res) {
    res.render("search");
  });

  //load other page
  app.get("/others", function(req, res) {
    res.render("others");
  });

  //load error page
  app.get("*", function(req, res) {
    res.render("404");
  });
};
