var ieVer = 0;

jQuery(function(){
				
	// IEのチェック
	ieVer = checkIEVer();
	
	// onloadイベントの追加
	addOnLoadEvent(function() {
							
		jQuery('.btn_top_right').exFixed(); // トップへ戻るの固定（IE6用）
		jQuery("a[href^=#]").not("a[href=#]").scRoller();
		jQuery(".btn").rollover();
		jQuery("input[title]").inputFocus();
		
		if( ieVer==6 ) {
			jQuery("#header").fixPng();
		}
	
		jQuery('.bg_scroll').each(function(){
										   
			var obj = jQuery(this);
			var ot = jQuery(this).offset().top;
			
			var y = jQuery(window).scrollTop();
			
			if ( ot != 0 ) {
				jQuery(obj).css('background-position', 'center ' + ( parseInt( ( y - ot ) / 1.5 + 50 ) ) + 'px');
			} else {
				jQuery(obj).css('background-position', 'center ' + ( parseInt( ( y - ot ) / 1.5 ) ) + 'px');
			}
			
			jQuery(window).scroll(function(){
				y = jQuery(window).scrollTop();
				if ( ot != 0 ) {
					jQuery(obj).css('background-position', 'center ' + ( parseInt( ( y - ot ) / 1.5 + 50 ) ) + 'px');
				} else {
					jQuery(obj).css('background-position', 'center ' + ( parseInt( ( y - ot ) / 1.5 ) ) + 'px');
				}
			});
			
		});
		
		
	});

});

function addOnLoadEvent(handler) {
    jQuery.event.add(window, "load", handler);
}

function checkIEVer() {
	return (function(){
		var undef, v = 3, div = document.createElement('div');
		while (
			div.innerHTML = '<!--[if gt IE '+(++v)+']><i></i><![endif]-->',
			div.getElementsByTagName('i')[0]
		);
		return v> 4 ? v : undef;
	}());
}