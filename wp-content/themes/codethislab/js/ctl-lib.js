function trace( szMsg ){
	console.log(szMsg);
}

function _validate_alphanumeric(field){
	var valid = /^[0-9a-zA-Z]+$/;
	if(field.value.match(valid)){
		return true;
	}else{
		return false;
	}
}    

function _validate_string_length( oSrcField, iMaxLength ){
	if ( oSrcField.value.length > iMaxLength ){
		return false;
	}
	return true;		
}    
function _validate_checkBox(box){
	 if ( box.checked == false ){
		return false;
	}
	return true;
}
function _validate_if_fields_are_the_same(oField1, oField2){        
	if ( oField1.value != oField2.value){
		return false;
	}
	return true;
}     

function getAge(DOB) {
    var today = new Date();
    var birthDate = new Date(DOB);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age = age - 1;
    }

    return age;
}

function _validate_empty(oSrcField){        
	if ( oSrcField.value == ""){
		return false;
	}
	return true;
}    

function isNumberKey(evt){
    var charCode = (evt.which) ? evt.which : event.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57))
        return false;
    return true;
} 

function _validate_string_email(mail){
	var valid= /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
	if(mail.match(valid)){
		return true;
	}else{
		return false;
	}
}  

function _validate_email(mail){
	var valid= /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
	if(mail.value.match(valid)){
		return true;
	}else{
		return false;
	}
}  	

//parse URL to get values: var i = getUrlVars()["i"];
function getUrlVars( urlVars ) {
	urlVars = urlVars.trim();
	var oFinalData = new Array();
	var hashes = urlVars.split('&');
	for (var i = 0; i < hashes.length; i++) {
		var hash = hashes[i].split('=');
		oFinalData[hash[0]] = hash[1];
	}
	return oFinalData;
}

function getUrlVar( sParam ){
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++) {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam) {
            return sParameterName[1];
        }
    }
	return null;
}

// JQUERY EXTENSIONS
jQuery.fn.center = function () {
    this.css("position","fixed");
    this.css("top", ($(window).height()-this.outerHeight() ) / 2 );
	this.css("left", ($(window).width()-this.outerWidth() ) / 2 );
    return this;
}
jQuery.fn.isVisible = function () {
    return $(this).is(':visible');
}
jQuery.fn.removeAttributes = function() {
    return this.each(function() {
        var attributes = $.map(this.attributes, function(item) {
        return item.name;
        });
        var img = $(this);
        $.each(attributes, function(i, item) {
        img.removeAttr(item);
        });
    });
}

jQuery.fn.serializeObject = function()
{
    var o = {};
    var a = this.serializeArray();
    $.each(a, function() {
        if (o[this.name] !== undefined) {
            if (!o[this.name].push) {
                o[this.name] = [o[this.name]];
            }
            o[this.name].push(this.value || '');
        } else {
            o[this.name] = this.value || '';
        }
    });
    return o;
};

function centerDialogs(){
	$( "#loading-panel-content").center();
	$( "#message-box-content").center();
}

function printStackTrace(){
	 var e = new Error('dummy');
/*	 var stack = e.stack.replace(/^[^\(]+?[\n$]/gm, '')
	 .replace(/^\s+at\s+/gm, '')
	 .replace(/^Object.<anonymous>\s*\(/gm, '{anonymous}()@')
	 .split('\n');*/
	 console.log(e.stack);
}

$(window).scroll(function() {
	centerDialogs();
});    

$(window).resize(function() {
	centerDialogs();
});


function writeCookie(name, value, duration) {
	var expiringDate = new Date();
	var nowDate = new Date();
	expiringDate.setTime(nowDate.getTime() + (parseInt(duration) * 60000));
	document.cookie = name + '=' + encodeURI(value) + '; expires=' + expiringDate.toGMTString() + '; path = /';
}

function readCookie(nomeCookie) {

	if (document.cookie.length > 0){

		var start = document.cookie.indexOf(nomeCookie + "=");
		if (start != -1) {

			start = start + nomeCookie.length + 1;
			var end = document.cookie.indexOf(";",start);
			if (end == -1) end = document.cookie.length;
			return decodeURI(document.cookie.substring(start,end));
		}else{
			return "";
		}
	}
	return "";
}
function removeCookie(nomeCookie) {
	writeCookie(nomeCookie,'',-1);
}
function isCookie() {
	document.cookie = 'test_cookie';
	var testcookie = (document.cookie.indexOf('test_cookie') != -1) ? true : false;
	return testcookie;
}


