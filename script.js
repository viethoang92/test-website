$(document).ready(function () {
    $(".content").load("content.html");
});


$(document).on('click', 'a', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});
