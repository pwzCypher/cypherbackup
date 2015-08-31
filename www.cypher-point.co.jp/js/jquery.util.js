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
$('.btn').rollover();

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

jQuery(function(){
	jQuery("a[href^=#]").not('a[href=#]').scRoller();
});
