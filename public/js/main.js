var loggedIn = false;
var screenName = null;

$(".modal").on("click","button",function(event) {
  if (event.currentTarget.id == "login")
  {
    var email = $("#emailInputLogin").val();
    var password = $("#passwordLogin").val();
    
    $.ajax("/api/login/" + email, {
        type: "PUT",
        data: { password : password }
      }).then(
        function(res) {
          console.log("login response",res);
          // Reload the page to get the updated list
          //location.reload();
        }
      );
    // Call the login api
    }
  });
