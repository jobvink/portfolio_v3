var showModal = function () {
    var modal = $(this).data('modal');
    var $modal = $(modal);
    $modal.addClass('active');
    var $body = $('body');
    $body.addClass('modal-open');
    $modal.find('.close').on('click', function () {
        $body.removeClass('modal-open');
        $modal.removeClass('active');
    })
};

// Remove links that don't actually link to anything
$('.portfolios').on('click', '.portfolio', showModal);
$('.btn--action').on('click', showModal);

// Select all links with hashes
$('a[data-target*="#"]')
// Remove links that don't actually link to anything
    .click(function (event) {
        // On-page links
        if (
            location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '')
            &&
            location.hostname === this.hostname
        ) {
            // Figure out element to scroll to
            var target = $(this).data('target');
            target = target.length ? $(target) : target;
            // Does a scroll target exist?
            console.log(target);
            if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top - 75
                }, 1000);
            }
        }
    });
