jQuery(document).ready(function($) {
								
	$("#member_list > a").click(function () {
										  
		// 最初に開く人を設定
		var name = $(this).attr("href");
		switch ( name ) {
		
			case '#kuriwada':
				pageNo = 1;
				$("#staff_detail > .contents_wrap > .inner").css("left", "0px");
			break;
		
			case '#ohashi':
				pageNo = 2;
				$("#staff_detail > .contents_wrap > .inner").css("left", "-710px");
			break;
		
			case '#ohashi':
				pageNo = 2;
				$("#staff_detail > .contents_wrap > .inner").css("left", "-1420px");
			break;
		
			case '#satoy':
				pageNo = 3;
				$("#staff_detail > .contents_wrap > .inner").css("left", "-1420px");
			break;
		
			case '#satot':
				pageNo = 4;
				$("#staff_detail > .contents_wrap > .inner").css("left", "-2130px");
			break;
		
			/*
			case '#maseki':
				pageNo = 3;
				$("#staff_detail > .contents_wrap > .inner").css("left", "-1420px");
			break;
		
			case '#satoy':
				pageNo = 4;
				$("#staff_detail > .contents_wrap > .inner").css("left", "-2130px");
			break;
		
			case '#satot':
				pageNo = 5;
				$("#staff_detail > .contents_wrap > .inner").css("left", "-2840px");
			break;
			
			case '#abe':
				pageNo = 6;
				$("#staff_detail > .contents_wrap > .inner").css("left", "-3550px");
			break;
			*/
			
		}
		
		var obj = getClientArea();
		var vPosition = $("html,body").scrollTop() + 50;
		var hPosition = Math.floor((obj['w'] - 725)/2);
		$("#staff_detail").css("top", vPosition + "px");
		$("#staff_detail").css("left", hPosition + "px");
		$("#staff_detail").fadeIn(250);
		
		return false;
		
	});
	
	$("#btn_close").click(function () {
									
		$("#staff_detail").fadeOut(250);
		
		return false;
		
	});
	
	var contents = $("#staff_detail > .contents_wrap > .inner > div.contents");
	var cNum = contents.length;
	var moveFlg = false;
	var pageNum = 1;
	var pageNo = 1;
	
	// ulのwidthを指定
	var ulWidth = ( ( cNum + 2 ) * 710 ) + "px";
	$("#staff_detail > .contents_wrap > .inner").css("width",ulWidth);
	
	// 総ページ数のチェック
	pageNum = cNum;
	
	// 移動が可能かどうかの判定
	if ( pageNum > 1 ) {
		moveFlg = true;
	}
	
	// ボタンの制御
	if ( !moveFlg ) {
		$("#btn_left").addClass("off");
		$("#btn_right").addClass("off");
	} else {
		$("#btn_left").addClass("off");
	}
	
	$("#btn_left").click(function() {
		
		pageNo--;
		
		$("#btn_right").removeClass("off");
		
		if ( pageNo == 1 ) {
			$(this).addClass("off");
		} else if ( pageNo < 1 ) {
			pageNo = 1;
			return false;
		} else {
			$(this).removeClass("off");
		}
		
		$("#staff_detail > .contents_wrap > .inner").animate({"left": "+=710px"}, "slow");
		
		return false;
		
	});
	
	$("#btn_right").click(function() {
	
		pageNo++;
		
		$("#btn_left").removeClass("off");
		
		if ( pageNo == pageNum ) {
			$(this).addClass("off");
		} else if ( pageNo > pageNum ) {
			pageNo = pageNum;
			return false;
		} else {
			$(this).removeClass("off");
		}
	
		$("#staff_detail > .contents_wrap > .inner").animate({"left": "-=710px"}, "slow");
		
		return false;
		
	});
	
});