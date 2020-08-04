$(function () {
  let progressBars = $(".progress-bar");
  $(progressBars).each(function (i) {
    $(progressBars[i]).animate(
      {
        width: $(progressBars[i]).attr("aria-valuenow") + "%",
      },
      500,
      "linear",
      function () {}
    );
  });

  // Gestion de la télécommande

  $("#first").click(function () {
    $(".carousel").carousel(0);
  });

  $("#previous").click(function () {
    $(".carousel").carousel("prev");
  });

  $("#pause").click(function () {
    $(".carousel").carousel("pause");
  });

  $("#next").click(function () {
    $(".carousel").carousel("next");
  });

  $("#last").click(function () {
    $(".carousel").carousel($(".carousel-item").length - 1);
  });
});
