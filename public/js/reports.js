$(document).ready(function () {
    //console.log("ok it's running");
    //submit form with validation and modal confirmation 
    $("#reportForm").validate({
        submitHandler: function (form) {
            $("#submissionModal").modal('show');
            $('.modal-title').text('Your submission was successful');
            $('.modal-body').text('Thank you for your report.');
            $("#reportForm").click(function () {
                form.submit()
            })
            let newReport = {
                username: $("#username").val().trim(),
                address: $("#address").val().trim(),
                city: $("#city").val().trim(),
                state: $("#state").val().trim(),
                zipcode: $("#zipcode").val().trim(),
                violation_description: $("#violationDescription").val().trim(),
                categories: $("#category").val().trim(),
                rating: parseFloat($("#rating").val().trim())
            }

            console.log(newReport);

            //Ajax call to post report back into the database
            $.ajax("/api/reports", {
                type: "POST",
                data: newReport
            }).then(function () {
                console.log("New report is on database woohoo!");

            })

            $("#username").val("");
            $("#address").val("");
            $("#city").val("");
            $("#state").val("");
            $("#zipcode").val("");
            $("#violationDescription").val("");
            $("#category").val("");
            $("#rating").val("")
        }
    })
})

