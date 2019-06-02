var signedIn = false;
var buttonCheck = false;

// profile data--------------------------------
var profilePic = "http://localhost:8080/api/users/profilepic/burgerpic";
var profileAge = 25;
var profileLocation = "Austin";
var profileBio = "insert weird bio here";
var profileFirstName = "Herbert";
var profileSentScore = 82;
var userInfo;
// -----------------------------------------------

// match data---------------------------------------
var matchPic = "";
var matchFirstName = "";
var matchAge = "";
var matchLocation = "";

// ---------------------------------------------------

$(document).ready(function() {
  // if (!$.browser.webkit) {
  //     $('.wrapper').html('<p>Sorry! Non webkit users. :(</p>');
  // }
});

// This function will check to see if the user is signed in
function signinCheck(buttonCheck) {
  console.log("signinCheck", buttonCheck);
  if (buttonCheck === false) {
    $(".buttonList")
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
  }
  if (buttonCheck === true) {
    $(".buttonList")
      .append()
      .html(
        `<a href="chat.html">
                <button
                  type="button"
                  class="icons"
                  data-toggle="modal"
                  data-target="#"
                  id="chat-icon"
                >
                  <img src="./img/icons/chatIconGrey.png" />
                </button>
              </a>
              <button
                type="button"
                class="icons"
                data-toggle="modal"
                data-target="#"
                id="match-icon"
              >
                <img src="./img/icons/matchIconGrey.png" />
              </button>
              <button
                type="button"
                class="icons"
                data-toggle="modal"
                data-target="#"
                id="profile-icon"
              >
                <img src="./img/icons/profileIconGrey.png" />
              </button>`
      );
    console.log("cool");
  }
}

// This function will pull data and populate their profile page
function updateUserProfile(userInfo) {
  console.log("updateUserProfile");
  $("#profilePic").attr({ src: userInfo.profilePic, alt: "User Profile" });
  $("#profilePicContainer").attr({ "data-text": userInfo.sentimentScore });
  $("#profileInfoCard")
    .append()
    .html(
      `<h4>Name: ${userInfo.firstname}</h4>
        <h4>Age: ${userInfo.age}</h4>
        <h4>Location: ${userInfo.locale}</h4>`
    );
  $("#profileBioCard")
    .append()
    .html(
      `<h4>Bio: ${profileBio}</h4>
        <p></p>`
    );
};

// this function will update the matches
function updateMatches() {}

// This function will create the match box with profile data
function createMatchBox() {}

// declaring functions

updateUserProfile(
  profilePic,
  profileSentScore,
  profileFirstName,
  profileAge,
  profileLocation
);
signinCheck(buttonCheck);
