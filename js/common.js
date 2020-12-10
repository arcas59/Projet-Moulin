//TOP FV MOVIE
		$(window).on('load',function(){
    fitImg( $('.js-fit-hero') );
     
    $('.js-fit-post-img').each(function(){
        fitImg( $(this) );
    });
});
 
$(window).on('resize',function(){
    fitImg( $('.js-fit-hero') );
     
    $('.js-fit-post-img').each(function(){
        fitImg( $(this) );
    });
});
     
function fitImg(object){        
    //親要素取得
    var parent = object.parent();
 
    //画像サイズ取得
    var imgW = object.width();
    var imgH = object.height();
 
    //フィットさせる親要素のサイズ取得
    var parentW = parent.width();
    var parentH = parent.height();  
 
    //幅・高さの拡大率取得
    var scaleW = parentW / imgW;
    var scaleH = parentH / imgH;
 
    //幅・高さの拡大率の大きいものを取得
    var fixScale = Math.max(scaleW, scaleH);
 
    //画像の幅高さを設定
    var setW = imgW * fixScale;
    var setH = imgH * fixScale;
 
    //画像の位置を設定
    var moveX = Math.floor((parentW - setW) / 2);
    var moveY = Math.floor((parentH - setH) / 2);
 
    //設定した数値でスタイルを適用
    //親要素のスタイル
    parent.css({
        'overflow': 'hidden',
        'position' : 'relative'
    });
    //フィットさせる要素のスタイル
    object.css({
        'position': 'absolute',
        'width': setW,
        'height': setH,
        'left' : moveX,
        'top' : moveY
    });
}

// TOP NEWS SLIDER

$(function(){
	 $('.slider').bxSlider({
		auto: true,
		minSlides: 1,
		maxSlides: 1,
		touchEnabled:false
	});
});


// TOP NEWS TAB

jQuery(function($){
    $('.tab').click(function(){
        $('.is-active').removeClass('is-active');
        $(this).addClass('is-active');
        $('.is-show').removeClass('is-show');
        // クリックしたタブからインデックス番号を取得
        const index = $(this).index();
        // クリックしたタブと同じインデックス番号をもつコンテンツを表示
        $('.panel').eq(index).addClass('is-show');
		
		// 次へボタン
		var _ul = $('.list_news[data-slug="' + $(this).data('slug') + '"]');
		
		$('.newsMoreBtn').hide();
		if ($('li:hidden', _ul).length > 0)  $('.newsMoreBtn[data-slug="' + $(this).data('slug') + '"]').show();
    });
	
	$('.newsMoreBtn').on('click', function() {
		var _ul = $('.list_news[data-slug="' + $(this).data('slug') + '"]');
		
		//console.log($('li:visible', _ul).length + _ul.data('noh'));

		$('li:lt(' + ($('li:visible', _ul).length + _ul.data('noh')) + ')', _ul).fadeIn();
		
		if ($('li:hidden', _ul).length == 0) $(this).hide();
		
		return false;
	});
});


// PRODUCT DETAILS
$(window).on('load',function(){
  $('ul.list_product > li > a').click(function(){
    $('ul.list_product li').removeClass('cr');
    $(this).parent('li').addClass('cr');

    $('.wrap').fadeOut();
    $(this).next('.wrap').fadeToggle();

    var h = $('header').outerHeight();    
    var speed = 500;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top - h;

    $('body,html').animate({
      scrollTop: position
    }, speed, 'swing');
    return false;
  });

  $('p.close > a').click(function(){
    $('ul.list_product li').removeClass('cr');
    $('.wrap').hide();

    var h = $('header').outerHeight();    
    var speed = 500;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top - h;

    $('body,html').animate({
      scrollTop: position
    }, speed, 'swing');
    return false;
  });
});


// PRODUCT LIST
$(function(){
    var elem = "";
    for (var i = -1; ++i < 10;) {
        elem += '<li class="empty"></li>';
    }
    $("ul.list_product").append(elem);
});

var searchItem = '#productNav li span';
var listItem = '.list_product li';
var hideClass = 'hide';
var activeClass = 'active';

$(function() {
    $(searchItem).on('click', function() {
        $('ul.list_product li').removeClass('cr');
        $('.wrap').hide();
        $('.list_product').hide();
        $(listItem).removeClass(activeClass);
        $(searchItem).removeClass(activeClass);
        var group = $(this).addClass(activeClass).data('group');
        search_filter(group);
    });
});

function search_filter(group) {
    $('.list_product').fadeIn();
    $(listItem).removeClass(hideClass);
    $(listItem).addClass(activeClass);

    for (var i = 0; i < $(listItem).length; i++) {
        var itemData = $(listItem).eq(i).data('group');
        if(itemData === group) {
            $(listItem).eq(i).addClass(activeClass);
        }
        if(itemData !== group) {
            $(listItem).eq(i).addClass(hideClass);
        }
    }
    if(group === 'all') {
      $(listItem).removeClass(hideClass);
      $(listItem).addClass(activeClass);
    }}