
var userProfilePic = "img/b-ghosncharge-a-20181211-870x580.jpg";
var userFirstName= "SC: 70";
var signedIn = true;


$(document).ready(function () {
    if (!$.browser.webkit) {
        $('.wrapper').html('<p>Sorry! Non webkit users. :(</p>');
    }
});

// This function will check to see if the user is signed in
function signinCheck(signedIn) {
    if (signedIn === false) {
        $("#buttonList").append().html(
            `<div id="welcome">
            <button data-toggle="modal" data-target="#loginModal" style="display:show"
              id="loginButton">
              Login
            </button>
            <a href= "signup.html"><button type="button" class="hot"
              id="signUpButton">Sign-Up</button></a>
          </div>`
        );
    } else {
        console.log("cool");
    }
}


// This function will pull data and populate their profile page
function updateUserProfile(userProfilePic) {
    $('#profilePic').attr({ src: userProfilePic, alt: 'User Profile' });
    $('#profilePicContainer').attr({ "data-text": userFirstName});
}


updateUserProfile(userProfilePic);
signinCheck(signedIn);