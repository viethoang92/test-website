$(document).ready(function () {
    $("#sectionI").load("html/sectionI.html");
    $("#sectionII").load("html/sectionII.html");
    $("#sectionIII").load("html/sectionIII.html");
    $("#sectionIV").load("html/sectionIV.html");
    $("#sectionV").load("html/sectionV.html");
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
            $('.highlighted').before(function(){
                $(this).removeClass('highlighted');
            });
            $('.section').before(function(){
                $(this).removeClass('active');
            });
        }

        if($(".section a").css('display')=='block'){
            $(".section").hide();
            $('.highlighted').before(function(){
                $(this).removeClass('highlighted');
            });
        }


        $(this).toggleClass('active');
        $(".sideNav").slideToggle(100);
    
    })
};

/* onClick, show subSections*/
function sectionToggle() {
    $(".section").on('click', function () {
        $(this).toggleClass('active');
        $(this).next().slideToggle(100);
    })

}
/* onClick: highlight  */
function highlighted() {
    $('.sideNav a').on('click', function() {
        $('.highlighted').before(function(){
            $(this).removeClass("highlighted");
        })
        $(this).toggleClass('highlighted');
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
