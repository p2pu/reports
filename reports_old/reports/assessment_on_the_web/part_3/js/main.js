/**************************************************************
 * Assessment On The Web Report index.html template helper.
 **************************************************************/

/*global window */
/*global jQuery */
/*global console */

var Report = window.Report || {};

(function ($, Report) {

    "use strict";
    var init = function () {
        $(function () {
            $(".p2pu-tab").p2puSlider({
                navbarContainer: '.navbar',
                icon: '.p2pu-tab-icon',
                iconUp: 'glyphicon-chevron-down',
                iconDown: 'glyphicon-chevron-up'
            });
        });
    };

    Report.Homepage = {};
    Report.Homepage.init = init;

}(jQuery, Report));
