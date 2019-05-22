
var signedIn = true;


$(document).ready(function () {
    if (!$.browser.webkit) {
        $('.wrapper').html('<p>Sorry! Non webkit users. :(</p>');
    }
});


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

signinCheck(signedIn);