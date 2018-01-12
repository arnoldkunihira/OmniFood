// noinspection JSValidateTypes
/**
 * Creating some JQuery for cool effects on the Web page.
 */
$(document).ready(function () {

    //Adding the waypoints plugin and 'direction' is to detect whether the URL is scrolling up the
    // webpage or down
    $('.js--section-features').waypoint(function (direction) {
        if (direction == "down") {
            $('nav').addClass('sticky')
        } else {
            $('nav').removeClass('sticky');
        }
        //    Happens before we hit the js--section-features
    }, {
        offset: '60px'
    });

    /* Animations on Scroll*/

    $('.js--waypoint-1').waypoint(function () {
        $('.js--waypoint-1').addClass('animated fadeIn')
    }, {
        offset: '50%'
    });

    $('.js--waypoint-2').waypoint(function () {
        $('.js--waypoint-2').addClass('animated fadeInUp')
    }, {
        offset: '50%'
    });

    $('.js--waypoint-3').waypoint(function () {
        $('.js--waypoint-3').addClass('animated fadeIn')
    }, {
        offset: '50%'
    });

    $('.js--waypoint-4').waypoint(function () {
        $('.js--waypoint-4').addClass('animated pulse')
    }, {
        offset: '50%'
    });
});