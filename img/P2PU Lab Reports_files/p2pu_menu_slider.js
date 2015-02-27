(function($) {
    var template = '<div class="p2pu-panel-wrap" style="display: none">' +
        '<div class="panel-contents clearfix">' +
        '<div class="connect">' +
        '&nbsp;' +
        '</div>' +
        '<div class="connect">' +
        '<div class="connect-inner">' +
        '<h4>About</h4>' +
        '<ul class="unstyled list-unstyled">' +
        '<li>' +
        '<hr>' +
        '<a href="http://info.p2pu.org/about">P2PU</a> -- <a href="http://info.p2pu.org/people">Our People</a></li>' +
        '<li>' +
        '<hr>' +
        '<a href="http://info.p2pu.org">Blog</a></li>' +
        '<li>' +
        '<hr>' +
        '<a href="http://reports.p2pu.org">Reports</a> -- <a href="http://info.p2pu.org/research/">Research</a></li>' +
        '</ul>' +
        '</div>' +
        '</div>' +
        '<div class="connect">' +
        '<div class="connect-inner">' +
        '<h4>Learn</h4>' +
        '<ul class="unstyled list-unstyled">' +
        '<li>' +
        '<hr>' +
        '<a href="https://p2pu.org/en/groups/list/community/">Courses</a></li>' +
        '<li>' +
        '<hr>' +
        '<a href="http://badges.p2pu.org">Badges</a></li>' +
        '<li>' +
        '<hr>' +
        '<a href="https://p2pu.org/en/#schools">Schools</a></li>' +
        '</ul>' +
        '</div>' +
        '</div>' +
        '<div class="connect">' +
        '<div class="connect-inner">' +
        '<h4>Connect With Us</h4>' +
        '<ul class="unstyled list-unstyled">' +
        '<li>' +
        '<hr>' +
        '<a href="http://p2pu.org">P2PU.org</a></li>' +
        '<li>' +
        '<hr>' +
        '<a href="http://community.p2pu.org">Community Forum</a></li>' +
        '<li>' +
        '<hr>' +
        '<a href="http://www.facebook.com/P2PUniversity" target="_blank"><i class="icon-facebook-sign"></i></a>' +
        '<a href="http://twitter.com/p2pu" target="_blank"><i class="icon-twitter-sign"></i></a>' +
        '<a href="http://info.p2pu.org/contact/" target="_blank"><i class="icon-envelope"></i></a>' +
        '</li>' +
        '</ul>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '<div class="p2pu-color-divider-wrap">' +
        '<div class="p2pu-color-divider"></div>' +
        '</div>' +
        '</div>';

    var Slider = function(element, options) {
        this.element =
        this.options =
        this.trigger = null;

        this.init(element, options);
    };

    Slider.DEFAULTS = {
        panel: '.p2pu-panel-wrap',
        navbarContainer : '.navbar',
        template: template,
        trigger: 'click',
        icon: '.p2pu-tab-icon',
        iconUp: 'icon-chevron-sign-down',
        iconDown: 'icon-chevron-sign-up',
        includeCSS: true
    };

    Slider.prototype.getDefaults = function () {
        return Slider.DEFAULTS
    };

    Slider.prototype.getOptions = function (options) {
        options = $.extend({}, this.getDefaults(), options);

        return options;
    };

    Slider.prototype.init = function (element, options) {
        this.element = $(element);
        this.options  = this.getOptions(options);

        // append panel in the DOM
        $(this.options.navbarContainer).prepend(this.options.template);

        // Include CSS
        if (this.options.includeCSS){
            this.addCss();
        }

        var trigger = this.options.trigger;

        if (trigger == 'click') {
            this.element.on('click', null, this.options.panel, $.proxy(this.toggle, this))
        }

    };

    Slider.prototype.toggle = function (e) {
        e.preventDefault();
        var panel = $(this.options.panel);
        panel.slideToggle('fast', $.proxy(this.callDelegated, this, panel));

    };

    Slider.prototype.callDelegated = function(panel) {
        var icon = $(this.options.icon);
        panel.is(':visible')?
            this.switchIcon(icon, this.options.iconUp, this.options.iconDown):
            this.switchIcon(icon, this.options.iconDown, this.options.iconUp);
    };

    Slider.prototype.switchIcon = function(icon, aremoveIcon, addIcon){
        icon.removeClass(aremoveIcon).addClass(addIcon);
    };

    Slider.prototype.addCss = function(){
        var css_link = $("<link>", {
            rel: "stylesheet",
            type: "text/css",
            href: "//rawgithub.com/p2pu/p2pu_navigation_widget/master/css/panel.css"
        });
        css_link.appendTo('head');
    };

    $.fn.p2puSlider = function(options) {

        return this.each( function() {
            var $this = $(this);

            new Slider($this, options);
        });

    };


}(jQuery));
