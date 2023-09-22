$(document).ready(function () {
 // Function to check if the screen size is larger than or equal to 992 pixels
 function isScreenLarger() {
  return $(window).width() >= 992;
 }

 if (isScreenLarger()) {
  // Enable hover for main dropdowns
  $('.navbar-nav .nav-item.dropdown').hover(
   function () {
    // Display the main dropdown on hover
    $(this).find('.dropdown-menu').show();
   },
   function () {
    // Hide the main dropdown when the mouse leaves
    $(this).find('.dropdown-menu').hide();
   }
  );
 }
});