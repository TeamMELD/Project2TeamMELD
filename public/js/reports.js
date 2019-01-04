$(document).ready(function () {
    //console.log("ok it's running");
    //submit form with submit on click button 
    $("form.report-form").on("submit", function (event) {
        event.preventDefault();

        //create variables to store value from input
        let newReport = {
            username: $("#username").val().trim(),
            address: $("#address").val().trim(),
            city: $("#city").val().trim(),
            state: $("#state").val().trim(),
            zipcode: $("#zipcode").val().trim(),
            violation_description: $("#violationDescription").val().trim(),
            categories: $("#category").val().trim(),
            rating: $("#rating").val().trim()
        };
        // console.log(newReport);

        //Ajax call to post report back into the database
        $.ajax("/api/reports", {
            type: "POST",
            data: newReport
        }).then(function () {
            console.log("New report is on database woohoo!");
            location.reload();

        });

    })
    //open modal after submission
    $(window).load(function () {
        $("#submissionModal").modal('show');
    });

});


