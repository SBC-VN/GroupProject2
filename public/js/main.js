var loggedIn = false;
var screenName = null;

$("#login").on("click",function(event) {
    var email = $("#emailInputLogin").val();
    var password = $("#passwordLogin").val();

    $.ajax("/api/login/" + email, {
        type: "GET",
        data: { password : password }
      }).then(
        function(res) {
          console.log("login response",res);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    // Call the login api
    });
