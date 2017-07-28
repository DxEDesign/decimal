/**
 *
 * [Template Name: Decimal - One Page Creative Template]
 * Version: 1.0.0
 * Author: DxE-Design
 * Website: http://dxe-design.com
 *
 */

$(document).ready(function() {
    $(".ctrl__button").click(function() {
        $(".ctrl").toggleClass("active");
    });

    $(".ctrl__color--default").click(function() {
        onClick("ctrl__color--default", "dark", true);
    });

    $(".ctrl__color--dark").click(function() {
        onClick("ctrl__color--dark", "dark", false);
    });

    $(".ctrl__color--green").click(function() {
        onClick("ctrl__color--green", "green", false);
    });

    $(".ctrl__color--orange").click(function() {
        onClick("ctrl__color--orange", "orange", false);
    });

    $(".ctrl__color--blue").click(function() {
        onClick("ctrl__color--blue", "blue", false);
    });

    $(".ctrl__color--red").click(function() {
        onClick("ctrl__color--red", "red", false);
    });

    $(".ctrl__color--purple").click(function() {
        onClick("ctrl__color--purple", "purple", false);
    });
});


/* All parts information arange in an array */
var partsArray = [
    // Main Logo Part
    {
        selector: "main__logo",
        exclude: null,
        colorFix: null
    },
    {
        selector: "main__line",
        exclude: null,
        colorFix: null
    },


    // Navigation Part
    {
        selector: "nav__color",
        exclude: null,
        colorFix: null
    },


    // Header Part
    {
        selector: "header",
        exclude: null,
        colorFix: null
    },
    {
        selector: "header__button-1",
        exclude: null,
        colorFix: null
    },
    {
        selector: "header__button-2",
        exclude: null,
        colorFix: null
    },


    // Search Page Part
    {
        selector: "btn-search",
        exclude: null,
        colorFix: true
    },
    {
        selector: "search__input",
        exclude: null,
        colorFix: true
    },


    // Content Part
    {
        selector: "content__heading-1",
        exclude: "light",
        colorFix: null
    },
    {
        selector: "content__heading-2",
        exclude: "light",
        colorFix: null
    },
    {
        selector: "content__tagline",
        exclude: null,
        colorFix: null
    },
    {
        selector: "content__text",
        exclude: null,
        colorFix: null
    },
    {
        selector: "content__link",
        exclude: null,
        colorFix: null
    },
    {
        selector: "content__bg",
        exclude: "light",
        colorFix: null
    },
    {
        selector: "content__line",
        exclude: "light",
        colorFix: null
    },
    {
        selector: "content__button",
        exclude: "dark",
        colorFix: true
    },
    {
        selector: "content__overlay-1",
        exclude: null,
        colorFix: null
    },


    // Portfolio Part
    {
        selector: "portfolio__filter",
        exclude: null,
        colorFix: null
    },


    // Pricing Part
    {
        selector: "pricing__column",
        exclude: null,
        colorFix: null
    },
    {
        selector: "pricing__button",
        exclude: null,
        colorFix: null
    },


    // Achievement Part
    {
        selector: "achievements__number",
        exclude: null,
        colorFix: null
    },


    // Contact Part
    {
        selector: "contact__input",
        exclude: null,
        colorFix: null
    },
    {
        selector: "contact__textarea",
        exclude: null,
        colorFix: null
    },
    {
        selector: "contact__button",
        exclude: null,
        colorFix: true
    },


    // Footer Part
    {
        selector: "footer__link",
        exclude: null,
        colorFix: null
    },
    {
        selector: "footer__icon",
        exclude: null,
        colorFix: null
    },
    {
        selector: "footer__button",
        exclude: null,
        colorFix: null
    },
    {
        selector: "footer__copyright",
        exclude: null,
        colorFix: null
    }
];

/* Handle all color buttons when on click */
function onClick(className, color, check_default) {
    if (!$("." + className).hasClass("active")) {
        $("div[class*='ctrl__color--']").removeClass("active"); // remove all active class
        $("." + className).addClass("active");
        changeColor(color, check_default);
    }
}

/* - Decimal Style Change Logics - */
function changeColor(color, check_default) {
    partsArray.forEach(function(obj) {
        $("." + obj.selector).removeClass(function(index, className) {
            // get the original color, but not alter it
            var colorCode = color;

            // if obj.exclude is not null, proceed below logic
            if (obj.exclude) {
                // if obj.colorFix is not null, proceed below logic
                if (obj.colorFix) {
                    // special case: if argument color is dark, but some button is light in dark theme,
                    // so this logic applies to it
                    if (colorCode === "dark")
                        colorCode = "light";
                }

                var checker = className.match(new RegExp(obj.selector + "--" + obj.exclude));
                var re = new RegExp(obj.selector + "--(?:(?!" + colorCode + ")\\w)\\w+");

                // if checker is matched, skip it
                if (checker === null) {
                    $(this).addClass(obj.selector + "--" + colorCode);
                    return (className.match(re) || []).join(' ');
                }
            } else if (!obj.exclude) {
                // if obj.colorFix is not null, proceed below logic
                if (obj.colorFix) {
                    // special case: if argument color is dark, but some button is light in dark theme,
                    // so this logic applies to it
                    if (colorCode === "dark")
                        colorCode = "light";
                }

                // if check_default is true, revert the colorCode to default
                // NOTES: this apply only to header__button-1 and header__button-2
                if ((obj.selector === "header__button-1" || obj.selector === "header__button-2") && check_default) {
                    colorCode = "default";
                }

                var re = new RegExp(obj.selector + "--(?:(?!" + colorCode + ")\\w)\\w+");

                $(this).addClass(obj.selector + "--" + colorCode);
                return (className.match(re) || []).join(' ');
            }
        });
    });
}
