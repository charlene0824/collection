//将字符串类型的值转换为特定类型的值
var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,//匹配json和数组
if ( typeof data === "string" ) {
	data = data === "true" ? true :
	data === "false" ? false :
	data === "null" ? null :

	// Only convert to a number if it doesn't change the string
	// 当data为数值字符串时 +data为数值 +data + "" === data
	// JSON.parse不仅可以将json从字符串类型转变为json类型 也可以将数组字符串转换为数组
	+data + "" === data ? +data :
	rbrace.test( data ) ? JSON.parse( data ) :
	data;
}