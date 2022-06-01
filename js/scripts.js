$(document).ready(function() {
  $(".clickable").click(function() {
    $("#walrus-showing").slideToggle();
    $("#walrus-hidden").slideToggle();
  });
  $(".clickable").click(function() {
    $("#emu-showing").fadeToggle();
    $("#emu-hidden").fadeToggle();
  });
  $(".clickable").click(function() {
    $("#giraffe-showing").fadeToggle();
    $("giraffe-hidden").fadeToggle();
  });
});