/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
    $('#sidenav').css('width', '250px');
    $('#main').css('margin-left', '250px');
    $('.open-nav').css('opacity', '0');
    $('.open-nav').css('cursor', 'default');
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
  $('#sidenav').css('width', '0');
  $('#main').css('margin-left', '0');
  $('.open-nav').css('opacity', '1');
  $('.open-nav').css('cursor', 'pointer');
}
