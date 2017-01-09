$(document).ready(function(){ 
$(window).on("load resize",function(e) {
  var more = document.getElementById("js-centered-more");

  if ($(more).length > 0) {
    var windowWidth = $(window).width();
    var moreLeftSideToPageLeftSide = $(more).offset().left;
    var moreLeftSideToPageRightSide = windowWidth - moreLeftSideToPageLeftSide;

    if (moreLeftSideToPageRightSide < 330) {
      $("#js-centered-more .submenu .submenu").removeClass("fly-out-right");
      $("#js-centered-more .submenu .submenu").addClass("fly-out-left");
    }

    if (moreLeftSideToPageRightSide > 330) {
      $("#js-centered-more .submenu .submenu").removeClass("fly-out-left");
      $("#js-centered-more .submenu .submenu").addClass("fly-out-right");
    }
  }

  var menuToggle = $("#js-centered-navigation-mobile-menu").unbind();
  $("#js-centered-navigation-menu").removeClass("show");

  menuToggle.on("click", function(e) {
    e.preventDefault();
    $("#js-centered-navigation-menu").slideToggle(function(){
      if($("#js-centered-navigation-menu").is(":hidden")) {
        $("#js-centered-navigation-menu").removeAttr("style");
      }
    });
  });
});

//show-hide nav bar on scroll
var prev = 0;
var $window = $(window);
var nav = $('.centered-navigation');

$window.on('scroll', function(){
  var scrollTop = $window.scrollTop();
  nav.toggleClass('hidden', scrollTop > prev);
  prev = scrollTop;
});

  $("canvas.snow").let_it_snow({
    speed: 2,
    interaction: false,
    size: 1,
    count: 100,
    opacity: 0.8,
    color: "#ffffff",
    windPower: 0,
    image: false
  });



//wow.js initialization
  new WOW().init();


  
 

});









  













 




