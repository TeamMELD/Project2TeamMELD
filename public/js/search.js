$(document).ready(function () {
  // Get references to page elements
  var $inputZip = $("#input-zip");
  var $inputCity = $("#input-city");
  var $inputState = $("#input-state");
  var $searchBtnZip = $("#search-zip");
  var $searchBtnCity = $("#search-city");
  var $searchBtnState = $("#search-state");
  var $searchList = $("#search-list");

  // The API object contains method for the  kind of request we'll make
  var APIZipCode = {
      getReportZipCode: function (zipcode) {
        return $.ajax({
          url: "/search/zipcode/" + zipcode,
          type: "GET",
          data: zipcode
        });
      }
    };

  var APICity = {
    getReportCity: function (city) {
      return $.ajax({
        url: "/search/city/" + city,
        type: "GET",
        data: city
      });
    }
  };

  var APIState = {
    getReportState: function (state) {
      return $.ajax({
        url: "/search/state/" + state,
        type: "GET",
        data: state
      });
    }
  };



  //formSubmit is called whenever we submit a  zip code refresh the list
  var formSubmitZip = function (event) {
    $searchList.empty();
    event.preventDefault();

    var zipcode = $inputZip.val().trim();


    APIZipCode.getReportZipCode(zipcode).then(function (data) {
      // console.log(data);
      $searchList.append(`<h3> Environmental Violation at ${zipcode} <h3>`)
      data.forEach(function (element) {
        // console.log(element);

        $searchList.append(`<br><li> 
        <h5> Location: ${element.address}, ${element.city}, ${element.state}, ${element.zipcode}<h5>
        <h6> Violation Catetory: ${element.categories}<h6> 
        <h6> Violation Description: ${element.violation_description} <h6>
        <i> ${moment(element.createdAt).format('MMMM Do YYYY, h:mm:ss a')}</i> 
        </li>`)
      })

    });

    $inputZip.val("");

  };

  //formSubmit is called whenever we submit an address
  var formSubmitCity = function (event) {
    $searchList.empty();
    event.preventDefault();

    var city = $inputCity.val().trim();


    APICity.getReportCity(city).then(function (data) {
      // console.log(data);
      $searchList.append(`<h3> Environmental Violation in ${city} <h3>`)
      data.forEach(function (element) {
        // console.log(element);
        $searchList.append(`<br><li>
        <h5> Location: ${element.address}, ${element.state}, ${element.zipcode} <h5>
        <h6> Violation Catetory: ${element.categories}<h6> 
        <h6> Violation Description: ${element.violation_description} <h6>
        <i> ${moment(element.createdAt).format('MMMM Do YYYY, h:mm:ss a')}</i> 
        </li>`)
      })

    });

    $inputCity.val("");

  };

  // //formSubmit is called whenever we submit a state
  var formSubmitState = function (event) {
    $searchList.empty();
    event.preventDefault();

    var state = $inputState.val().trim();


    APIState.getReportState(state).then(function (data) {
      // console.log(data);
      $searchList.append(`<h3> Environmental Violation in ${state} <h3>`)
      data.forEach(function (element) {
        // console.log(element);

        $searchList.append(`<br><li>
        <h5> Location: ${element.address}, ${element.city}, ${element.zipcode} <h5>
        <h6> Violation Catetory: ${element.categories}<h6> 
        <h6> Violation Description: ${element.violation_description} <h6>
        <i> ${moment(element.createdAt).format('MMMM Do YYYY, h:mm:ss a')}</i> 
        </li>`)
      })

    });

    $inputState.val("State");

  };



  // Add event listeners to the submit 
  $searchBtnZip.on("click", formSubmitZip);
  $searchBtnCity.on("click", formSubmitCity);
  $searchBtnState.on("click", formSubmitState);
});
