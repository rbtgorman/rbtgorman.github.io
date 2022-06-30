// Smooth scroll 
function scrollto(div) {
    $('html,body').animate(
        {
            scrollTop: $("#" + div).offset().top - 50
        }, 1000);
}

// Sticky top button
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if ($(this).scrollTop() > 50) {
        $('#myBtn').fadeIn(200);
    } else {
        $('#myBtn').fadeOut(200);
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    $("html, body").animate({ scrollTop: 0 }, 1000);
}

