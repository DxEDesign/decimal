/**
 *
 * [Template Name: Decimal - One Page Creative Template]
 * Version: 1.0.0
 * Author: DxE-Design
 * Website: http://dxe-design.com
 *
 */


$(document).ready(function() {
    initYTPlayer(); // YT = YouTube player
});

/* YTPlayer */
// Init youtube player video as background
// (NOTES: this does not support on Mobile Browser)
function initYTPlayer() {
    if (!$.browser.mobile) {
        // init youtube player if desktop browser
        /* This player doesn’t work as background for mobile devices
           due to the restriction policy adopted by all on managing
           multimedia files via javascript */
        $('.header__player').YTPlayer();
    } else {
        // revert to static background if mobile device
        $('.header__player').addClass("header__background-4");
    }
}
