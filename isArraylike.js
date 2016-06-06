//判断是否为类数组
function isArraylike( obj ) {

	// Support: iOS 8.2 (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = "length" in obj && obj.length,
		type = jQuery.type( obj );
		//排除function和window中可能有length属性的情况
	if ( type === "function" || jQuery.isWindow( obj ) ) {
		return false;
	}
	//元素节点为类数组
	if ( obj.nodeType === 1 && length ) {
		return true;
	}
	//类型为array /长度为0 /长度为number类型
	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}