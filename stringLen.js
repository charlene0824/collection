// 获取字符串的长度
/*string对象的length属性能够返回字符串的长度，不管字符时单字节还是双字节，都作为一个来计算
所以 要获取字符串的字节长度，必须通过手工计算获取*/

// 第一种方法
function strlen1(str){
	var b = 0, len = str.length;
	if(len) {
		for(var i = 0; i < len; i++) {
			if(str.charCodeAt(i) > 255 ) {
				b += 2;
			} else {
				b++;
			}
		}
		return b;
	} else {
		return 0;
	}
}

//第二种方法
function strlen2(str){
	var b = 0, len = str.length;
	if(len) {
		for(var i = 0; i < len; i++) {
			if( escape(c).length > 4 ) {
				b += 2;
			} else {
				b++;
			}
		}
		return b;
	} else {
		return 0;
	}
}

// 第三种方法
function strlen3(str){
	var b = 0, len = str.length;
	if(len) {
		for(var i = 0; i < len; i++) {
			if( /[\u0000-\u00ff]$/.test(c) ) {
				b += 2;
			} else {
				b++;
			}
		}
		return b;
	} else {
		return 0;
	}
}