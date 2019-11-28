$(window).scroll(function() {
  $("#socio-share").css("top", Math.max(200, 370 - $(this).scrollTop()));
  //   $("#socio-share").css("display", Math.max(0, 200 - $(this).scrollTop()));
});
