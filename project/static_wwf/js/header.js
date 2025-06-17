$(document).ready(function() {

    $('.gnb > ul > li, header').hover(function() {
        $('header').stop().animate({ 'background-color' : '#fff' }, 200);

        $('.gnb > ul > li > a, .header_right_gnb > ul > li > a').css({ 'color' : '#191919' });
        $(this).children("a").stop().animate({ 'color' : '#fff', 'background-color' : '#000' }, 120);

        /*돋보기*/
        $('.header_search').css({ 'background-position' : '50% -44px' });

        $('.gnb > ul > li > ul > li').stop().slideDown(200);
        $('.nav_bg').stop().slideDown(200).css({ 'border-top' : '1px solid #edeeef' });
    }, function() {
        $('header').stop().animate({ 'background-color' : 'transparent' }, 200);

        $('.gnb > ul > li > a, .header_right_gnb > ul > li > a').css({ 'color' : '#fff' });
        $(this).children("a").stop().animate({ 'background-color' : 'transparent' }, 120);

        /*돋보기*/
        $('.header_search').css({ 'background-position' : '50% 0px' });
        
        $('.gnb > ul > li > ul > li').stop().slideUp(200);
        $('.nav_bg').stop().slideUp(200);
    });

    $('.campaign_box').hover(function() {
        $(this).find('.campaign_box_title_wrap').stop().animate({ 'padding-bottom' : '90px', 'background-color' : 'rgba(0, 0, 0, 0.4);' }, 150);
    }, function () {
        $(this).find('.campaign_box_title_wrap').stop().animate({ 'padding-bottom' : '46px',  'background-color' : 'transparent' }, 150);
    });


});