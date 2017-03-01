$(function() { 

    var a = $("#js-mobile-menu").unbind(); $("#js-navigation-menu").removeClass("show"), a.on("click", function(a) {
    a.preventDefault(), $("#js-navigation-menu").slideToggle(function() {
        $("#js-navigation-menu").is(":hidden") && $("#js-navigation-menu").removeAttr("style")
    })
});




var b = 0, c = $("#home"), d = c.offset(); $(document).scroll(function() {
    b = $(this).scrollTop(), b > d.top ? $("header.navigation").css("background-color", "#333") : $("header.navigation").css("background-color", "transparent")
}), $("#triangle-1").velocity("transition.slideLeftIn", {
    delay: 1500,
    visibility: "visible",
    opacity: .5,
    duration: 2e3,
    easing: "linear"
}), $("#triangle-2").velocity("transition.slideRightIn", {
    delay: 1800,
    visibility: "visible",
    duration: 2e3,
    easing: "linear"
}), $("#triangle-3").velocity("transition.slideUpIn", {
    delay: 2000,
    visibility: "visible",
    duration: 2e3,
    easing: "linear"
}), $('a[href*="#"]').on("click", function(a) {
    a.preventDefault(), a.stopPropagation();
    var b = $(this).attr("href");
    $(b).velocity("scroll", {
        duration: 500,
        offset: -40,
        easing: "ease-in-out"
    })
}), $(function() {
    $(window).resize(function() {
        if ($(window).width() < 960) {
            var a = $("li.nav-link a").off();
            $("#js-mobile-menu").removeClass("show"), a.on("click", function(a) {
                $("#js-navigation-menu").removeAttr("style")
            })
        }
    }).resize()
}), (new WOW).init(), new TiltSlider(document.getElementById("slideshow"))
});