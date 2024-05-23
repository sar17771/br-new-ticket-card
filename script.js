$('.toggle-tickets').click(function() {
  $tickets = $(this).parent().siblings('.collapse');
 
  if ($tickets.hasClass('in')) {
    $tickets.collapse('hide');
    $(this).html('Show Ticket Inclusion');
    $(this).closest('.ticket-card').removeClass('active');
  } else {
    $tickets.collapse('show');
    $(this).html('Hide Ticket Inclusion');
    $(this).closest('.ticket-card').addClass('active');
  }
});