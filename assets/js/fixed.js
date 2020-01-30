$(window).scroll(function() {
  $("#socio-share").css("top", Math.max(200, 370 - $(this).scrollTop()));
});
