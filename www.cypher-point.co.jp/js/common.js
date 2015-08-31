$(document).ready(function() {
						   
	addOnLoadEvent(function(){
	
		var left_navi_height = ( $("#left_navi").height() + 150 );
		var contents_height = $("#contents").height();
		
		if ( left_navi_height > contents_height ) {
			$("#left_navi").height(( left_navi_height + 20 ));
			$("#contents").height(( left_navi_height + 20 ));
			$("#contents > .contents_title").height(( left_navi_height + 20 ));
		} else if ( left_navi_height < contents_height ) {
			$("#left_navi").height(( contents_height + 20 ));
			$("#contents").height(( contents_height + 20 ));
			$("#contents > .contents_title").height(( contents_height + 20 ));
		}
		
		initScheduleAlertPos();
		initScheduleAlertPos2();
		$(window).scroll(function () {
			setScheduleAlertPos();
			setScheduleAlertPos2();
		});
		$(window).resize(function () {
			setScheduleAlertPos();
			setScheduleAlertPos2();
		});
	
	});
	
});

$.preloadImages = function() {
	for(var i = 0; i<arguments.length; i++) {
		jQuery("<img>").attr("src", arguments[i]);
	}
};

$.preloadImages(
"img/bg_top_link_portal_on.jpg",
"img/bg_top_link_web_on.jpg",
"img/bg_top_link_cms_on.jpg",
"img/bg_top_link_ria_on.jpg",
"img/bg_top_link_smartphone_on.jpg",
"img/bg_top_link_vision_on.jpg",
"img/bg_top_link_recruit_on.jpg",
"img/bg_top_link_company_on.jpg",
"img/bg_top_link_member_on.jpg"
);

// ---------------------------------------------------------------------------------
// コンテンツ領域の最大値を取得
// ---------------------------------------------------------------------------------
function getClientArea() {

	// IE以外のブラウザ
	if ((!document.all || window.opera) && document.getElementById) {
	
		clientX = window.innerWidth;
		clientY = window.innerHeight;

	// Windows IE6 ・ 標準モード		
	} else if (document.getElementById && (document.compatMode=='CSS1Compat')) {
	
		clientX = document.documentElement.clientWidth;
		clientY = document.documentElement.clientHeight;

	// その他のIE		
	} else if (document.all) {
	
		clientX = document.body.clientWidth;
		clientY = document.body.clientHeight;
	
	// その他(非対応ブラウザ)	
	} else {
	
		clientX = 0;
		clientY = 0;
		
	}
	
	var returnArray = new Array();
	returnArray['w'] = clientX;
	returnArray['h'] = clientY;
	
	return returnArray;
	
}

function initScheduleAlertPos() {

	areaObj = getClientArea();
	firstPos = areaObj['h'] - 413;
	scrollY = document.documentElement.scrollTop || document.body.scrollTop;
	afterPos = firstPos + scrollY;
	if ( afterPos > 952 ) {
		afterPos = 952;	
	}
	$("#schedule_alert").css("top", afterPos + "px");
	$("#schedule_alert .inner").css("display", "block");
	$("#schedule_alert .inner div").queue([]).delay(800).animate({top: "0px"}, 500, "").animate({top: "10px"}, 100, "").animate({top: "5px"}, 100, "").animate({top: "10px"}, 100, "");

}

function setScheduleAlertPos() {

	areaObj = getClientArea();
	firstPos = areaObj['h'] - 413;
	scrollY = document.documentElement.scrollTop || document.body.scrollTop;
	afterPos = firstPos + scrollY;
	if ( afterPos > 952 ) {
		afterPos = 952;	
	}
	$("#schedule_alert").queue([]).animate({top: afterPos + "px"}, 300, "");

}

function initScheduleAlertPos2() {

	areaObj = getClientArea();
	firstPos = areaObj['h'] - 180;
	scrollY = document.documentElement.scrollTop || document.body.scrollTop;
	afterPos = firstPos + scrollY;
	if ( afterPos > 1183 ) {
		afterPos = 1183;	
	}
	$("#schedule_alert2").css("top", afterPos + "px");
	$("#schedule_alert2 .inner").css("display", "block");
	$("#schedule_alert2 .inner div").queue([]).delay(800).animate({top: "0px"}, 500, "").animate({top: "10px"}, 100, "").animate({top: "5px"}, 100, "").animate({top: "10px"}, 100, "");

}

function setScheduleAlertPos2() {

	areaObj = getClientArea();
	firstPos = areaObj['h'] - 180;
	scrollY = document.documentElement.scrollTop || document.body.scrollTop;
	afterPos = firstPos + scrollY;
	if ( afterPos > 1183 ) {
		afterPos = 1183;	
	}
	$("#schedule_alert2").queue([]).animate({top: afterPos + "px"}, 300, "");

}

function addOnLoadEvent(handler) {
	jQuery.event.add(window, "load", handler);
}