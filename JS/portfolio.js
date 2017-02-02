

$(document).ready(function() {
$(window).resize(function() {
  var more = document.getElementById("js-navigation-more");
  if ($(more).length > 0) {
    var windowWidth = $(window).width();
    var moreLeftSideToPageLeftSide = $(more).offset().left;
    var moreLeftSideToPageRightSide = windowWidth - moreLeftSideToPageLeftSide;

    if (moreLeftSideToPageRightSide < 330) {
      $("#js-navigation-more .submenu .submenu").removeClass("fly-out-right");
      $("#js-navigation-more .submenu .submenu").addClass("fly-out-left");
    }

    if (moreLeftSideToPageRightSide > 330) {
      $("#js-navigation-more .submenu .submenu").removeClass("fly-out-left");
      $("#js-navigation-more .submenu .submenu").addClass("fly-out-right");
    }
  }
});


  var menuToggle = $("#js-mobile-menu").off();
  $("#myMenu").removeClass("show");

  menuToggle.on("click", function(e) {
    e.preventDefault();
    $("#myMenu").slideToggle(function(){
      if($("#myMenu").is(":hidden")) {
        $("#myMenu").removeAttr("style");
      }
    });
  });


$(function () {
$(window).resize(function () {
  if ($(window).width() <960) {
  var navlink=$("li.nav-link").off();
  $("#myMenu").removeClass("show");

    navlink.on("click", function(e) {
        $("#myMenu").removeAttr("style");
  });
};
}).resize();
});
new WOW().init();
smoothScroll.init();
  
});


 
  















  
 











  













 




