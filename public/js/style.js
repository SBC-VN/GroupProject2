var userProfilePic = "img/b-ghosncharge-a-20181211-870x580.jpg";
var userFirstName = "SC: 70";
var signedIn = false;

// profile data--------------------------------
var profilePic = "img/b-ghosncharge-a-20181211-870x580.jpg";
var profileAge = 25;
var profileLocation = "Austin";
var profileBio = "insert weird bio here";
var profileFirstName = "Herbs";
var profileSentScore = 82;
// -----------------------------------------------

$(document).ready(function() {
  // if (!$.browser.webkit) {
  //     $('.wrapper').html('<p>Sorry! Non webkit users. :(</p>');
  // }
});

// This function will check to see if the user is signed in
function signinCheck(signedIn) {
  if (signedIn === false) {
    $("#buttonList")
      .append()
      .html(
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
function updateUserProfile(
  profilePic,
  profileSentScore,
  profileFirstName,
  profileAge,
  profileLocation
) {
  $("#profilePic").attr({ src: profilePic, alt: "User Profile" });
  $("#profilePicContainer").attr({ "data-text": profileSentScore });
  $("#profileInfoCard")
    .append()
    .html(
      `<h4>Name: ${profileFirstName}</h4>
        <h4>Age: ${profileAge}</h4>
        <h4>Location: ${profileLocation}</h4>`
    );
  $("#profileBioCard")
    .append()
    .html(
      `<h4>Bio: ${profileBio}</h4>
        <p></p>`
    );
}

updateUserProfile(
  profilePic,
  profileSentScore,
  profileFirstName,
  profileAge,
  profileLocation
);
signinCheck(signedIn);
