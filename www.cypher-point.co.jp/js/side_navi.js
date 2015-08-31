$(document).ready(function() {
	
	$("#navi02").click(function () {
		
		var targetUL = $("ul",$(this).parent());
		var targetImg = $("img",this);
		var ulHeight = targetUL.height();
		
		if ( ulHeight == 0) {
			
			targetUL.animate({
				height: "150px"
			}, 500 );
			
		} else if ( ulHeight == 150 ) {
			
			targetUL.animate({
				height: "0px"
			}, 500 );
			
		}
		
		return false;
	});
	
});