$(document).ready(function () {
    // submit button for reports
    $("#submitButton").on("click", function (event) {
        event.preventDefault();

        //create variables to store value from input
        let report = {
            username: $("#username").val().trim(),
            address: $("#address").val().trim(),
            city: $("#city").val().trim(),
            state: $("#state").val().trim(),
            zipcode: $("#zipcode").val().trim(),
            violation_description: $("#violationDescription").val().trim(),
            categories: $("#category").val().trim(),
            rating: $("rating").val().trim()
        };
        console.log(report)

        $.post("/api/reports", report)
            .then(function () {
                console.log("On database woohoo!")
            })
    });
});
