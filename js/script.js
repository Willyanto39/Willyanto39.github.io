$(document).ready(function() {
    $('#scroll-about-me').click(function(){
        scrollToSection($('#about-me'));
    });

    $('#scroll-portfolio').click(function(){
        scrollToSection($('#portfolio'));
    });

    $('#scroll-contact').click(function() {
        scrollToSection($('#contact'))
    });
});

function scrollToSection(selector) {
    $('html, body').animate({
        scrollTop: $(selector).offset().top
    }, 750);
}