$(document).ready(function () {
    //console.log("ok it's running");
    //submit form with submit on click button 
    $("form").on("submit", function (event) {
        event.preventDefault();
        console.log("In submit")
        //create variables to store value from input
        // check the type of input
        // check the exist 
        // HTML5 validation ... EA is working on this today (1/6)
        // let username = $("#username").val().trim();
        // if(!username.length > 3 || typeof username != 'string' ){
            
        //     $("#submissionModal").modal('show');
        //     $('.modal-title').text('Submission Error')
        //     $('.modal-body').text('Invalid Name; needs more than 3 characters.')
        // }
        // username.addEventListener("input", function (event) {
        //     if (username.validity.typeMismatch) {
        //       username.setCustomValidity("Please enter a full name of more than 3 characters");
        //     } else {
        //       username.setCustomValidity("");
        //     }
        //   });
        //   let zipcode = $("#zipcode").val().trim();
        //   zipcode.addEventListener("input", function (event) {
        //     if (zipcode.validity.typeMismatch) {
        //       zipcode.setCustomValidity("Please enter a 5 digit zip code");
        //     } else {
        //       zipcode.setCustomValidity("");
        //     }
        //   });

        let newReport = {
            username: $("#username").val().trim(),
            address: $("#address").val().trim(),
            city: $("#city").val().trim(),
            state: $("#state").val().trim(),
            zipcode: $("#zipcode").val().trim(),
            violation_description: $("#violationDescription").val().trim(),
            categories: $("#category").val().trim(),
            rating: parseFloat($("#rating").val().trim())
        };
       
         console.log(newReport);

        //Ajax call to post report back into the database
        $.ajax("/api/reports", {
            type: "POST",
            data: newReport
        }).then(function () {
            console.log("New report is on database woohoo!");
            $("#submissionModal").modal('show');
            $('.modal-title').text('Your submission was successful')
            $('.modal-body').text('Thank you for your report.')
            
            $("#username").val("")
            $("#address").val("")
            $("#city").val("")
            $("#state").val("")
            $("#zipcode").val("")
            $("#violationDescription").val("")
            $("#category").val("")
            $("#rating").val("")
            
        });

    })
    //open modal after submission
  

});


