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
   var emailInput = $("#emailRequired").val();
   if (emailInput.length === 0) {
      //if userinput equals, then when clicking lets go , error lights up
      $("#warningEmail").show();
      $("#emailRequired").addClass("is-invalid");
   } else {
      $("#emailRequired").removeClass("is-invalid");
      $("#emailRequired").addClass("is-valid");
      $("#warningEmail").hide();
      // console.log("warningEmail"); console.log for the dev's eyes/ can not call ID
   }
});

// if lets go clicked and password empty, display first error and light up red
$("#letsGo").click(function () {
   var validPassword = $("#requiredPassword").val();
   if (validPassword.length === 0) {
      $("#warningPassword").show();
      $("#requiredPassword").addClass("is-invalid");
      // else if password less than 9 characters, display character error and also light up
   } else if (validPassword.length <= 9) {
      $("#warningPasswordCharacters").show();
      $("#warningPassword").hide();
      $("#requiredPassword").addClass("is-invalid");
      // else remove invalid classes and hide error message
   } else {
      $("#requiredPassword").removeClass("is-invalid");
      $("#requiredPassword").addClass("is-valid");
      $("#warningPasswordCharacters, #warningPassword").hide();
   }
});

//click log in with empty email will disable button and trigger error
$("#logIn").click(function () {
   var emailWelcomeInput = $("#welcomeBackEmail").val();
   if (emailWelcomeInput.length === 0) {
      $("#warningWelcomeEmail").show();
      $("#welcomeBackEmail").addClass("is-invalid");
      // $("#logIn").removeAttr("href");
   } else {
      $("#welcomeBackEmail").removeClass("is-invalid");
      $("#welcomeBackEmail").addClass("is-valid");
      $("#warningWelcomeEmail").hide();
   }
});
//need password and email filled out in order to proceed
$("#logIn").click(function () {
   var validWelcomePassword = $("#welcomePassword").val();
   if (validWelcomePassword.length === 0) {
      $("#warningWelcomePassword").show();
      $("#welcomePassword").addClass("is-invalid");
      // else if password less than 9 characters, display character error and also light up
   } else if (validWelcomePassword.length <= 9) {
      $("#warningWelcomePasswordCharacters").show();
      $("#warningWelcomePassword").hide();
      $("#welcomePassword").addClass("is-invalid");
      // else remove invalid classes and hide error message
   } else {
      $("#welcomePassword").removeClass("is-invalid");
      $("#welcomePassword").addClass("is-valid");
      $("#warningWelcomePasswordCharacters, #warningWelcomePassword").hide();
   }
});

//javascript for create-answer.html id = textInput, wordCount, nextButton
//when
$("#textInput").keyup(function () {
   $("#wordCount").text($(this).val().length); //this equals textInput
   var validWordCount = $("#textInput").val();
   if (validWordCount.length > 0 && validWordCount.length <= 240) {
      $("#nextButton").removeClass("disabled");
   } else {
      $("#nextButton").addClass("disabled");
   }
   var limitReached = $("#textInput").val();
   if (limitReached.length > 240) {
      $("#overLimit").addClass("text-danger");
   } else {
      $("#overLimit").removeClass("text-danger");
   }
});

/// test text ffgdsfdbsdbfdsbfdhsdfghfdhdfhdfhdfhdhsdfhhdshfdhfhsfdhhfhnfgshfghsfhghshfdghsfghfngnsfghdgfhfgngfndvvjnbvjhbjkvbvjavbdhj dj djh hdhdfjhjdfhj fhj j hdfj hdf jd sfjdh h sjhd vhjd hj sjh sfhj jhaf js fjhsd jf dsjhf ja fjhs fja jf dshf sdajhf dfsf
