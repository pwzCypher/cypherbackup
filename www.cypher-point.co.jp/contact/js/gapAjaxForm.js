// メインクラス
var gapAjaxForm = function (form, firstcheck)
{
	this.init(form,firstcheck);
};
gapAjaxForm.prototype = 
{
	init : function (form,firstcheck) {
	
		var self = this;
	
		this.form = document.getElementById(form);
		
		this.form.isFirstCheck = firstcheck;
		
		this.validation	= new validation(this.form);
			
		this.form.isSubmit = false;
		this.form.dispError = false;
		
		this.formElem = [];
		this.groupArray = [];
		this.groupErrorArray = [];
		this.groupErrorTypeArray = [];
		this.groupRequireArray = [];
		
		this.allFormElems = this.getFormElems();

		for(var key in this.allFormElems){
		
			if(!this.groupArray[this.getGN(this.allFormElems[key].id)]) {
				this.groupArray[this.getGN(this.allFormElems[key].id)] = [];
				this.groupErrorArray[this.getGN(this.allFormElems[key].id)] = true;
				this.groupErrorTypeArray[this.getGN(this.allFormElems[key].id)] = 0;
			}
			this.groupArray[this.getGN(this.allFormElems[key].id)].push(this.allFormElems[key].id);
		
			this.formElem[this.allFormElems[key].id] = new formElem(this.form, this.allFormElems[key].id);
			this.groupRequireArray[this.getGN(this.allFormElems[key].id)] = this.validation.hasClass(document.getElementById(this.allFormElems[key].id),'require');
			
		}
		
		this.form.formElem = this.formElem;
		this.form.groupArray = this.groupArray;
		this.form.groupErrorArray = this.groupErrorArray;
		this.form.groupErrorTypeArray = this.groupErrorTypeArray;
		this.form.groupRequireArray = this.groupRequireArray;
		this.form.isLoad = false;
		
		// クッキーのチェック
		for ( var key in this.formElem ) {
			//alert(key);
		}
		
		// エラーがあるかチェック
		if (this.form.isFirstCheck) {
		
			for(var key in this.groupArray){
			
				var isError = false;
				
			if ( key == "company" ) {
				if ( this.form.formElem['company'].validation.isBlank(document.getElementById("company").value) ) {

					this.form.groupErrorArray["company"] = true;
					this.form.groupErrorTypeArray["company"] = 1;
					
					if ( this.formElem['company'].hintBox.innerHTML != "御社名を入力してください" ) {
						this.formElem['company'].hintBox.isReopen = true;
						this.formElem['company'].hintBox.isChangeMessage = true;
						this.formElem['company'].hintBox.changeMessage = "御社名を入力してください";
						this.formElem['company'].closeHintBox();
					} else if ( this.formElem['company'].hintBox.style.display == "none") {
						this.formElem['company'].hintBox.isReopen = true;
						this.formElem['company'].hintBox.isChangeMessage = true;
						this.formElem['company'].hintBox.changeMessage = "御社名を入力してください";
						this.formElem['company'].closeHintBox();
					}
					
					document.getElementById("company").style.background = "#FFDFDF";
					document.getElementById("company").style.borderWidth = "2px";
					document.getElementById("company").style.borderColor = "#DF7D7D";
					document.getElementById("company").style.borderStyle = "solid";
					
					isError = true;
					document.getElementById("company").isErrorCheck = true;
					document.getElementById("company").markBox.innerHTML = "<img src=\"../img/ng_mark.jpg\" />";
					//document.getElementById("company").markBox.innerHTML = "";
					
				} else {
				
					this.form.groupErrorArray["company"] = false;
					this.form.groupErrorTypeArray["company"] = 0;
					document.getElementById("company").style.background = "#CCFFCC";
					document.getElementById("company").style.borderWidth = "2px";
					document.getElementById("company").style.borderColor = "#A2EF95";
					document.getElementById("company").style.borderStyle = "solid";
					
					this.formElem['company'].isError = false;
					this.formElem['company'].hintBox.isReopen = false;
					this.formElem['company'].hintBox.isChangeMessage = false;
					this.formElem['company'].hintBox.innerHTML = this.formElem['company'].hintBox.defaultMessage;
					this.formElem['company'].closeHintBox();
					
					this.formElem['company'].markBox.innerHTML = "<img src=\"../img/ok_mark.jpg\" />";
					
				}
				
			 } else if ( key == "name" ) {
			 
				if ( this.form.formElem['name'].validation.isBlank(document.getElementById("name").value) ) {

					this.form.groupErrorArray["name"] = true;
					this.form.groupErrorTypeArray["name"] = 1;
					
					if ( this.formElem['name'].hintBox.innerHTML != "氏名を入力してください。" ) {
						this.formElem['name'].hintBox.isReopen = true;
						this.formElem['name'].hintBox.isChangeMessage = true;
						this.formElem['name'].hintBox.changeMessage = "氏名を入力してください。";
						this.formElem['name'].closeHintBox();
					} else if ( this.formElem['name'].hintBox.style.display == "none") {
						this.formElem['name'].hintBox.isReopen = true;
						this.formElem['name'].hintBox.isChangeMessage = true;
						this.formElem['name'].hintBox.changeMessage = "氏名を入力してください。";
						this.formElem['name'].closeHintBox();
					}
					
					document.getElementById("name").style.background = "#FFDFDF";
					document.getElementById("name").style.borderWidth = "2px";
					document.getElementById("name").style.borderColor = "#DF7D7D";
					document.getElementById("name").style.borderStyle = "solid";
					
					isError = true;
					document.getElementById("name").isErrorCheck = true;
					document.getElementById("name").markBox.innerHTML = "<img src=\"../img/ng_mark.jpg\" />";
					//document.getElementById("name").markBox.innerHTML = "";
					
				} else {
				
					this.form.groupErrorArray["name"] = false;
					this.form.groupErrorTypeArray["name"] = 0;
					document.getElementById("name").style.background = "#CCFFCC";
					document.getElementById("name").style.borderWidth = "2px";
					document.getElementById("name").style.borderColor = "#A2EF95";
					document.getElementById("name").style.borderStyle = "solid";
					
					this.formElem['name'].isError = false;
					this.formElem['name'].hintBox.isReopen = false;
					this.formElem['name'].hintBox.isChangeMessage = false;
					this.formElem['name'].hintBox.innerHTML = this.formElem['name'].hintBox.defaultMessage;
					this.formElem['name'].closeHintBox();
					
					this.formElem['name'].markBox.innerHTML = "<img src=\"../img/ok_mark.jpg\" />";
					
				}
			
			} else if ( key == "mail-addr" ) {
			 
				if ( this.form.formElem['mail-addr'].validation.isBlank(document.getElementById("mail-addr").value) ) {

					this.form.groupErrorArray["mail-addr"] = true;
					this.form.groupErrorTypeArray["mail-addr"] = 1;
					
					if ( this.formElem['mail-addr'].hintBox.innerHTML != "メールアドレスを入力してください。" ) {
						this.formElem['mail-addr'].hintBox.isReopen = true;
						this.formElem['mail-addr'].hintBox.isChangeMessage = true;
						this.formElem['mail-addr'].hintBox.changeMessage = "メールアドレスを入力してください。";
						this.formElem['mail-addr'].closeHintBox();
					} else if ( this.formElem['mail-addr'].hintBox.style.display == "none") {
						this.formElem['mail-addr'].hintBox.isReopen = true;
						this.formElem['mail-addr'].hintBox.isChangeMessage = true;
						this.formElem['mail-addr'].hintBox.changeMessage = "メールアドレスを入力してください。";
						this.formElem['mail-addr'].closeHintBox();
					}
					
					document.getElementById("mail-addr").style.background = "#FFDFDF";
					document.getElementById("mail-addr").style.borderWidth = "2px";
					document.getElementById("mail-addr").style.borderColor = "#DF7D7D";
					document.getElementById("mail-addr").style.borderStyle = "solid";
					
					isError = true;
					document.getElementById("mail-addr").isErrorCheck = true;
					document.getElementById("mail-addr").markBox.innerHTML = "<img src=\"../img/ng_mark.jpg\" />";
					//document.getElementById("mail-addr").markBox.innerHTML = "";
					
				} else if ( this.form.formElem['mail-addr'].validation.isEmail(document.getElementById("mail-addr").value) ) {

					this.form.groupErrorArray["mail-addr"] = true;
					this.form.groupErrorTypeArray["mail-addr"] = 2;
					
					if ( this.formElem['mail-addr'].hintBox.innerHTML != "正しいメールアドレスを入力してください。" ) {
						this.formElem['mail-addr'].hintBox.isReopen = true;
						this.formElem['mail-addr'].hintBox.isChangeMessage = true;
						this.formElem['mail-addr'].hintBox.changeMessage = "正しいメールアドレスを入力してください。";
						this.formElem['mail-addr'].closeHintBox();
					} else if ( this.formElem['mail-addr'].hintBox.style.display == "none") {
						this.formElem['mail-addr'].hintBox.isReopen = true;
						this.formElem['mail-addr'].hintBox.isChangeMessage = true;
						this.formElem['mail-addr'].hintBox.changeMessage = "正しいメールアドレスを入力してください。";
						this.formElem['mail-addr'].closeHintBox();
					}
					
					document.getElementById("mail-addr").style.background = "#FFDFDF";
					document.getElementById("mail-addr").style.borderWidth = "2px";
					document.getElementById("mail-addr").style.borderColor = "#DF7D7D";
					document.getElementById("mail-addr").style.borderStyle = "solid";
					
					isError = true;
					document.getElementById("mail-addr").isErrorCheck = true;
					document.getElementById("mail-addr").markBox.innerHTML = "<img src=\"../img/ng_mark.jpg\" />";
					//document.getElementById("mail-addr").markBox.innerHTML = "";
				
				} else {
				
					this.form.groupErrorArray["mail-addr"] = false;
					this.form.groupErrorTypeArray["mail-addr"] = 0;
					document.getElementById("mail-addr").style.background = "#CCFFCC";
					document.getElementById("mail-addr").style.borderWidth = "2px";
					document.getElementById("mail-addr").style.borderColor = "#A2EF95";
					document.getElementById("mail-addr").style.borderStyle = "solid";
					
					this.formElem['mail-addr'].isError = false;
					this.formElem['mail-addr'].hintBox.isReopen = false;
					this.formElem['mail-addr'].hintBox.isChangeMessage = false;
					this.formElem['mail-addr'].hintBox.innerHTML = this.formElem['mail-addr'].hintBox.defaultMessage;
					this.formElem['mail-addr'].closeHintBox();
					
					this.formElem['mail-addr'].markBox.innerHTML = "<img src=\"../img/ok_mark.jpg\" />";
					
				}
			
			} else if( key == "zip-code" ) {
			 
				if ( this.form.formElem['zip-code'].validation.isZipCode(document.getElementById("zip-code").value) ) {

					this.form.groupErrorArray["zip-code"] = true;
					this.form.groupErrorTypeArray["zip-code"] = 1;
					
					if ( this.formElem['zip-code'].hintBox.innerHTML != "郵便番号を正しく入力してください。" ) {
						this.formElem['zip-code'].hintBox.isReopen = true;
						this.formElem['zip-code'].hintBox.isChangeMessage = true;
						this.formElem['zip-code'].hintBox.changeMessage = "郵便番号を正しく入力してください。";
						this.formElem['zip-code'].closeHintBox();
					} else if ( this.formElem['zip-code'].hintBox.style.display == "none") {
						this.formElem['zip-code'].hintBox.isReopen = true;
						this.formElem['zip-code'].hintBox.isChangeMessage = true;
						this.formElem['zip-code'].hintBox.changeMessage = "郵便番号を正しく入力してください。";
						this.formElem['zip-code'].closeHintBox();
					}
					
					document.getElementById("zip-code").style.background = "#FFDFDF";
					document.getElementById("zip-code").style.borderWidth = "2px";
					document.getElementById("zip-code").style.borderColor = "#DF7D7D";
					document.getElementById("zip-code").style.borderStyle = "solid";
					
					isError = true;
					document.getElementById("zip-code").isErrorCheck = true;
					document.getElementById("zip-code").markBox.innerHTML = "<img src=\"../img/ng_mark.jpg\" />";
					//document.getElementById("zip-code").markBox.innerHTML = "";
					
				} else {
				
					this.form.groupErrorArray["zip-code"] = false;
					this.form.groupErrorTypeArray["zip-code"] = 0;
					document.getElementById("zip-code").style.background = "#FFFFFF";
					document.getElementById("zip-code").style.borderWidth = "2px";
					document.getElementById("zip-code").style.borderColor = "#CCCCCC";
					document.getElementById("zip-code").style.borderStyle = "solid";
					
					this.formElem['zip-code'].isError = false;
					this.formElem['zip-code'].hintBox.isReopen = false;
					this.formElem['zip-code'].hintBox.isChangeMessage = false;
					this.formElem['zip-code'].hintBox.innerHTML = this.formElem['zip-code'].hintBox.defaultMessage;
					this.formElem['zip-code'].closeHintBox();
					
					if (document.getElementById("zip-code").value != "") {
						this.formElem['zip-code'].markBox.innerHTML = "<img src=\"../img/ok_mark.jpg\" />";
					}
					
				}
			
			} else if( key == "address" ) {
			
				this.form.groupErrorArray["address"] = false;
				this.form.groupErrorTypeArray["address"] = 0;
			
				if ( this.form.formElem['address'].validation.isBlank(document.getElementById("address").value) ) {
				
					this.formElem['address'].markBox.innerHTML = "";
					
				} else {
				
					this.formElem['address'].markBox.innerHTML = "<img src=\"../img/ok_mark.jpg\" />";
					
				}
			
			} else if( key == "phone" ) {
			 
				if ( this.form.formElem['phone'].validation.isBlank(document.getElementById("phone").value) ) {

					this.form.groupErrorArray["phone"] = true;
					this.form.groupErrorTypeArray["phone"] = 1;
					
					if ( this.formElem['phone'].hintBox.innerHTML != "電話番号を入力してください。" ) {
						this.formElem['phone'].hintBox.isReopen = true;
						this.formElem['phone'].hintBox.isChangeMessage = true;
						this.formElem['phone'].hintBox.changeMessage = "電話番号を入力してください。";
						this.formElem['phone'].closeHintBox();
					} else if ( this.formElem['phone'].hintBox.style.display == "none") {
						this.formElem['phone'].hintBox.isReopen = true;
						this.formElem['phone'].hintBox.isChangeMessage = true;
						this.formElem['phone'].hintBox.changeMessage = "電話番号を入力してください。";
						this.formElem['phone'].closeHintBox();
					}
					
					document.getElementById("phone").style.background = "#FFDFDF";
					document.getElementById("phone").style.borderWidth = "2px";
					document.getElementById("phone").style.borderColor = "#DF7D7D";
					document.getElementById("phone").style.borderStyle = "solid";
					
					isError = true;
					document.getElementById("phone").isErrorCheck = true;
					document.getElementById("phone").markBox.innerHTML = "<img src=\"../img/ng_mark.jpg\" />";
					//document.getElementById("phone").markBox.innerHTML = "";
					
				} else if ( this.form.formElem['phone'].validation.isPhoneNo(document.getElementById("phone").value) ) {

					this.form.groupErrorArray["phone"] = true;
					this.form.groupErrorTypeArray["phone"] = 2;
					
					if ( this.formElem['phone'].hintBox.innerHTML != "電話番号を正しく入力してください。" ) {
						this.formElem['phone'].hintBox.isReopen = true;
						this.formElem['phone'].hintBox.isChangeMessage = true;
						this.formElem['phone'].hintBox.changeMessage = "電話番号を正しく入力してください。";
						this.formElem['phone'].closeHintBox();
					} else if ( this.formElem['phone'].hintBox.style.display == "none") {
						this.formElem['phone'].hintBox.isReopen = true;
						this.formElem['phone'].hintBox.isChangeMessage = true;
						this.formElem['phone'].hintBox.changeMessage = "電話番号を正しく入力してください。";
						this.formElem['phone'].closeHintBox();
					}
					
					document.getElementById("phone").style.background = "#FFDFDF";
					document.getElementById("phone").style.borderWidth = "2px";
					document.getElementById("phone").style.borderColor = "#DF7D7D";
					document.getElementById("phone").style.borderStyle = "solid";
					
					isError = true;
					document.getElementById("phone").isErrorCheck = true;
					document.getElementById("phone").markBox.innerHTML = "<img src=\"../img/ng_mark.jpg\" />";
					//document.getElementById("phone").markBox.innerHTML = "";
				
				} else {
					
					this.form.groupErrorArray["phone"] = false;
					this.form.groupErrorTypeArray["phone"] = 0;
					document.getElementById("phone").style.background = "#CCFFCC";
					document.getElementById("phone").style.borderWidth = "2px";
					document.getElementById("phone").style.borderColor = "#A2EF95";
					document.getElementById("phone").style.borderStyle = "solid";
					
					this.formElem['phone'].isError = false;
					this.formElem['phone'].hintBox.isReopen = false;
					this.formElem['phone'].hintBox.isChangeMessage = false;
					this.formElem['phone'].hintBox.innerHTML = this.formElem['phone'].hintBox.defaultMessage;
					this.formElem['phone'].closeHintBox();
					
					this.formElem['phone'].markBox.innerHTML = "<img src=\"../img/ok_mark.jpg\" />";
					
				}
			
			} else if ( key == "contact" ) {
			
				this.form.groupErrorArray["contact"] = false;
				this.form.groupErrorTypeArray["contact"] = 0;
				this.form.formElem['contact_type'].closeHintBox();
					
				this.form.formElem['contact_type'].markBox.innerHTML = "<img src=\"../img/ok_mark.jpg\" />";
			
			/*} else if ( elemName == "contact_type2") {
			
				this.form.groupErrorArray["contact"] = false;
				this.form.groupErrorTypeArray["contact"] = 0;
				formElem.closeHintBox();
				
			} else if ( elemName == "contact_type3") {
			
				this.form.groupErrorArray["contact"] = false;
				this.form.groupErrorTypeArray["contact"] = 0;
				formElem.closeHintBox();

			} else if ( elemName == "contact_type4") {
			
				this.form.groupErrorArray["contact"] = false;
				this.form.groupErrorTypeArray["contact"] = 0;
				formElem.closeHintBox();

			} else if ( elemName == "contact_type5") {
			
				this.form.groupErrorArray["contact"] = false;
				this.form.groupErrorTypeArray["contact"] = 0;
				formElem.closeHintBox();

			} else if ( elemName == "contact_type6") {
			
				this.form.groupErrorArray["contact"] = false;
				this.form.groupErrorTypeArray["contact"] = 0;
				formElem.closeHintBox();

			} else if ( elemName == "contact_type7") {
			
				this.form.groupErrorArray["contact"] = false;
				this.form.groupErrorTypeArray["contact"] = 0;
				formElem.closeHintBox();
			//*/
			/*} else if( elemName == "motive" ) {

			
				this.form.groupErrorArray["motive"] = false;
				this.form.groupErrorTypeArray["motive"] = 0;
				
				if ( this.form.formElem['motive'].validation.isBlank(document.getElementById("motive").innerHTML) ) {
				
					this.formElem['motive'].markBox.innerHTML = "";
					
				} else {
				
					this.formElem['motive'].markBox.innerHTML = "<img src=\"../img/ok_mark.jpg\" />";
					
				}
			*/
			}
			
			if (key == "contact") {
				//this.formElem['contact_type'].hintBox.className = "hintBox";
			} else {
				if ( isError ) {
					this.form.dispError = true;
					this.formElem[key].hintBox.className = "hintBox validate_error";
				} else {
					this.formElem[key].hintBox.className = "hintBox";
				}
			
			}
			
			}
			
		}
			
		this.form.isLoad = true;
			
		this.form.onsubmit = function() { 
		
			var isError = 1;
			
			self.form.isSubmit = true;
			self.form.status = 3;
			
			// エラーがあるかチェック
			for(var key in self.groupArray){
		
				if (self.validation.checkError(key)) {
					isError++;
				}
				
			}
			
			if (isError > 1) {

				var anchorName = "";
				for( var key in self.form.groupErrorArray ) {
				
					if ( self.form.groupErrorArray[key] && self.form.groupErrorArray[key]!="undefined" ) {
						anchorName = key;
						break;
					}
				}
				
				function getElementPosition(elem) {
				
					var currentPosition = elem.getBoundingClientRect();
					var pos = {left: 0, top: 0};
					var scrollX = (document.body.scrollLeft || document.documentElement.scrollLeft);
					var scrollY = (document.body.scrollTop || document.documentElement.scrollTop);
					pos.left = Math.round(scrollX + currentPosition.left);
					pos.top = Math.round(scrollY + currentPosition.top);
					return pos;
					
				}
				
				var po = getElementPosition(document.getElementById(anchorName));
				var test = 1;
				
				function move() {
					
					var scrollY = (document.body.scrollTop || document.documentElement.scrollTop);
					var area = getClientArea();
					var docHeight = ( document.body.scrollHeight || document.documentElement.scrollHeight) ;
					var maxScrollY = ( docHeight - area.clientY );
					
					if (scrollY == po.top) {
						clearTimeout(timerId);
					} else {
						
						if ( scrollY < po.top ) {
							if ( (scrollY + 10) >= po.top ) {
								window.scrollTo(po.left, po.top);
							} else {
								window.scrollTo(po.left, scrollY+10);
								timerId = setTimeout(move, 1);
							}
					
							if ( maxScrollY <= scrollY ) {
								clearTimeout(timerId);
							}
						
						} else {
							if ( (scrollY - 10) <= po.top ) {
								window.scrollTo(po.left, po.top);
							} else {
								window.scrollTo(po.left, scrollY-10); 
								timerId = setTimeout(move, 1);
							}
					
							if ( maxScrollY <= scrollY ) {
								//clearTimeout(timerId);
							}
							
						}
						
					}
					
				}
				


// ---------------------------------------------------------------------------------
// コンテンツ領域の最大値を取得
// ---------------------------------------------------------------------------------
function getClientArea() {
	
	var area = {clientX: 0, clientY: 0};

	// IE以外のブラウザ
	if ((!document.all || window.opera) && document.getElementById) {
	
		area.clientX = window.innerWidth;
		area.clientY = window.innerHeight;

	// Windows IE6 ・ 標準モード		
	} else if (document.getElementById && (document.compatMode=='CSS1Compat')) {
	
		area.clientX = document.documentElement.clientWidth;
		area.clientY = document.documentElement.clientHeight;

	// その他のIE		
	} else if (document.all) {
	
		area.clientX = document.body.clientWidth;
		area.clientY = document.body.clientHeight;
	
	// その他(非対応ブラウザ)	
	} else {
	
		area.clientX = 0;
		area.clientY = 0;
		
	}
	
	return area;
	
}
				try {
				timerId = setTimeout(move, 1);
				} catch(e) {
					//alert(e);
				}
				//location.hash = "#" + anchorName;
				return false;
				
			} else {
			
				//alert('No Error!!');
				return true;
				
			}
			
		}
		
	},
	addEvent : function (d, b, c) {
	
		if (d.addEventListener) {
			d.addEventListener(b, c, false);
		} else {
			if (d.attachEvent) {	
				d.attachEvent('on' + b, function() { c.call(d, window.event); });
			}
		}
	},
	onSubmit : function (e) {
	
		return function (e) {
			return false;
		}
	},
	getFormElems : function() {
		
		var elems = [];
		var tmpElem = this.form.getElementsByTagName('*');
		
		for(var key in tmpElem){
			//if(tmpElem[key][1]) {
			//	for(var key2 in tmpElem[key]){
			//		alert(tmpElem[key][key2].type);
			//		elems.push(tmpElem[key][key2]);
			//	}
			//} else {
			
			// 配列の場合
			if (tmpElem[key][0]) {
			
				var l = tmpElem[key].length;
				for ( var i=0; i<l; i++ ) {
					if ( this.checkElemType(tmpElem[key][i]) ) {
						elems.push(tmpElem[key][i]);
					}
				}
						
			} else {
			
				if ( this.checkElemType(tmpElem[key]) ) {
					elems.push(tmpElem[key]);
				}
				
			}
		}
		
		return elems;
	},
	checkElemType : function (elem) {
	
		switch (true) {
			case (elem.nodeName == "TEXTAREA"):
			case (elem.nodeName == "INPUT" && elem.type.toUpperCase() == "TEXT"):
			case (elem.nodeName == "INPUT" && elem.type.toUpperCase() == "PASSWORD"):
			case (elem.nodeName == "INPUT" && elem.type.toUpperCase() == "CHECKBOX"):
			case (elem.nodeName == "INPUT" && elem.type.toUpperCase() == "FILE"):
			case (elem.nodeName == "SELECT"):
				return true;
			break;
			case (elem.nodeName == "INPUT" && elem.type.toUpperCase() == "RADIO"):
				
				return true;
			break;
			default:
				return false;
			break
		}
		return false;
	},
	getGN : function (elemName) {
	
		var groupName = elemName.substr(0,elemName.indexOf('_'));
		
		if (!groupName) {
			groupName = elemName;
		}
		
		return groupName;
		
	}
};

