//CANT CALL CLIENT SIDE NPM!!!
//        var Sentiment = require('sentiment');
// var sentiment = new Sentiment();

// Global Variable Declaration (scoping fix)
var allFieldsCompleted;

// this is the picture upload function
$("#form-picture").submit(function(event) {
    event.preventDefault();

    var data = new FormData();
    $.each($("#survey-picture")[0].files, function(i, file) {
        console.log("file", file);
        data.append("file-" + i, file);
    });

    $.ajax({
        url: "/api/uploadfile",
        data: data,
        cache: false,
        contentType: false,
        processData: false,
        method: "POST",
        type: "POST", // For jQuery < 1.9
        success: function(data) {
            console.log("success", data);
        }
    });
});

//  Document ready function enables that the submit button function gets set
//  after the document is ready.    
$(document).ready(function() {
    $("#submitButton").on("click", function(event) {
        console.log("submit button click");
        // do a validation on the password.
        var pwd= function validatePassword(){            
            var fp1=$("#formPassword1").val().trim();
            var fp2=$("#formPassword2").val().trim();
            if(fp1===fp2){
                var pword=$("#formPassword2").val().trim(); 
                return pword;
            }
            else{
                // Remove this alert!  Use modal
                alert("Passwords must match.");
                return;
            }          
        }

        // Time to create the user info object from the info on the page/form.
        var userInfo = {};

        // Find each form-control on the page.  Filter out any that we don't want to
        // see.
        $(".form-control").each(function() {
            if (this.name != "questionnaire" && 
                this.name != null && 
                this.name != undefined && 
                ! this.name.startsWith("pass") &&
                this.name.trim() != "") {
                userInfo[this.name] = $(this).val().trim();
            }
        });

        userInfo.bio = $("#form-bio").val().trim();
    
        userInfo.password = $("#formPassword1").val().trim();
        userInfo.profilepic = $("#survey-picture").val().trim();
        userInfo.sentimentScore = 0;   // Calculated on the back side.
        
        userInfo.surveyAnswers = []

        // All the questions are part of the 'sample' class.  Can 
        // use jquery to get them all and put them into an array.
        // Blank answers are... blank.
        $(".sample").each(function(){
        userInfo.surveyAnswers.push($(this).val().trim());
        });

        console.log(userInfo);

        // Now post the user object to the API.   It will do the rest (add, calculate score, etc.)
        $.ajax({
                method: "POST",
                url: "/api/users",
                data: userInfo
              }).then(function(data) {
                console.log(data);
                alert("Adding user...");
                });

    //empties fields after submission
        $(".form-control").each(function() {
            $(this).val("");
        });
    });
});

// Form validation
function validateForm() {
    var isValid = true;
    $(".form-control").each(function() {
        if ($(this).val() === "") isValid = false;
    });
    // $('.chosen-select').each(function() {
    //     if ($(this).val() === "")
    //         isValid = false
    // })
    return isValid;
}