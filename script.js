$(document).ready(function () {
    $("#sectionI").load("html/sectionI.html");
    $("#sectionII").load("html/sectionII.html");
    
    sectionToggle();
});

/* onClick, show subSections*/
function sectionToggle() {
    $(".subSection").hide();
    $(".section").on('click', function() {
        $(this).toggleClass('active');
        $(this).next().slideToggle(100);
    })
}

/* onClick, jump to Section */
$(document).on('click', 'a', function($) {
    $.fn.goTo = function() {
        $('html, body').animate({
            scrollTop: $(this).offset().top + 'px'
        }, 'fast');
        return this; // for chaining...
    }
});
