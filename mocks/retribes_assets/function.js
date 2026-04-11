// JavaScript Document
// スマホアコーディオンメニュー
$(function(){
	"use strict";
	$(".menu_btn").on("click", function() {
		$(".gl_nav").slideToggle();
	});
});

// スマホアコーディオンメニュー
$(function() {
	$('.menu-trigger').on('click', function(){
		$('.gl_nav').slideToggle(300);
		$(".menu-trigger, .gl_nav, header, html").toggleClass('active');
		$('.overlay_h').toggleClass('toggle_open');
		});
		// メニューを閉じる
		$('.gl_nav a').on('click', function(){
		$('.active .gl_nav').fadeOut(300);
		$(".menu-trigger, .gl_nav, header, html").removeClass('active');
		$('.overlay_h').removeClass('toggle_open');
	});
});


// scroll
jQuery(function($){
	var headerHeight = $('header').outerHeight();
	var urlHash = location.hash;
	if(urlHash) {
		$('body,html').stop().scrollTop(0);
		setTimeout(function(){
			var target = $(urlHash);
			var position = target.offset().top - headerHeight;
			$('body,html').stop().animate({scrollTop:position}, 1000 ,"easeInOutQuad");
		}, 100);
	}
	$('a[href^="#"]').click(function() {
		var href= $(this).attr("href");
		var target = $(href);
		var position = target.offset().top - headerHeight;
		$('body,html').stop().animate({scrollTop:position}, 1000 ,"easeInOutQuad");	
	});
	
	var _window = $(window),
		_header = $('.site-header'),
		heroBottom,
		startPos,
		winScrollTop;

	_window.on('scroll',function(){
		winScrollTop = $(this).scrollTop();
		heroBottom = $('.hero').height();
		if (winScrollTop >= startPos) {
			if(winScrollTop >= heroBottom){
				_header.addClass('hide');
			}
		} else {
			_header.removeClass('hide');
		}
		startPos = winScrollTop;
	});

	_window.trigger('scroll');
	
});

//Pagetop
$(function() {
	var pagetop = $('.page_top');
	pagetop.css({'display': 'none'});
	$(window).scroll(function () {
	if ($(this).scrollTop() > 100) {
	pagetop.fadeIn();
	} else {
	pagetop.fadeOut();
	}
	});

	pagetop.click(function () {
	$('html,body').animate({scrollTop: 0}, 500, "easeInOutQuad");
	return false;
	});
});


// TOP画像アニメ
$(function() {
	$('.scroll_btn').delay(2700).queue(function(next) {
		$(this).animate({
			'opacity':'1'
		},1500);
		// $(this).addClass('animate__animated animate__fadeInDown');
		$(this).addClass('visible');
		next();
	});
});


// ヘッダー
jQuery(window).on('scroll', function () {
　if (300 < jQuery(this).scrollTop()) {
　　jQuery('header').addClass('change');
　} else {
　　jQuery('header').removeClass('change');
　}
});


// 画面に表示されたらアニメーション
$(function () {
    // aimation呼び出し
    if ($('.js-scroll-trigger').length) {
        scrollAnimation();
    }
    // aimation関数
    function scrollAnimation() {
        $(window).scroll(function () {
            $(".js-scroll-trigger").each(function () {
                let position = $(this).offset().top,
                    scroll = $(window).scrollTop(),
                    windowHeight = $(window).height();

                if (scroll > position - windowHeight + 200) {
                    $(this).addClass('is-animated');
                }
            });
        });
    }
    $(window).trigger('scroll');
});