// フォームエレメントの設定
var formElem = function (form,elem)
{
	this.form = form;
	this.init(elem);
};
formElem.TEXTAREA = 1;
formElem.TEXT = 2;
formElem.PASSWORD = 3;
formElem.CHECKBOX = 4;
formElem.RADIO = 7;
formElem.SELECT = 5;
formElem.FILE = 6;
formElem.test = 0;
formElem.prototype = 
{
	aaa : 100,
	init : function (elem) {
		
		var self = this;
		this.validation	= new validation(this.form);
		
		if (!elem) { return false; }
		this.elem = document.getElementById(elem);
		this.type = this.getElemType();
		this.hintBox = formElem.getHintBox(elem);
		this.hintBox.defaultMessage = this.hintBox.innerHTML;
		this.isError = false;
		this.isInput = false;
		this.isErrorCheck = false;
		this.markBox = formElem.getMarkBox(elem);
		
		if (this.hintBox) {
		
		this.hintBox.style.visibility = "hidden";
		this.hintBox.style.display = 'none';
		
		//this.addEvent(this.elem, "focus", this.onFocus());
		this.elem.onfocus = function(e){ self.onFocus(e); }
		
		switch(this.elementType){
			// check box
			//case 4:
			//	this.addEvent(this.elem, "click", this.onClick());
			//break;
			// select, file
			case 5:
			case 6:
				this.addEvent(this.elem, "change", this.onChange());
			break;
			// other
			default:
				//this.addEvent(this.elem, "blur", this.onBlur());
				this.elem.onblur = function(e){ self.onBlur(e); }
				//this.addEvent(this.elem, "keyup", this.onKeyUp());
				this.elem.onkeyup = function(e){ self.onKeyUp(e); }
				this.elem.onclick = function(e){ self.onClick(e); }
				this.elem.onchange = function(e){ self.onChange(e); }
			break;
		}
		
		}
		
		if (this.elem.type != "radio" && this.elem.type != "checkbox") {
		this.elem.style.background = "#FFFFFF";
		this.elem.style.borderWidth = "2px";
		this.elem.style.borderColor = "#CCCCCC";
		this.elem.style.borderStyle = "solid";
		}
		
	},
	addEvent : function (d, b, c) {
		if (d.addEventListener) {
			d.addEventListener(b, c, false);
		} else {
			if (d.attachEvent) {
				d.attachEvent('on' + b, function(e) { c.call(d, window.event); });
			}
		}
	},
	getElemType : function () {
	
		switch (true) {
			case (this.elem.nodeName.toUpperCase() == "TEXTAREA"):
				return formElem.TEXTAREA;
			case (this.elem.nodeName.toUpperCase() == "INPUT" && this.elem.type.toUpperCase() == "TEXT"):
				return formElem.TEXT;
			case (this.elem.nodeName.toUpperCase() == "INPUT" && this.elem.type.toUpperCase() == "PASSWORD"):
				return formElem.PASSWORD;
			case (this.elem.nodeName.toUpperCase() == "INPUT" && this.elem.type.toUpperCase() == "CHECKBOX"):
				return formElem.CHECKBOX;
			case (this.elem.nodeName.toUpperCase() == "INPUT" && this.elem.type.toUpperCase() == "RADIO"):
				return formElem.RADIO;
			case (this.elem.nodeName.toUpperCase() == "INPUT" && this.elem.type.toUpperCase() == "FILE"):
				return formElem.FILE;
			case (this.elem.nodeName.toUpperCase() == "SELECT"):
				return formElem.SELECT;
			case (this.elem.nodeName.toUpperCase() == "INPUT"):
				throw new Error("LiveValidation::getElementType - Cannot use LiveValidation on an " + this.element.type + " input!");
			default:
				throw new Error("LiveValidation::getElementType - Element must be an input, select, or textarea!");
		}
	},
	onFocus : function (e) {
	
		clearInterval(document.getElementById(this.getGN(this.elem.id) + "_hint").t);
		
		if (this.hintBox.innerHTML != "") {
		
		if ( this.form.selectGroup != this.getGN(this.elem.id) ) {
		
			if (this.hintBox.style.display != 'none') {
			
				if (this.hintBox.offsetHeight <= this.hintBox.hintBoxMaxHeight) {
				this.openHintBox(this.elem,this.hintBox);
				}
				
			} else {
				this.form.beforeGropu = this.elem.id;
				this.hintBox.style.display = 'block';
				this.hintBox.style.visibility = "hidden";
				this.hintBox.style.display = 'none';
			
				this.openHintBox();
				
			}
			
		} else {
		
			if (this.hintBox.style.display != 'none') {
			
				if (this.hintBox.offsetHeight <= this.hintBox.hintBoxMaxHeight) {
					this.openHintBox();
				}
				
			} else {
			
				this.hintBox.style.height = "0px";
				this.hintBox.style.display = 'block';
				this.hintBox.style.visibility = "hidden";
				this.hintBox.style.display = 'none';
				this.openHintBox();
				
			}
			
		}
		
		}
		
		var gArray = this.form.groupArray[this.getGN(this.elem.id)];
		for(var key in gArray){
			if(document.getElementById(gArray[key]).type!="radio" && document.getElementById(gArray[key]).type!="checkbox") {
			document.getElementById(gArray[key]).style.background = "#FFFCDF";
			document.getElementById(gArray[key]).style.borderWidth = "2px";
			document.getElementById(gArray[key]).style.borderColor = "#DFD77D";
			document.getElementById(gArray[key]).style.borderStyle = "solid";
			}
		}
		
		this.elem.isInput = true;
		this.form.selectGroup = this.getGN(this.elem.id);
		
	},
	onBlur : function (e) {

		// 送信ボタン押下後かつエラーがある場合
		if ( this.form.isSubmit && this.form.groupErrorArray[this.getGN(this.elem.id)] ) {
			
			var gN = this.getGN(this.elem.id);
			this.validation.checkError(gN);
		
			if (this.elem.id=="zip-code") {
				AjaxZip2.zip2addr(this.elem,'address','address');
			}
		
		// 要素に入力が無くかつエラーが表示がまだされていない場合
		//} else if ( this.elem.value == "" && !this.form.dispError ) {
		} else if ( this.elem.value == "" && !this.elem.isErrorCheck ) {
		
			this.closeHintBox(this.elem,this.hintBox);
		
		// ヒントボックスが開いていてかつ前回選択したグループと違うグループを選択している場合
		} else if ( this.hintBox.style.display != 'none' && this.form.beforeGroup != this.getGN(this.elem.id)) {
			
			var gN = this.getGN(this.elem.id);
		
			if (this.elem.id=="zip-code") {
				AjaxZip2.zip2addr(this.elem,'address','address');
			}
			
			// 入力を受け付けた要素にエラーが無い場合
			if ( !this.form.groupErrorArray[this.getGN(this.elem.id)] ) {
				this.closeHintBox(this.elem,this.hintBox);
			}
		
			// 要素がからじゃない場合
			if (this.elem.value != "") {

				// エラーがあるかチェック
				for(var key in this.form.groupArray){
				
					// エラーがあるかチェック
					//if (this.hintBox.state!="move") {
						this.validation.checkError(key);
					//}
					
					if ( key == gN ) {
						break;
					}
					
				}
			
			// 要素が空の場合	
			} else {
			
				this.validation.checkError(gN);
				
				if (!this.form.groupErrorArray[gN]) {
					this.closeHintBox(this.elem,this.hintBox);
				}
				
			}
		
		} else {
			
			var gN = this.getGN(this.elem.id);
			this.validation.checkError(gN);
		
		}
		
		var gArray = this.form.groupArray[this.getGN(this.elem.id)];
		
		if ( this.elem.value != "" || ( this.elem.value == "" && this.elem.isErrorCheck ) ) {
		
		for(var key in gArray){
		
			if(document.getElementById(gArray[key]).type!="radio" && document.getElementById(gArray[key]).type!="checkbox") {
			
			if ( this.form.groupErrorArray[this.getGN(this.elem.id)] && this.elem.value != "" ) {

				document.getElementById(gArray[key]).style.background = "#FFDFDF";
				document.getElementById(gArray[key]).style.borderWidth = "2px";
				document.getElementById(gArray[key]).style.borderColor = "#DF7D7D";
				document.getElementById(gArray[key]).style.borderStyle = "solid";
				this.markBox.innerHTML = "<img src=\"../img/ng_mark.jpg\" />";
				//this.markBox.innerHTML = "";
				
			} else if ( !this.form.groupErrorArray[this.getGN(this.elem.id)] && this.form.groupRequireArray[this.getGN(this.elem.id)]) {
				document.getElementById(gArray[key]).style.background = "#CCFFCC";
				document.getElementById(gArray[key]).style.borderWidth = "2px";
				document.getElementById(gArray[key]).style.borderColor = "#A2EF95";
				document.getElementById(gArray[key]).style.borderStyle = "solid";
				this.markBox.innerHTML = "<img src=\"../img/ok_mark.jpg\" />";
			} else if ( this.form.groupErrorArray[this.getGN(this.elem.id)] && this.form.isSubmit ) {

				document.getElementById(gArray[key]).style.background = "#FFDFDF";
				document.getElementById(gArray[key]).style.borderWidth = "2px";
				document.getElementById(gArray[key]).style.borderColor = "#DF7D7D";
				document.getElementById(gArray[key]).style.borderStyle = "solid";
				this.markBox.innerHTML = "<img src=\"../img/ng_mark.jpg\" />";
				//this.markBox.innerHTML = "";
				
			} else if ( this.form.groupErrorArray[this.getGN(this.elem.id)] && this.form.dispError ) {

				document.getElementById(gArray[key]).style.background = "#FFDFDF";
				document.getElementById(gArray[key]).style.borderWidth = "2px";
				document.getElementById(gArray[key]).style.borderColor = "#DF7D7D";
				document.getElementById(gArray[key]).style.borderStyle = "solid";
				this.markBox.innerHTML = "<img src=\"../img/ng_mark.jpg\" />";
				//this.markBox.innerHTML = "";
			
			} else {
			
				document.getElementById(gArray[key]).style.background = "#FFFFFF";
				document.getElementById(gArray[key]).style.borderWidth = "2px";
				document.getElementById(gArray[key]).style.borderColor = "#CCCCCC";
				document.getElementById(gArray[key]).style.borderStyle = "solid";
				if (this.markBox){
					//this.markBox.innerHTML = "";
				}
				
			}
			
			}
			
		}
		
		} else {
			
			this.elem.style.background = "#FFFFFF";
			this.elem.style.borderWidth = "2px";
			this.elem.style.borderColor = "#CCCCCC";
			this.elem.style.borderStyle = "solid";
			if (this.markBox){
				this.markBox.innerHTML = "";
			}
				
		}
	},
	onKeyUp : function (e) {
		
		/*
		// エラーチェック
		var gN = this.getGN(this.elem.id);
			
		// エラーがあるかチェック
		if (this.hintBox.state!="move") {
			this.validation.checkError(gN);
		}
		
		if (this.elem.id=="zip-code") {
			AjaxZip2.zip2addr(this.elem,'address','address');
		}
		*/
		
	},
	onClick : function (e) {
	
		return function (e) {
		
		}
	},
	onChange : function (e) {
	
	},
	openHintBox : function () {
	
		clearInterval(this.hintBox.t);
		this.hintBox.innerHTML = this.hintBox.defaultMessage;
		
		if (!this.form.groupErrorArray[this.getGN(this.elem.id)]&&this.form.groupRequireArray[this.getGN(this.elem.id)]) {
			//alert('test');
			//return;
		}
		
		if ( this.hintBox.isChangeMessage ) {
			this.hintBox.isChangeMessage = false;
			this.hintBox.innerHTML = this.hintBox.changeMessage;
			this.hintBox.changeMessage = "";
		}
		
		this.hintBox.style.display = 'block';
		this.hintBox.style.height = 'auto';
		this.hintBox.style.visibility = "hidden";
		this.hintBoxMaxHeight = this.hintBox.offsetHeight;
		this.hintBox.hintBoxMaxHeight = this.hintBox.offsetHeight;
		this.hintBox.style.display = 'none';
		
		if(this.hintBox.style.display=='none'){
       		this.hintBox.style.visibility = "visible";
			this.hintBox.style.display = 'block';
			if (this.hintBox.offsetHeight != 0 && this.form.selectGroup == this.getGN(this.elem.id)) {
			
				if ( this.hintBox.state == "close" ) {
					this.hintBox.style.height = '1px';
				} else {
					this.hintBox.style.height = this.hintBox.offsetHeight + "px";
				}
				
			} else {
			
				this.hintBox.style.height = '1px';
				
			}
			
			try {
				var self = this;
				this.hintBox.t=setInterval( function() {self.et(self,self.hintBox)},1);
			} catch (e){
				//alert(e);
			}
		}
		
		this.hintBox.state = "move";
		
	},
	et : function (elem,d) {
		try {
			d.style.height = (d.offsetHeight + 2) + "px";
		} catch(e) {
			//alert(e);
		}
		
		if (d.offsetHeight > d.hintBoxMaxHeight ) {
			clearInterval(d.t);
			d.height = d.hintBoxMaxHeight;
			d.height = 'auto';
			d.state = "open";
		}
	},
	closeHintBox : function () {
	
		clearInterval(this.hintBox.t);
		this.hintBox.state = "move";
		if(this.hintBox.style.display!='none'){
		
			try {
				//this.hintBox.t=setInterval("this.et('" + this.elem + "', " + this.hintBox + ")", 1000);
				//this.hintBox.t=setInterval(this.et(), 1000);
				var self = this;
				this.hintBox.t=setInterval( function() {self.et2(self,self.hintBox)},1);
			} catch (e){
				//alert(e);
			}
		} else {
		
			clearInterval(this.hintBox.t);
	       	this.hintBox.style.visibility = "hidden";
			this.hintBox.style.display = 'none';
			this.hintBox.style.height = '0px';
			this.hintBox.height = 'auto';
			this.hintBox.state = "close";
			
			if (this.hintBox.isReopen) {
				this.hintBox.isReopen = false;
				this.openHintBox();
			}
		}
		
	},
	et2 : function (elem,d) {
	
		var ofH = d.offsetHeight-2;
		
		if (ofH<=0) {
			ofH = 0;
		}
		
		try {
			d.style.height = ofH + 'px';
		} catch(e) {
			//alert(e);
		}
		
		if (ofH <= 0 ) {
			clearInterval(d.t);
       		d.style.visibility = "hidden";
			d.style.display = 'none';
			d.style.height = '0px';
			d.height = 'auto';
			d.state = "close";
			if (d.isReopen) {
				d.isReopen = false;
				elem.openHintBox();
			}
		}
		
	},
	getGN : function (elemName) {
	
		var groupName = elemName.substr(0,elemName.indexOf('_'));
		if (!groupName) {
			groupName = elemName;
		}
		
		return groupName;
		
	}
	
};
formElem.getGroupName = function (elemName) {

	var groupName = elemName.substr(0,elemName.indexOf('_'));
	if (!groupName) {
		groupName = elemName;
	}
	
	return groupName;
};
formElem.getHintBox = function (elemName) {

	var groupName = this.getGroupName(elemName);
	hintName = groupName + "_hint";
	
	return document.getElementById(hintName);
};
formElem.getMarkBox = function (elemName) {

	var groupName = this.getGroupName(elemName);
	markName = groupName + "_mark";
	
	return document.getElementById(markName);
};


