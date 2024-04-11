// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}
var navbar = $("#navbar");
var rentTxt = $('#rent .txt-holder');
var rentImg = $('#rent .rent-img-holder');
var prednostiTxt = $('#prednosti .rev-holder');
var prednostiImg = $('#prednosti .prednosti-img-holder');
var onamaTxt = $('#onama .about-txt-holder');
var onamaImg = $('#onama .about-img');
var cenovnikImg = $('#pricelist .table-holder');
var flotaTxt = $('#flota .fleat-data');

var ww = $(window).width();
var wh = $(window).height();
getYear();

// toggler button
if (ww < 768) {
    if (hero + 100 < window.scrollY) {
        navbar.addClass('d-flex');
    }
}
$(".toggler").click(function () {
    $(".nav-links").toggleClass("active")
    $(".nav-link").click(function () {
        $(".nav-links").removeClass("active")
    });
});

$(window).on('scroll', () => {
    var hero = document.getElementById("hero").getBoundingClientRect().top;
    var rent = document.getElementById("rent").getBoundingClientRect().top;

    var prednosti = document.getElementById("prednosti").getBoundingClientRect().top;

    var onama = document.getElementById("onama").getBoundingClientRect().top;

    var flota = document.getElementById("flota").getBoundingClientRect().top;

    var pricelist = document.getElementById("pricelist").getBoundingClientRect().top;

    if (hero + 800 < window.scrollY) {
        navbar.addClass('d-flex');
    } else {
        navbar.removeClass('d-flex');
    }
    if (rent < screen.height * 0.5) {
        rentImg.addClass('animaright');
        rentTxt.addClass('animarightdelay');
    }
    if (prednosti < screen.height * 0.5) {
        prednostiImg.addClass('animaleft');
        prednostiTxt.addClass('animaleftdelay');
    }
    if (onama < screen.height * 0.5) {
        onamaImg.addClass('animaimg');
        onamaTxt.addClass('animatop');
    }
    if (flota < screen.height * 0.5) {
        flotaTxt.addClass('animaimg');
    }
    if (pricelist < screen.height * 0.5) {
        cenovnikImg.addClass('animatop');
    }
});


