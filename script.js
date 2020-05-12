$(document).ready(function () {
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
});
