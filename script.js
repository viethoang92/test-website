
function main(){
    $('.menu a').hide();
}


$(document).on('click', 'a', function(event){
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);

    
});

$(document).ready(main);