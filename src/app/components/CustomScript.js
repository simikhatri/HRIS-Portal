import $ from 'jquery';

$(document).ready(function() {
  // Initial view setup
  $('.viewtabs').hide();
  $('#gridview').show(); // Show grid view by default

  // Switch to grid view
  $('.grid-view').on('click', function(e) {
    e.preventDefault();
    $('.viewtabs').hide();
    $('#gridview').show();
    $('.grid-view').addClass('active');
    $('.listing-view').removeClass('active');
  });

  // Switch to listing view
  $('.listing-view').on('click', function(e) {
    e.preventDefault();
    $('.viewtabs').hide();
    $('#listingview').show();
    $('.listing-view').addClass('active');
    $('.grid-view').removeClass('active');
  });
});
// import $ from 'jquery';

// export default function initDropdownMenu() {
//     $(document).ready(function() {
//       $("#header li .notification-icon").on("click", function() {
//         $(".notification .user-dropdown").toggle();
//       });
//     });
//   }
