$(document).ready(function(){
  $("form.zip-form").on("submit", function(event){
    event.preventDefault();
    let search = $("#InputZip").val().trim()
    console.log(search);
    })
})