// ■画像ロールオーバー
// http://rewish.org/javascript/jquery_rollover_plugin
jQuery.fn.rollover = function(suffix) {
	suffix = suffix || '_on';
	var check = new RegExp(suffix + '\\.\\w+$');
	return this.each(function() {
		var img = jQuery(this);
		var src = img.attr('src');
		if (check.test(src)) return;
		var _on = src.replace(/\.\w+$/, suffix + '$&');
		jQuery('<img>').attr('src', _on);
		img.hover(
			function() { img.attr('src', _on); },
			function() { img.attr('src', src); }
		);
	});
};

// ■スムーズスクロール
// http://www.daichifive.com/
(function(jQuery) {
	jQuery.fn.scRoller = function() {
		return this.each(function() {
			jQuery(this).click(function() {
				jQuery('html,body').animate({
					scrollTop: jQuery(jQuery(this).attr("href")).offset().top
				});
				return false;
			});
		});
	};
})(jQuery);

//■inputのフォーカス
jQuery.fn.inputFocus = function(suffix) {
	return this.each(function() {
		jQuery(this).css({"color":"#CCCCCC"});
		if(jQuery(this).val() === '') {
			jQuery(this).val(jQuery(this).attr('title'));	
		} else if(jQuery(this).val() != jQuery(this).attr('title')) {
			jQuery(this).css({"color":"#333333"});
			jQuery(this).addClass('focused');
		}
		
		jQuery(this).focus(function() {
			jQuery(this).css({"color":"#333333"});
			if(jQuery(this).val() == jQuery(this).attr('title')) {
				jQuery(this).val('').addClass('focused');	
			}
		});
		jQuery(this).blur(function() {
			if(jQuery(this).val() === '') {
				jQuery(this).css({"color":"#CCCCCC"});
				jQuery(this).val(jQuery(this).attr('title')).removeClass('focused');
			}
		}).trigger('blur').parents('form').submit(function(){
			var inputTags = jQuery("input[title]",this);
			inputTags.each(function(){
				if(jQuery(this).val() === jQuery(this).attr('title') ){
					jQuery(this).val("")
				}
			});
		});
	});
};

// 画像サイズを正方形に合わせる
$.fn.fixImgSize = function(size) {
	
	return this.each(function(i){
							  
		var w = jQuery(this).width();
		var h = jQuery(this).height();

		var fixW;
		var fixH;
		
		if( w >= h ) {
			
			fixW = size;
			fixH = parseInt((h*size)/w);
			mgT = parseInt((size-fixH)/2);
			mgB = parseInt((size-fixH)/2);
			mgL = parseInt((size-fixW)/2);
			mgR = parseInt((size-fixW)/2);
			jQuery(this).css({"width": + fixW + "px" ,"height": + fixH + "px", "margin-top": + mgT + "px", "margin-bottom": + mgB + "px", "margin-left": + mgL + "px", "margin-right": + mgR + "px", "visibility":"visible"});
			
		} else {
			
			fixW = parseInt((w*size)/h);
			fixH = size;
			mgT = parseInt((size-fixH)/2);
			mgB = parseInt((size-fixH)/2);
			mgL = parseInt((size-fixW)/2);
			mgR = parseInt((size-fixW)/2);
			jQuery(this).css({"width": + fixW + "px" ,"height": + fixH + "px", "margin-top": + mgT + "px", "margin-bottom": + mgB + "px", "margin-left": + mgL + "px", "margin-right": + mgR + "px", "visibility":"visible"});
			
			if(ieVer == 6) {
				jQuery(this).css({"display":"block"});
			}
		}
				
	});
};

// 高さ合わせ
$.fn.fixHeight = function(size) {
	
	return this.each(function(i){
							  
		var h = jQuery(this).height();

		var fixH = h;
		
		mgT = parseInt((size-fixH)/2);
		mgB = parseInt((size-fixH)/2);
		jQuery(this).css({"height": + fixH + "px", "margin-top": + mgT + "px", "margin-bottom": + mgB + "px","visibility":"visible"});
			
		if(ieVer == 6) {
			jQuery(this).css({"display":"block"});
		}
				
	});
};
