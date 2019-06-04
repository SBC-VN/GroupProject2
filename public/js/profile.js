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
            //empties fields after submission
            $(".form-control").each(function () {
                $(this).val("");
            });
            // 6/3 VN - take the user directly to the matches screen.
            window.location.replace("/matches/" + data.id);
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

$(function () {
    // these are the hidden error messages
    $("#firstname-error").hide();
    $("#lastname-error").hide();
    $("#age-error").hide();
    $("#locale-error").hide();
    $("#screenname-error").hide();
    $("#email-error").hide();
    $("#formPassword1-error").hide();
    $("#formPassword2-error").hide();
    $("#bio-error").hide();

    // these varibles are for the submission part
    var error_firstname = false;
    var error_lastname = false;
    var error_age = false;
    var error_screenname = false;
    var error_password1 = false;
    var error_password2 = false;
    var error_email = false;
    var error_locale = false;
    var error_bio = false;

    // these.on(mouseleave) functions shouls trigger when a user moves their
    // mouse out of the input
    $("#form-firstname").focusout(function () {
        check_firstname();
    });

    $("#form-lastname").focusout(function () {
        check_lastname();
    });

    $("#form-age").focusout(function () {
        check_age();
    });

    $("#form-locale").focusout(function () {
        check_locale();
    });

    $("#form-screenname").focusout(function () {
        check_screenname();
    });

    $("#form-email").focusout(function () {
        check_email();
    });

    $("#formPassword1").focusout(function () {
        check_password1();
    });


    $("#formPassword2").focusout(function () {
        check_password2();
    });


    $("#form-bio").focusout(function () {
        check_bio();
    });

    function check_firstname() {
        var firstname_length = $("#form-firstname").val().length;

        if (firstname_length < 1 || firstname_length > 20) {
            $("#firstname-error").html("*Should be between 1 and 20 characters.");
            $("#firstname-error").show();
            error_firstname = true;
        } else {
            $("#firstname-error").hide();
        }
    }
    function check_lastname() {
        var lastname_length = $("#form-lastname").val().length;

        if (lastname_length < 1 || lastname_length > 20) {
            $("#lastname-error").html("*Should be between 1 and 20 characters.");
            $("#lastname-error").show();
            error_lastname = true;
        } else {
            $("#lastname-error").hide();
        }
    }

    function check_age() {

        if ($("#form-age").val() < 18 || $("#form-age").val() > 120) {
            $("#age-error").html("*Only users over the age of 18 may apply.");
            $("#age-error").show();
            error_age = true;
        } else {
            $("#age-error").hide();
        }
    }

    function check_locale() {
        var locale_length = $("#form-locale").val().length;

        if (locale_length < 1 || locale_length > 20) {
            $("#locale-error").html("*Should be between 1 and 20 characters.");
            $("#locale-error").show();
            error_locale = true;
        } else {
            $("#locale-error").hide();
        }
    }

    function check_screenname() {
        var screenname_length = $("#form-screenname").val().length;

        if (screenname_length < 6 || screenname_length > 20) {
            $("#screenname-error").html("*Should be between 6 and 20 characters.");
            $("#screenname-error").show();
            error_screenname = true;
        } else {
            $("#screenname-error").hide();
        }
    }

    function check_email() {

        var email_length = $("#form-email").val().length;

        if (email_length < 6 || email_length > 20) {
            $("#email-error").html("*Should be between 6 and 20 characters.");
            $("#email-error").show();
            error_email = true;
        } else {
            $("#email-error").hide();
        }

    }

    function check_password1() {
        var password1_length = $("#formPassword1").val().length;

        if (password1_length < 6 || password1_length > 20) {
            $("#formPassword1-error").html("*Should be between 6 and 20 characters.");
            $("#formPassword1-error").show();
            error_password1 = true;
        } else {
            $("#formPassword1-error").hide();
        }
    }

    function check_password2() {
        var password1 = $("#formPassword1").val();
        var password2 = $("#formPassword2").val();


        if (password2 != password1) {
            $("#formPassword2-error").html("*Passwords do NOT match.");
            $("#formPassword2-error").show();
            error_password2 = true;
        } else {
            $("#formPassword2-error").hide();
        }
    }



    function check_bio() {
        var bio_length = $("#form-bio").val().length;

        if (bio_length < 1 || bio_length > 250) {
            $("#bio-error").html("*Should be between 1 and 250 characters.");
            $("#bio-error").show();
            error_bio = true;
        } else {
            $("#bio-error").hide();
        }
    }

    $("#singUpForm").submit(function () {
        error_firstname = false;
        error_lastname = false;
        error_age = false;
        error_screenname = false;
        error_password1 = false;
        error_password2 = false;
        error_email = false;
        error_locale = false;
        error_bio = false;

        check_firstname();
        check_lastname();
        check_password1();
        check_password2();
        check_email();
        check_bio();
        check_locale();
        check_age();
        check_screenname();

        if (
            error_firstname == false &&
            error_lastname == false &&
            error_age == false &&
            error_screenname == false &&
            error_password1 == false &&
            error_password2 == false &&
            error_email == false &&
            error_locale == false &&
            error_bio == false) {
            return true;
        } else {
            return false;
        }

    });

});
