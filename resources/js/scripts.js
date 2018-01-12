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


    // var waypoints = $('#handler-first').waypoint(function (direction) {
    //     notify(this.element.id + ' hit 25% from top of window')
    // }, {
    //     offset: '25%'
    // })
});