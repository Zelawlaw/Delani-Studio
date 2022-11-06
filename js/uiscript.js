$(document).ready(() => {
  $("#design").click(() => {
    $("#desimg").toggle();
    $("#desdesc").toggle();
  });
  $("#development").click(() => {
    $("#devimg").toggle();
    $("#devdesc").toggle();
  });
  $("#projmanagement").click(() => {
    $("#projimg").toggle();
    $("#projdesc").toggle();
  });

  $(".gallery-item").hover(
    function () {
      $(this).find(".img-title").fadeIn(300);
    },
    function () {
      $(this).find(".img-title").fadeOut(300);
    }
  );
});
