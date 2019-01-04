$(document).ready(function () {
    // Get references to page elements
    var $inputZip = $("#input-zip");
    var $searchBtn = $("#search");
    var $searchList = $("#search-list");

    // The API object contains method for the  kind of request we'll make
    var API = {
        getReport: function (zipcode) {
            return $.ajax({
                url: "/search/" + zipcode,
                type: "GET",
                data: zipcode
            });
        }
    };

    
 

    //formSubmit is called whenever we submit a a new zip code refresh the list
    var formSubmit = function (event) {
        $searchList.empty();
        event.preventDefault();

        var zipcode = $inputZip.val().trim();


        API.getReport(zipcode).then(function (data) {
            console.log(data);
            data.forEach(function (element) {
                console.log(element);
                $searchList.append(`<li><pre>${JSON.stringify(element)}</pre></li>`)
            })
           
        });

        $inputZip.val("");

    };
    


    // Add event listeners to the submit 
    $searchBtn.on("click", formSubmit);

});
