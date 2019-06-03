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
        url: "/api/users/uploadprofilepic",
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
        var uploadFilePath = $("#survey-picture").val().trim();
        if (uploadFilePath != null && uploadFilePath != undefined) {
            var pathEnd = uploadFilePath.lastIndexOf('\\');
            if (pathEnd > 0) {
                userInfo.profilepic = uploadFilePath.substring(pathEnd,uploadFilePath.length);
            }
            else {
                userInfo.profilepic = uploadFilePath;
            }
        }
        userInfo.sentimentScore = 0;   // Calculated on the back side.
        
        userInfo.surveyAnswers = []

        // All the questions are part of the 'sample' class.  Can 
        // use jquery to get them all and put them into an array.
        // Blank answers are... blank.
        $(".sample").each(function(){
            userInfo.surveyAnswers.push($(this).val().trim());
        });

        // Comment this out when live.
        if (userInfo.firstname == "test") {
            userindex = parseInt(userInfo.lastname);
            userInfo.lastname = "user";
            userInfo.password = "password" + userindex;
            userInfo.screenname = "screenname" + userindex;
            userInfo.email = "email" + userindex;
            userInfo.profilepic = "bearhead.jpg";
            userInfo.locale = "here";
            userInfo.age = 33;
            userInfo.bio = "Never argue with a fool.  They will pull you down to their level ";
            userInfo.bio += "and beat you with experience.";
            for (var i=0; i<10; i++) {
                userInfo.surveyAnswers[i] = "terrific";
            }
        }

        console.log(userInfo);

        // Now post the user object to the API.   It will do the rest (add, calculate score, etc.)
        $.ajax({
                method: "POST",
                url: "/api/users",
                data: userInfo
              }).then(function(data) {
                console.log(data);
                // 6/3 VN - take the user directly to the matches screen.
                window.location.replace("/matches/" + data.id);
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