$(function(){

var count = "";

var ulSeries = $('ul.series');

$('#result').hide();

  var question = $('.question');

  question.on('click', function(){

    //Add number based on selection
    var code = $(this).attr('data-code');
    count += code;
    //$('.counter').html(count);

    //Remove active from ul
    var parClass = $(this).parent().attr('class');
    var par = $(this).parent();
    par.attr('class', 'series');

    //Add active to next ul
    par.next().addClass('active');
    //Remove ul + Show results
    if(par.index() == ulSeries.length){
      $('#result').fadeIn('slow');
      var shoe = $('.shoe');
      var boot = $('.boot');
      $('.restitle').html('Your result:');
      switch (count) {
        case "1111":
        shoe.text("Adidas Ace 15.1");
        boot.attr('src', 'http://www.footballbootsdb.com/logos/boots/117/3.jpg');
        break
        case "1112":
        shoe.text("Nike Tiempo Legend V");
        boot.attr('src', 'http://www.footballbootsdb.com/logos/boots/8/3.jpg');
        break
        case "1121":
        shoe.text("Nike Hypervenom Phantom 2");
        boot.attr('src', 'http://www.footballbootsdb.com/logos/boots/118/3.jpg');
        break
        case "1221":
        shoe.text("Nike Mercurial Superfly");
        boot.attr('src', 'http://www.footballbootsdb.com/logos/boots/7/3.jpg');
        break
        case "1211":
        shoe.text("Adidas X 15.1");
        boot.attr('src', 'http://www.footballbootsdb.com/logos/boots/116/3.jpg');
        break
        case "1122":
        shoe.text("Nike Magista Obra");
        boot.attr('src', 'http://www.footballbootsdb.com/logos/boots/5/3.jpg');
        break
        case "1212":
        shoe.text("Puma EvoPower 1.2");
        boot.attr('src', 'http://www.footballbootsdb.com/logos/boots/9/3.jpg');
        break
        case "2222":
        shoe.text("Nike Magista Obra");
        boot.attr('src', 'http://www.footballbootsdb.com/logos/boots/5/3.jpg');
        break
        case "2221":
        shoe.text("Nike Mercurial Superfly");
        boot.attr('src', 'http://www.footballbootsdb.com/logos/boots/7/3.jpg');
        break
        case "2212":
        shoe.text("Nike Mercurial Vapor");
        boot.attr('src', 'http://www.footballbootsdb.com/logos/boots/47/3.jpg');
        break
        case "2122":
        shoe.text("Nike Magista Obra");
        boot.attr('src', 'http://www.footballbootsdb.com/logos/boots/5/3.jpg');
        break
        case "2211":
        shoe.text("Nike Mercurial Vapor");
        boot.attr('src', 'http://www.footballbootsdb.com/logos/boots/47/3.jpg');
        break
        case "2112":
        shoe.text("Nike Tiempo Legend V");
        boot.attr('src', 'http://www.footballbootsdb.com/logos/boots/8/3.jpg');
        break
        case "2121":
        shoe.text("Nike Mercurial Vapor");
        boot.attr('src', 'http://www.footballbootsdb.com/logos/boots/47/3.jpg');
        break

        default:
          shoe.text("No decision made");
      }
    };
 });






  /* Clear */
  $('.clear').on('click', function(){
    count = "";
    ulSeries.attr('class', 'series');
    ulSeries.first().addClass('active');
    //$('.counter').html(count);
    $('#result').hide();
  });

});