var validation = function (form){
	this.form = form;
};
validation.prototype = 
{
	isBlank : function (value) {
		
		var retFlg = false;
		if ( value == "" ) {
			retFlg = true;
		}
		
		return retFlg;
		
	},
	isEmail: function(value){
		
		var retFlg = false;
		if ( !value.match(/^[a-zA-Z0-9_\.\-]+?@[A-Za-z0-9_\.\-]+$/) ) {
			retFlg = true;
		}
		if ( !value.match(/^[A-Za-z0-9_\.\-]+[\w-]+@[\w_\.\-]+\.\w{2,}$/) ) {
			retFlg = true;
		}
		if ( !value.match(/\w{1,}[@][\w\-]{1,}([.]([\w\-]{1,})){1,3}$/) ) {
			retFlg = true;		
		}
		
		if ( value=="" ) {
			retFlg = false;
		}
		
		return retFlg;

    },
    isPhoneNo: function(value){
    
    	var retFlg = false;
    	
    	if(typeof(value)!="string") {
    		return false;
    	}
    	
		value = this.changeZenToHan(value);
		value = this.cutHaihun(value);
    
		if ( !value.match(/^\d{7,15}$/) ) {
			retFlg = true;
		}
		
		return retFlg;
    
    },
    isZipCode: function(value){
    
    	if ( value == "") {
    		return false;
    	}
    
    	var retFlg = false;
    	
    	if(typeof(value)!="string") {
    		return false;
    	}
    	
		value = this.changeZenToHan(value);
		value = this.cutHaihun(value);
    
		if ( !value.match(/^\d{7}$/) ) {
			retFlg = true;
		}
		
		return retFlg;
    
    },
    changeZenToHan: function(str) {

		var han = new Array(1,2,3,4,5,6,7,8,9,0,'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','@','-','-','.',',',':');
		var zen = new Array('１','２','３','４','５','６','７','８','９','０','ａ','ｂ','ｃ','ｄ','ｅ','ｆ','ｇ','ｈ','ｉ','ｊ','ｋ','ｌ','ｍ','ｎ','ｏ','ｐ','ｑ','ｒ','ｓ','ｔ','ｕ','ｖ','ｗ','ｘ','ｙ','ｚ','Ａ','Ｂ','Ｃ','Ｄ','Ｅ','Ｆ','Ｇ','Ｈ','Ｉ','Ｊ','Ｋ','Ｌ','Ｍ','Ｎ','Ｏ','Ｐ','Ｑ','Ｒ','Ｓ','Ｔ','Ｕ','Ｖ','Ｗ','Ｘ','Ｙ','Ｚ','＠','－','ー','．','，','：');
		
		var word = str;
		
		for(i=0;i<zen.length;i++){
			//var regex = new RegExp(zen[i],"gm");
			
			while (word.indexOf(zen[i]) >= 0){
				word = word.replace(zen[i],han[i]);
			}
			
		}
				
		return word;
				
    },
    cutHaihun: function(str) {
		
		var word = str;
		
		while (word.indexOf('-') >= 0){
			word = word.replace("-","");
		}
				
		return word;
				
    },
    hasClass: function( elem, className ) {
    
        var elemClassName = elem.className;
        if (elemClassName.length == 0) return false;
        if (elemClassName == className ||elemClassName.match(new RegExp("(^|\\s)" + className + "(\\s|$)"))) return true;
        return false;
        
    },
    checkError: function( elemName ) {
    
		var elem = document.getElementById(elemName);
		var formElem = this.form.formElem[elemName];
		var isError = false;
		this.form.dispError = true;
		
		if ( elemName == "company" ) {
		
			if ( this.isBlank(elem.value) ) {
			
				this.form.groupErrorArray["company"] = true;
				this.form.groupErrorTypeArray["company"] = 1;
				
				if ( formElem.hintBox.innerHTML != "御社名を入力してください" ) {
					formElem.hintBox.isReopen = true;
					formElem.hintBox.isChangeMessage = true;
					formElem.hintBox.changeMessage = "御社名を入力してください";
					formElem.closeHintBox();
				} else if ( formElem.hintBox.style.display == "none") {
					formElem.hintBox.isReopen = true;
					formElem.hintBox.isChangeMessage = true;
					formElem.hintBox.changeMessage = "御社名を入力してください";
					formElem.closeHintBox();
				}
				
				elem.style.background = "#FFDFDF";
				elem.style.borderWidth = "2px";
				elem.style.borderColor = "#DF7D7D";
				elem.style.borderStyle = "solid";
				
				isError = true;
				elem.isErrorCheck = true;
				formElem.markBox.innerHTML = "<img src=\"../img/ng_mark.jpg\" />";
				//formElem.markBox.innerHTML = "";
				
			} else {
			
				this.form.groupErrorArray["company"] = false;
				this.form.groupErrorTypeArray["company"] = 0;
				elem.style.background = "#CCFFCC";
				elem.style.borderWidth = "2px";
				elem.style.borderColor = "#A2EF95";
				elem.style.borderStyle = "solid";
				
				formElem.isError = false;
				formElem.hintBox.isReopen = false;
				formElem.hintBox.isChangeMessage = false;
				formElem.hintBox.innerHTML = formElem.hintBox.defaultMessage;
				formElem.closeHintBox();
				
				formElem.markBox.innerHTML = "<img src=\"../img/ok_mark.jpg\" />";
				
			}
			
		} else if ( elemName == "name" ) {
		
			if ( this.isBlank(elem.value) ) {
			
				this.form.groupErrorArray["name"] = true;
				this.form.groupErrorTypeArray["name"] = 1;
				
				if ( formElem.hintBox.innerHTML != "氏名を入力してください。" ) {
					formElem.hintBox.isReopen = true;
					formElem.hintBox.isChangeMessage = true;
					formElem.hintBox.changeMessage = "氏名を入力してください。";
					formElem.closeHintBox();
				} else if ( formElem.hintBox.style.display == "none") {
					formElem.hintBox.isReopen = true;
					formElem.hintBox.isChangeMessage = true;
					formElem.hintBox.changeMessage = "氏名を入力してください。";
					formElem.closeHintBox();
				}
				
				elem.style.background = "#FFDFDF";
				elem.style.borderWidth = "2px";
				elem.style.borderColor = "#DF7D7D";
				elem.style.borderStyle = "solid";
				
				isError = true;
				elem.isErrorCheck = true;
				formElem.markBox.innerHTML = "<img src=\"../img/ng_mark.jpg\" />";
				//formElem.markBox.innerHTML = "";
				
			} else {
			
				this.form.groupErrorArray["name"] = false;
				this.form.groupErrorTypeArray["name"] = 0;
				formElem.elem.style.background = "#CCFFCC";
				formElem.elem.style.borderWidth = "2px";
				formElem.elem.style.borderColor = "#A2EF95";
				formElem.elem.style.borderStyle = "solid";
				formElem.isError = false;
				formElem.hintBox.isReopen = false;
				formElem.hintBox.isChangeMessage = false;
				formElem.hintBox.innerHTML = formElem.hintBox.defaultMessage;
				formElem.closeHintBox();
				
				formElem.markBox.innerHTML = "<img src=\"../img/ok_mark.jpg\" />";
				
			}
		
		} else if ( elemName == "mail-addr" ) {
		
			if (this.isBlank(elem.value)) {
			
				this.form.groupErrorArray["mail-addr"] = true;
				this.form.groupErrorTypeArray["mail-addr"] = 1;
				
				if ( formElem.hintBox.innerHTML != "メールアドレスを入力してください。" ) {
					formElem.hintBox.isReopen = true;
					formElem.hintBox.isChangeMessage = true;
					formElem.hintBox.changeMessage = "メールアドレスを入力してください。";
					formElem.closeHintBox();
				} else if ( formElem.hintBox.style.display == "none") {
					formElem.hintBox.isReopen = true;
					formElem.hintBox.isChangeMessage = true;
					formElem.hintBox.changeMessage = "メールアドレスを入力してください。";
					formElem.closeHintBox();
				}
				
				elem.style.background = "#FFDFDF";
				elem.style.borderWidth = "2px";
				elem.style.borderColor = "#DF7D7D";
				elem.style.borderStyle = "solid";
				
				isError = true;
				elem.isErrorCheck = true;
				formElem.markBox.innerHTML = "<img src=\"../img/ng_mark.jpg\" />";
				//formElem.markBox.innerHTML = "";
			
			} else if ( this.isEmail(elem.value) ) {
			
				this.form.groupErrorArray["mail-addr"] = true;
				this.form.groupErrorTypeArray["mail-addr"] = 2;
				
				if ( formElem.hintBox.innerHTML != "メールアドレスを正しく入力してください。" ) {
					formElem.hintBox.isReopen = true;
					formElem.hintBox.isChangeMessage = true;
					formElem.hintBox.changeMessage = "メールアドレスを正しく入力してください。";
					formElem.closeHintBox();
				} else if ( formElem.hintBox.style.display == "none") {
					formElem.hintBox.isReopen = true;
					formElem.hintBox.isChangeMessage = true;
					formElem.hintBox.changeMessage = "メールアドレスを正しく入力してください。";
					formElem.closeHintBox();
				}
				
				elem.style.background = "#FFDFDF";
				elem.style.borderWidth = "2px";
				elem.style.borderColor = "#DF7D7D";
				elem.style.borderStyle = "solid";
				
				formElem.isError = true;
				
				isError = true;
				elem.isErrorCheck = true;
				formElem.markBox.innerHTML = "<img src=\"../img/ng_mark.jpg\" />";
				//formElem.markBox.innerHTML = "";
				
			} else {
			
				this.form.groupErrorArray["mail-addr"] = false;
				this.form.groupErrorTypeArray["mail-addr"] = 0;
				elem.style.background = "#CCFFCC";
				elem.style.borderWidth = "2px";
				elem.style.borderColor = "#A2EF95";
				elem.style.borderStyle = "solid";
				formElem.isError = false;
				formElem.hintBox.isReopen = false;
				formElem.hintBox.isChangeMessage = false;
				formElem.hintBox.innerHTML = formElem.hintBox.defaultMessage;
				formElem.closeHintBox();
				
				formElem.markBox.innerHTML = "<img src=\"../img/ok_mark.jpg\" />";
				
			}
		
		} else if( elemName == "age" ) {
		
			this.form.groupErrorArray["age"] = false;
			this.form.groupErrorTypeArray["age"] = 0;
			formElem.closeHintBox();
		
		} else if( elemName == "zip-code" ) {
		
			if( this.isZipCode(elem.value) ) {
			
				this.form.groupErrorArray["zip-code"] = true;
				this.form.groupErrorTypeArray["zip-code"] = 1;
				
				if ( formElem.hintBox.innerHTML != "郵便番号を正しく入力してください。" ) {
					formElem.hintBox.isReopen = true;
					formElem.hintBox.isChangeMessage = true;
					formElem.hintBox.changeMessage = "郵便番号を正しく入力してください。";
					formElem.closeHintBox();
				} else if ( formElem.hintBox.style.display == "none") {
					formElem.hintBox.isReopen = true;
					formElem.hintBox.isChangeMessage = true;
					formElem.hintBox.changeMessage = "郵便番号を正しく入力してください。";
					formElem.closeHintBox();
				}
				
				elem.style.background = "#FFDFDF";
				elem.style.borderWidth = "2px";
				elem.style.borderColor = "#DF7D7D";
				elem.style.borderStyle = "solid";
				
				isError = true;
				elem.isErrorCheck = true;
				formElem.markBox.innerHTML = "<img src=\"../img/ng_mark.jpg\" />";
				//formElem.markBox.innerHTML = "";
			
			} else {
			
				this.form.groupErrorArray["zip-code"] = false;
				this.form.groupErrorTypeArray["zip-code"] = 0;
				
				elem.style.background = "#FFFFFF";
				elem.style.borderWidth = "2px";
				elem.style.borderColor = "#CCCCCC";
				elem.style.borderStyle = "solid";
				
				formElem.hintBox.isReopen = false;
				formElem.hintBox.isChangeMessage = false;
				formElem.hintBox.innerHTML = formElem.hintBox.defaultMessage;
				formElem.closeHintBox();
				
				var value = this.changeZenToHan(elem.value);
				elem.value = this.cutHaihun(value);
				
				if (elem.value != "") {
					formElem.markBox.innerHTML = "<img src=\"../img/ok_mark.jpg\" />";
				} else {
					formElem.markBox.innerHTML = "";
				}
				
			}
		
		} else if( elemName == "address" ) {
		
			this.form.groupErrorArray["address"] = false;
			this.form.groupErrorTypeArray["address"] = 0;
			
			if (elem.value != "") {
				formElem.markBox.innerHTML = "<img src=\"../img/ok_mark.jpg\" />";
			} else {
				formElem.markBox.innerHTML = "";
			}
			
			formElem.closeHintBox();
		
		} else if( elemName == "phone" ) {
		
			if( this.isBlank(elem.value) ) {
			
				this.form.groupErrorArray["phone"] = true;
				this.form.groupErrorTypeArray["phone"] = 1;
				
				if ( formElem.hintBox.innerHTML != "電話番号を入力してください。" ) {
					formElem.hintBox.isReopen = true;
					formElem.hintBox.isChangeMessage = true;
					formElem.hintBox.changeMessage = "電話番号を入力してください。";
					formElem.closeHintBox();
				} else if ( formElem.hintBox.style.display == "none") {
					formElem.hintBox.isReopen = true;
					formElem.hintBox.isChangeMessage = true;
					formElem.hintBox.changeMessage = "電話番号を入力してください。";
					formElem.closeHintBox();
				}
				
				elem.style.background = "#FFDFDF";
				elem.style.borderWidth = "2px";
				elem.style.borderColor = "#DF7D7D";
				elem.style.borderStyle = "solid";
				
				isError = true;
				elem.isErrorCheck = true;
				formElem.markBox.innerHTML = "<img src=\"../img/ng_mark.jpg\" />";
				//formElem.markBox.innerHTML = "";
				
			} else if ( this.isPhoneNo(elem.value) ) {
			
				this.form.groupErrorArray["phone"] = true;
				this.form.groupErrorTypeArray["phone"] = 3;
				
				if ( formElem.hintBox.innerHTML != "電話番号を正しく入力してください。" ) {
					formElem.hintBox.isReopen = true;
					formElem.hintBox.isChangeMessage = true;
					formElem.hintBox.changeMessage = "電話番号を正しく入力してください。";
					formElem.closeHintBox();
				} else if ( formElem.hintBox.style.display == "none") {
					formElem.hintBox.isReopen = true;
					formElem.hintBox.isChangeMessage = true;
					formElem.hintBox.changeMessage = "電話番号を正しく入力してください。";
					formElem.closeHintBox();
				}
				
				elem.style.background = "#FFDFDF";
				elem.style.borderWidth = "2px";
				elem.style.borderColor = "#DF7D7D";
				elem.style.borderStyle = "solid";
				
				isError = true;
				elem.isErrorCheck = true;
				formElem.markBox.innerHTML = "<img src=\"../img/ng_mark.jpg\" />";
				//formElem.markBox.innerHTML = "";
			
			} else {
			
				this.form.groupErrorArray["phone"] = false;
				this.form.groupErrorTypeArray["phone"] = 0;
				
				elem.style.background = "#CCFFCC";
				elem.style.borderWidth = "2px";
				elem.style.borderColor = "#A2EF95";
				elem.style.borderStyle = "solid";
				
				formElem.hintBox.isReopen = false;
				formElem.hintBox.isChangeMessage = false;
				formElem.hintBox.innerHTML = formElem.hintBox.defaultMessage;
				formElem.closeHintBox();
				
				var value = this.changeZenToHan(elem.value);
				elem.value = this.cutHaihun(value);
				formElem.markBox.innerHTML = "<img src=\"../img/ok_mark.jpg\" />";
				
			}
		
		}else if ( elemName == "contact" ) {
		
			this.form.groupErrorArray["contact"] = false;
			this.form.groupErrorTypeArray["contact"] = 0;
			this.form.formElem['contact_type'].closeHintBox();
				
			this.form.formElem['contact_type'].markBox.innerHTML = "<img src=\"../img/ok_mark.jpg\" />";
			
		} else if ( elemName == "contact_type2") {
		
			this.form.groupErrorArray["contact"] = false;
			this.form.groupErrorTypeArray["contact"] = 0;
			formElem.closeHintBox();
			
		} else if ( elemName == "contact_type3") {
		
			this.form.groupErrorArray["contact"] = false;
			this.form.groupErrorTypeArray["contact"] = 0;
			formElem.closeHintBox();
			
		} else if ( elemName == "contact_type4") {
		
			this.form.groupErrorArray["contact"] = false;
			this.form.groupErrorTypeArray["contact"] = 0;
			formElem.closeHintBox();
			
		} else if ( elemName == "contact_type5") {
		
			this.form.groupErrorArray["contact"] = false;
			this.form.groupErrorTypeArray["contact"] = 0;
			formElem.closeHintBox();
			
		} else if ( elemName == "contact_type6") {
		
			this.form.groupErrorArray["contact"] = false;
			this.form.groupErrorTypeArray["contact"] = 0;
			formElem.closeHintBox();
			
		} else if ( elemName == "contact_type7") {
		
			this.form.groupErrorArray["contact"] = false;
			this.form.groupErrorTypeArray["contact"] = 0;
			formElem.closeHintBox();
			
		} else if( elemName == "motive" ) {
		
			this.form.groupErrorArray["motive"] = false;
			this.form.groupErrorTypeArray["motive"] = 0;
			
			if (elem.value != "") {
				formElem.markBox.innerHTML = "<img src=\"../img/ok_mark.jpg\" />";
			} else {
				formElem.markBox.innerHTML = "";
			}
			
			formElem.closeHintBox();
		
		}
		
		if (elemName == "contact") {
			this.form.formElem['contact_type'].hintBox.className = "hintBox";
		} else {
		if ( isError ) {
			this.form.dispError = true;
			formElem.hintBox.className = "hintBox validate_error";
		} else {
			formElem.hintBox.className = "hintBox";
		}
		}
		
		return isError;
			
    }
	
};