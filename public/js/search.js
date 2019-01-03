$(document).ready(function() {
  // Get references to page elements
  var $inputZip = $("#input-zip");
  var $searchBtn = $("#search");
  var $searchList = $("#search-list");

  // The API object contains methods for each kind of request we'll make
  var API = {
    getReport: function(zipcode) {
      return $.ajax({
        url: "/search/" + zipcode,
        type: "GET",
        data: zipcode
      });
    }
  };

  // refreshSearch gets new reports from the db and repopulates the list
  var refreshSearch = function() {
    API.getReport().then(function(data) {
      let $reports = data.map(function(report) {
        var $a = $("<a>")
          .text(report.text)
          .attr("href", "/report/" + report.id);

        var $li = $("<li>")
          .attr({
            class: "search-group-zip",
            "data-id": report.id
          })
          .append($a);

        var $button = $("<button>")
          .addClass("btn btn-danger float-right delete")
          .text("ｘ");

        $li.append($button);

        return $li;
      });

      $searchList.empty();
      $searchList.append($reports);
    });
  };

  // handleFormSubmit is called whenever we submit a new report
  // Save the new report to the db and refresh the list
  var handleFormSubmit = function (event) {
    event.preventDefault();

    var location = {
      zipcode: $inputZip.val().trim()
      //description: $reportDescription.val().trim()
    };
    //   if (!(report.text && report.description)) {
    //     alert("You must enter an report text and description!");
    //     return;
    //   }

    API.getReport(location).then(function (response) {
      console.log(response);
      refreshSearch();
    });

    $inputZip.val("");
    //$reportDescription.val("");
  };

  // handleDeleteBtnClick is called when an report's delete button is clicked
  // Remove the report from the db and refresh the list
  var handleDeleteBtnClick = function () {
    var idToDelete = $(this)
      .parent()
      .attr("data-id");

    API.deletereport(idToDelete).then(function() {
      refreshSearch();
    });
  };

  // Add event listeners to the submit and delete buttons
  $searchBtn.on("click", handleFormSubmit);
  $searchList.on("click", ".delete", handleDeleteBtnClick);
});
