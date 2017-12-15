console.log("Hello MVC");

$(document).ready(function() {
    checkResize();
    $(window).resize(function() {
        checkResize();
    });
});


function checkResize() {
    var screenSize = $(window).width();
    if (screenSize <= 768) {
        $('ul').removeClass('justify-content-end');
        $('ul').addClass('justify-content-center');

    }
    if (screenSize > 768) {
        $('ul').removeClass('justify-content-center');
        $('ul').addClass('justify-content-end');
    }
}



