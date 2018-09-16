$(window).load(function() {
  var selection = [];
  var touch, weight, pos, price, style;
  var data;

  $.getJSON("http://codepen.io/mloreti/pen/dowwez.js", function(json) {
    data = json;
  });

  $(".selection").addClass(" animated fadeInUp");
  $(".question").addClass(" animated fadeInDown");

  $(".start").on("click", function() {
    $(".landing").addClass("animated fadeOut");
    $(".landing").removeClass("active");
    $(".selection").first().addClass("active");
    $(".question").first().addClass("active");
    selection = [];
  });

  $("span").on("click", function(e) {
    var selected = $(this).attr("class");
    selection.push(selected);

    var index = $(this).parent().index();
    var quest = $(".question");
    quest.eq(index).removeClass("active");
    quest.eq(index + 1).addClass("active");

    $(this).parent().next().addClass("active");
    $(this).parent().removeClass("active");

    if ($(this).parent().index() == 4) {
      $(".answer").addClass("active");
      pos = selection[0];
      weight = selection[1];
      touch = selection[2];
      price = selection[3];
      style = selection[4];
      for (var i = 0; i < data.length; i++) {
        if (pos == data[i].Position &&
          weight == data[i].Weight &&
          touch == data[i].Touch &&
          price == data[i].Price &&
          style == data[i].Style) {
          console.log(data[i].Name);  
          $(".results").append(
              "<h3>" + data[i].Name + "</h3>" 
             +"<img src='" + data[i].URL + "' />");
        }
      };
    };
  });

  // --- R E S E T --- //
  $(".reset").on("click", function() {
    $(".answer").removeClass("active");
    $(".selection").first().addClass("active");
    $(".question").first().addClass("active");
    $(".results").text("");
    selection = [];
  });
});