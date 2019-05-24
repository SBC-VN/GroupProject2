var loggedIn = false;
var screenName = null;
var userInfo = null;

$(".modal").on("click","button",function(event) {
  if (event.currentTarget.id == "login")
  {
    var email = $("#emailInputLogin").val();
    var password = $("#passwordLogin").val();
    
    console.log("api call");
    $.ajax("/api/login/" + email, {
        type: "PUT",
        data: { password : password }
      }).then(
        function(res) {
          console.log("logged in");
          loggedIn = true;
          userInfo = res;
          // Successful login.   User info is in 'res'.  Except for password.
          setupUser(res.screenname);
          // Reload the page to get the updated list
          location.reload();
        }
      )
      .catch(
        function(res,info,code) {
          console.log("error status",res.status);
          //location.reload();
        });

    // Call the login api
    }
  });
