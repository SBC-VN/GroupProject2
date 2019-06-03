//CANT CALL CLIENT SIDE NPM!!!
//        var Sentiment = require('sentiment');
// var sentiment = new Sentiment();

// Global Variable Declaration (scoping fix)
var allFieldsCompleted;

// this is the picture upload function
$("#form-picture").submit(function (event) {
    event.preventDefault();

    var data = new FormData();
    $.each($("#survey-picture")[0].files, function (i, file) {
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
        success: function (data) {
            console.log("success", data);
        }
    });
});

//  Document ready function enables that the submit button function gets set
//  after the document is ready.    
$(document).ready(function () {
    $("#submitButton").on("click", function (event) {
        console.log("submit button click");
        // do a validation on the password.
        // this is a quick form validation with modal...........
        var firstName = $("#form-firstname").val().trim();
        var lastName = $("#form-lastname").val().trim();
        var age = $("#form-age").val().trim();
        var locale = $("#form-locale").val().trim();
        var screenname = $("#form-screenname").val().trim();
        var email = $("#form-email").val().trim();
        var password1 = $("#formPassword1").val().trim();
        var password2 = $("#formPassword2").val().trim();
        var bio = $("#form-bio").val().trim();
        if (firstName === "" || lastName === "") {
            signUpAlertName();
            return false;
        }
        if (age === "" || email == "" || bio == "" || password1 == "" || password2 == "" || locale == "" || screenname == "") {
            signUpAlertFalse();
            return false;
        }
        if (password1 != password2) {
            signUpAlertPassword();
            return false;
        }
        if (screenname.length < 6 || email.length < 6 || password1.length < 6) {
            signUpAlertSN();
            return false;
        }
        var pwd = function validatePassword() {
            var fp1 = $("#formPassword1").val().trim();
            var fp2 = $("#formPassword2").val().trim();
            if (fp1 === fp2) {
                var pword = $("#formPassword2").val().trim();
                return pword;
            }
            else {
                // Remove this alert!  Use modal
                alert("Passwords must match.");
                return;
            }
        }

        // Time to create the user info object from the info on the page/form.
        var userInfo = {};

        // Find each form-control on the page.  Filter out any that we don't want to
        // see.
        $(".form-control").each(function () {
            if (this.name != "questionnaire" &&
                this.name != null &&
                this.name != undefined &&
                !this.name.startsWith("pass") &&
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
                userInfo.profilepic = uploadFilePath.substring(pathEnd, uploadFilePath.length);
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
        $(".sample").each(function () {
            userInfo.surveyAnswers.push($(this).val().trim());
        });

        // Comment this out when live.
        // if (userInfo.firstname == "test") {
        //     userindex = parseInt(userInfo.lastname);
        //     userInfo.lastname = "user";
        //     userInfo.password = "password" + userindex;
        //     userInfo.screenname = "screenname" + userindex;
        //     userInfo.email = "email" + userindex;
        //     userInfo.profilepic = "bearhead.jpg";
        //     userInfo.locale = "here";
        //     userInfo.age = 33;
        //     userInfo.bio = "Never argue with a fool.  They will pull you down to their level ";
        //     userInfo.bio += "and beat you with experience.";
        //     for (var i=0; i<10; i++) {
        //         userInfo.surveyAnswers[i] = "terrific";
        //     }
        // }

        console.log(userInfo);

        // Now post the user object to the API.   It will do the rest (add, calculate score, etc.)
        $.ajax({
            method: "POST",
            url: "/api/users",
            data: userInfo
        }).then(function (data) {
            console.log(data);
            signUpAlertTrue();
        });

        //empties fields after submission
        $(".form-control").each(function () {
            $(this).val("");
        });
        $("#form-bio").each(function () {
            $(this).val("");
        });
    });
});

// Form validation
function validateForm() {
    var isValid = true;
    $(".form-control").each(function () {
        if ($(this).val() === "") isValid = false;
    });
    // $('.chosen-select').each(function() {
    //     if ($(this).val() === "")
    //         isValid = false
    // })
    return isValid;
}

// these are the alerts for the modals
function signUpAlertTrue() {
    $("#submitButtonALERTInput").append().html(`<h3>Thank You for Singing-Up!</h3>`);
    $('#submitButtonALERT').modal('show');
}

function signUpAlertFalse() {
    $("#submitButtonALERTInput").append().html(`<h3>Sorry! One or more fields are filled out incorrectly.</h3>
    <p>Please make sure that all of the fields are complete, and your passwords match.`);
    $('#submitButtonALERT').modal('show');
}

function signUpAlertPassword() {
    $("#submitButtonALERTInput").append().html(`<h3>Sorry! Password 1 does not match Password 2.</h3>
    <p>Please make sure that all of the fields are complete, and your passwords match.`);
    $('#submitButtonALERT').modal('show');
}

function signUpAlertName() {
    $("#submitButtonALERTInput").append().html(`<h3>Sorry! Please provide both a first name and last name.</h3>
    <p>Please make sure that all of the fields are complete, and your passwords match.`);
    $('#submitButtonALERT').modal('show');
}

function signUpAlertSN() {
    $("#submitButtonALERTInput").append().html(`<h3>Sorry! All screen names, emails, and passwords must be at least 6 characters long.</h3>
    <p>Please make sure that all of the fields are complete, and your passwords match.`);
    $('#submitButtonALERT').modal('show');
}
