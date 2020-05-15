$("#save-imagery").click(function () {
   $("#overlay-success").toggleClass("d-flex d-none");
});

$("#create-error").click(function () {
   $("#overlay-danger").toggleClass("d-flex d-none");
});

// $("#dropdownMenuButton").click(function () {
//    $("#dropdownMenuButton").dropdown("dropdown-menu");
// });

$("#deleteCard").hide(),
   $("#customCheck").click(function () {
      $("#deleteCard").toggle("#deleteCard");
   });

$("#dragdown, #signUpText").hide(),
   $("#signup").click(function () {
      $("#dragdown, #signUpText").slideDown("#dragdown, #signUpText");
   });

$("#signup").click(function () {
   $("#signup").hide();
});

//create if statement that displays red error message if email and password are blank
$("#letsGo").click(function () {
   var emailInput = $("#email1").val();
   if (emailInput.length === 0) {
      //if userinput equals, then when clicking lets go , error lights up
      $("#warningEmail").show();
      $("#email1").addClass("is-invalid");
   } else {
      $("#email1").removeClass("is-invalid");
      $("#email1").addClass("is-valid");
      $("#warningEmail").hide();
      // console.log("warningEmail"); console.log for the dev's eyes/ can not call ID
   }
});
