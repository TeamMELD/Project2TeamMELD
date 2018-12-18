var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Report.findAll({}).then(function(data) {
      res.render("index", {
        msg: "Welcome!",
        examples: data
      });
    });
  });
  
  //Load report page

  // Load search page
  app.get("/example/:id", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
      res.render("example", {
        example: dbExample
      });
    });
  });

  //Load search page for zipcode

  //load search page for articles related to issue
  

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
