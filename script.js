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
      $("#showButton").click(function () {
         $("#deleteCard").toggle("#deleteCard");
      });
});
