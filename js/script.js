$(document).ready(function () {
    $("#sectionI").load("html/sectionI.html");
    $("#sectionII").load("html/sectionII.html");
    $("#sectionIII").load("html/sectionIII.html");
    sectionJump();
    sectionToggle();
    highlighted();
    dropDown();

});
/* DropDownMenu */
function dropDown() {
    $("#dropbtn").on('click', function () {
        if($(".subSection a").css('display')=='block'){
            $(".section").next().hide();
        }
        $(this).toggleClass('active');
        $(".sideNav").slideToggle(100);
    
    })
};


/* onClick: highlight  */
function highlighted() {
    $('.sideNav a', '.menu a').hover(
        function () {
            $(this).addClass("highlighted");

        },
        function () {
            $(this).removeClass("highlighted");
        }

    );
}

/* onClick, show subSections*/
function sectionToggle() {
    $(".section").on('click', function () {
        $(this).toggleClass('active');
        $(this).next().slideToggle(100);
    })

}

/* onClick, jump to Section */
function sectionJump() {
    $(document).on('click', 'a', function ($) {
        $.fn.goTo = function () {
            $('html, body').animate({
                scrollTop: $(this).offset().top + 'px'
            }, 'fast');
            return this; // for chaining...
        }
    });
}