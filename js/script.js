$(function(){
  var landing = $(".landing");
  var app     = $(".app");
  var results = $(".results");
  var current, score;

  initialize();

  // ------- Click Events ------ //

  $("button.start").on('click', function(){
    landing.addClass("animated fadeOut").hide();
    display();
    app.show();
  })

  $(".options-text").on('click', function(e){
    score += $(e.target).data("num") + 1;
    current == data.questions.length - 1 ? showResults() : current++;
    display();
  })

  $(".reset").on('click', function(){
      reset();
  })

  // ------- Functions ------ //

  function initialize(){
    app.hide();
    results.hide();
    current = 0;
    score = [];
  }
  function display(){
    var question  = data.questions[current].title;
    var options   = data.questions[current].options;
    $(".question-text").html(""); //clear text
    $(".options-text").html("");  //clear text

    $(".question-text").append("<h1 class='animated fadeInUp'>"+question+"</h1>");
    $.each(options, function(num){
      $(".options-text").append("<h3 class='option animated fadeInDown'data-num="+ num +">"+options[num]+"</h3>");
    })
  }
  function showResults(){
    app.addClass("animated fadeOut").hide();
    results.fadeIn(1500);
    $(".boots").html("");
    $(".loading").show();

    var boots = [];
    data.boots.forEach(function(boot){
      var check = boot.scores.indexOf(Number(score));
      if(check > -1) boots.push(boot);
    })
    boots.forEach(function(boot){
      setTimeout(function() {
        $(".loading").fadeOut();
        $(".boots").append("<div class='boot'>"+"<img class='animated fadeIn' src=./images/"+boot.url+">"+"<h3>"+boot.name+"</h3></div>");
      }, 1000);
    })
    if (boots.length == 0) {
      $(".loading").fadeOut();
      $(".boots").append("<h3>No results found.</h3>");
    }
  }
  function reset(){
    current = 0;
    score = [];
    results.addClass("fadeOutUp").hide();
    app.removeClass("fadeOut").addClass("animated fadeIn").show();
    display();
  }
})

// ---------------------- D  A  T  A --------------------------------- //

var data = {
  questions: [
    {
      title: "What position do you play?",
      options: ["Forward","Midfielder","Defender","Goalkeeper"]
    },
    {
      title: "Lightweight or Comfort?",
      options: ["Lightweight","Comfort"]
    },
    {
      title: "Do you prefer leather or synthetic?",
      options: ["Leather","Synthetic"]
    },
    {
      title: "Do you only want a big brand name?",
      options: ["Yes","No"]
    }
  ],
  boots: [
    {
      scores: [1121,3121],
      name: "Adidas X 16.1",
      url: "x.jpg"
    },
    {
      scores: [2121,3121],
      name: "Adidas Ace 16.1",
      url: "ace_low.jpg"
    },
    {
      scores: [2221],
      name: "Adidas 16+ Pure Control",
      url: "ace_high.jpg"
    },
    {
      scores: [1121,3121],
      name: "Nike Mercurial Vapor XI",
      url: "superfly.jpg"
    },
    {
      scores: [1121,3121],
      name: "Nike Superfly V",
      url: "vapor.jpg"
    },
    {
      scores: [2221,1221],
      name: "Nike Hypervenom",
      url: "hypervenom.jpg"
    },
    {
      scores: [2221],
      name: "Nike Magista Opus",
      url: "opus.jpg"
    },
    {
      scores: [1121,3121],
      name: "Puma Evospeed 1.5",
      url: "evospeed.jpg"
    },
    {
      scores: [1221,4221],
      name: "Puma Evopower",
      url: "evopower.jpg"
    },
    {
      scores: [1111,3111],
      name: "Puma Evospeed 1.5 Leather",
      url: "evospeed_k.jpg"
    },
    {
      scores: [2212],
      name: "Asics DS Light 6",
      url: "asics.jpg"
    },
    {
      scores: [2212],
      name: "Under Armour Clutchfit",
      url: "clutchfit.jpg"
    },
    {
      scores: [1112],
      name: "Under Armour Spotlight",
      url: "spotlight.jpg"
    },
    {
      scores: [1112],
      name: "New Balance Furon",
      url: "furon.jpg"
    },
    {
      scores: [1212],
      name: "New Balance Visaro",
      url: "visaro.jpg"
    },
    {
      scores: [1211,2211,3211,4211],
      name: "Nike Tiempo Legend",
      url: "tiempo.jpg"
    },
    {
      scores: [2211,3211],
      name: "Puma Evopower Leather",
      url: "evopower_k.jpg"
    }
  ]
}
