/**************************************************************
 * Badges base.html template helper.
 **************************************************************/

/*global window */
/*global jQuery */
/*global console */

var Reports = window.Reports || {};

(function ($, Reports) {

    "use strict";
    /* Altera o menu de acordo com a posiÃ§Ã£o da pÃ¡gina */
    // Cache selectors
    var lastId,
        topMenu = $("#top-menu"),
        topMenuHeight = topMenu.outerHeight() - 35,
    // All list items
        menuItems = topMenu.find("a"),
    // Anchors corresponding to menu items
        scrollItems = menuItems.map(function () {
            var item = $($(this).attr("href"));
            if (item.length) {
                return item;
            }
        });

    // Bind click handler to menu items
    // so we can get a fancy scroll animation
    menuItems.click(function (e) {
        var href = $(this).attr("href"),
            offsetTop = href === "#" ? 0 : $(href).offset().top - topMenuHeight + 1;
        $('html, body').stop().animate({
            scrollTop: offsetTop
        }, 300);
        e.preventDefault();
    });

    // Bind to scroll
    $(window).scroll(function () {
        // Get container scroll position
        var fromTop = $(this).scrollTop() + topMenuHeight,

        // Get id of current scroll item
            cur = scrollItems.map(function () {
                if ($(this).offset().top < fromTop) {
                    return this;
                }
            });
        // Get the id of the current element
        cur = cur[cur.length - 1];
        var id = cur && cur.length ? cur[0].id : "";

        if (lastId !== id) {
            lastId = id;
            // Set/remove active class
            menuItems
                    .parent().removeClass("active")
                    .end().filter("[href=#" + id + "]").parent().addClass("active");
        }
    });
    $('.nav-collapse .nav > li > a').click(function () {
        $('.collapse.in').removeClass('in').css('height', '0');
    });

    var init = function () {
            $(function () {
                $(".p2pu-tab").p2puSlider({
                    navbarContainer: '.navbar',
                    icon: '.p2pu-tab-icon',
                    iconUp: 'icon-chevron-sign-down',
                    iconDown: 'icon-chevron-sign-up'
                });

            });
        };



    Reports.Show = {};
    Reports.Show.init = init;

}(jQuery, Reports));



