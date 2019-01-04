$(document).ready(function () {
  // Get references to page elements
  var $inputZip = $("#input-zip");
  // var $inputAddress = $("#input-address");
  // var $inputCity = $("#input-city");
  // var $inputState = $("#input-state");
  var $searchBtnZip = $("#search-zip");
  // var $searchBtnAddress = $("#search-address");
  // var $searchBtnCity = $("#search-city");
   // var $searchBtnState = $("#search-state");
  var $searchList = $("#search-list");

  // The API object contains method for the  kind of request we'll make
  var APIZipCode = {
      getReportZipCode: function (zipcode) {
        return $.ajax({
          url: "/search/" + zipcode,
          type: "GET",
          data: zipcode
        });
      }
    };

  // var APIAddress = {
  //   getReportAddress: function (address) {
  //     return $.ajax({
  //       url: "/search/" + address,
  //       type: "GET",
  //       data: address
  //     });
  //   }
  // };

  // var APICity = {
  //   getReportCity: function (city) {
  //     return $.ajax({
  //       url: "/search/" + city,
  //       type: "GET",
  //       data: city
  //     });
  //   }
  // };

  // var APIState = {
  //   getReportState: function (state) {
  //     return $.ajax({
  //       url: "/search/" + state,
  //       type: "GET",
  //       data: state
  //     });
  //   }
  // };



  //formSubmit is called whenever we submit a  zip code refresh the list
  var formSubmitZip = function (event) {
    $searchList.empty();
    event.preventDefault();

    var zipcode = $inputZip.val().trim();


    APIZipCode.getReportZipCode(zipcode).then(function (data) {
      console.log(data);
      $searchList.append(`<br> <h3> Search result for ${zipcode} <h3>`)
      data.forEach(function (element) {
        console.log(element);

        $searchList.append(`<li> 
        <p> Location: ${element.address}, ${element.city}, ${element.state}, ${element.zipcode}<p>
        <p> Catetory: ${element.categories}<p> 
        <p> Description: ${element.violation_description} <p> </li>`)
      })

    });

    $inputZip.val("");

  };

  // //formSubmit is called whenever we submit an address
  // var formSubmitAddress = function (event) {
  //   $searchList.empty();
  //   event.preventDefault();

  //   var address = $inputAddress.val().trim();


  //   APIAddress.getReportAddress(address).then(function (data) {
  //     console.log(data);
  //     $searchList.append(`<br> <h3> Search result for ${address} <h3>`)
  //     data.forEach(function (element) {
  //       console.log(element);

  //       $searchList.append(`<li>
  //       <p> Location: ${element.city}, ${element.state}, ${element.zipcode} <p>
  //       <p> Violation Catetory: ${element.categories}<p> 
  //       <p> Violation Description: ${element.violation_description} <p> </li>`)
  //     })

  //   });

  //   $inputAddress.val("");

  // };

  // //formSubmit is called whenever we submit an address
  // var formSubmitCity = function (event) {
  //   $searchList.empty();
  //   event.preventDefault();

  //   var city = $inputCity.val().trim();


  //   APICity.getReportCity(city).then(function (data) {
  //     console.log(data);
  //     $searchList.append(`<br> <h3> Search result for ${city} <h3>`)
  //     data.forEach(function (element) {
  //       console.log(element);

  //       $searchList.append(`<li>
  //       <p> Location: ${element.address}, ${element.state}, ${element.zipcode} <p>
  //       <p> Violation Catetory: ${element.categories}<p> 
  //       <p> Violation Description: ${element.violation_description} <p> </li>`)
  //     })

  //   });

  //   $inputCity.val("");

  // };



  // Add event listeners to the submit 
  $searchBtnZip.on("click", formSubmitZip);

  // $searchBtnAddress.on("click", formSubmitAddress);
  // $searchBtnCity.on("click", formSubmitCity);
  // // $searchBtn.on("click", formSubmitState);

});
