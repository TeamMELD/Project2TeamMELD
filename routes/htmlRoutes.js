var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Report.findAll({}).then(function(reportdb) {
      res.render("index", {
        msg: "Welcomeeeee!",
        report: reportdb
      });
    });
  });
  
  //Load report page

  // Load example page and pass in an example by id
  app.get("/report/:id", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(reportdb) {
      res.render("report", {
        example: reportdb
      });
    });
  });


// Load example page and pass in an example by id
// app.get("/example/:id", function(req, res) {
//   db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
//     res.render("example", {
//       example: dbExample
//     });
//   });
// });



  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
