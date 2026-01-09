$(document).ready(function () {

    const OFFSET = 90;

    $('a[href^="#"]').on('click', function (e) {
        const target = $(this.getAttribute('href'));

        if (target.length) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top - OFFSET
            }, 600);
        }
    });

    $(window).on('scroll', function () {
        var scrollPos = $(document).scrollTop();
        $('#navbarNav .nav-link, #navbarNav .dropdown-item').each(function () {
            var currLink = $(this);
            var refElement = $(currLink.attr("href"));
            if (refElement.length && refElement.position().top <= scrollPos + 100 && refElement.position().top + refElement.height() > scrollPos + 100) {
                $('#navbarNav .nav-link, #navbarNav .dropdown-item').removeClass("active");
                currLink.addClass("active");

                // Add active to parent if dropdown-item
                if (currLink.hasClass('dropdown-item')) {
                    currLink.closest('.nav-item.dropdown').find('.nav-link').addClass('active');
                }
            }
        });
    });

});
