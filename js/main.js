var navbackground = function () {
    if ($(window).scrollTop() > 150) {
        $('nav').css('background', 'black');
    } else {
        $('nav').css('background', 'transparent');
    }
};
navbackground();
$(window).scroll(function () {
    navbackground()
});

// $('#modal1').modal('open');
$('.portfolios').on('click', '.portfolio', function () {
    var modal = $(this).data('modal');
    var $modal = $(modal);
    $modal.addClass('active');
    var $body = $('body');
    $body.addClass('modal-open');
    $modal.find('.close').on('click', function () {
        $body.removeClass('modal-open');
        $modal.removeClass('active');
    })
});

// Select all links with hashes
$('a[href*="#"]')
// Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
        // On-page links
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
            &&
            location.hostname == this.hostname
        ) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top - 75
                }, 1000);
            }
        }
    });