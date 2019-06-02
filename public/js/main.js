var loggedIn = false;
var screenName = null;
var userInfo = null;

$(".modal").on("click", "button", function(event) {
  if (event.currentTarget.id == "login") {
    var email = $("#emailInputLogin").val();
    var password = $("#passwordLogin").val();

    console.log("api call");
    $.ajax("/api/login/" + email, {
      type: "PUT",
      data: { password: password }
    })
      .then(function(res) {
        console.log("logged in");
        loggedIn = true;
        userInfo = res;
        console.log(res);
        // Successful login.   User info is in 'res'.  Except for password.
        setupUser(res.screenname);
        buttonCheck = true;
        signinCheck(buttonCheck);
        // Reload the page to get the updated list
        // 5/24 VN - Don't reload.  This resets connection to firebase.
        //location.reload();

      })
      .catch(function(res, info, code) {
        console.log("error status", res.status);
        // 5/24 VN - Don't reload.  This resets connection to firebase.
        //location.reload();
      });

    // Call the login api
  }
});



function getCurrentUserObj(){

  var currUser = {
    firstname: userInfo.firstname,
    lastname: userInfo.lastname,
    age: userInfo.age,
    locale: userInfo.locale,
    screenname: userInfo.screenname,
    email: userInfo.email,
    // password: password,
    profilepic: userInfo.profilepic,
    bio: userInfo.bio,
    userSample: userInfo.userSample,
    sentimentScore:userInfo.sentimentScore,
    matches:userInfo.matches
  };

  return currUser;
}



