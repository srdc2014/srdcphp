/**
 * 
 * @authors 襄阳尚睿德创 (www.xyphp.com,www.xyphp.net)
 * @date    2014-08-29 10:31:10
 * @version $v2.0$
 */

$(document).ready(function() {
    $('ul.menu > li').hover(function() {
        $(this).addClass('hover');
    },
    function() {
        $(this).removeClass('hover');
    })

    var timeout = 500;
    var closetimer = 0;
    var ddmenuitem = 0;
    function navs_open() {
        navs_canceltimer();
        navs_close();
        ddmenuitem = $(this).find('ul').eq(0).css('visibility', 'visible');
    }
    function navs_close() {
        if (ddmenuitem) ddmenuitem.css('visibility', 'hidden');
    }
    function navs_timer() {
        closetimer = window.setTimeout(navs_close, timeout);
    }
    function navs_canceltimer() {
        if (closetimer) {
            window.clearTimeout(closetimer);
            closetimer = null;
        }
    }
    $(document).ready(function() {
        $('ul.menu > li').bind('mouseover', navs_open);
        $('ul.menu > li').bind('mouseout', navs_timer);
    });
    document.onclick = navs_close;
});