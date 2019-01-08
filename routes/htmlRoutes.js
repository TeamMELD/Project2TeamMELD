var db = require("../models");
var sequelize = require ("sequelize");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Report.findAll({
      limit: 4, order:[['createdAt', 'DESC']]
    }).then(function(reportdb) {
      res.render("index", {
        msg: "Your source to search and report environmental concerns.",
        report: reportdb
      });
    });
  });
  //load report page
  app.get("/report", function(req, res) {
    res.render("report");
  });

  //load search page
  app.get("/search", function(req, res) {
    res.render("search")
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
