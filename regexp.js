//整理常用正则表达式
/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/  //匹配整数 浮点数和指数

//匹配任何可见字符
var rnotwhite = (/\S+/g)；
console.log(('we are family').match(rnotwhite));//['we','are','family']


// 匹配中文字符的正则表达式：
/ [\u4e00-\u9fa5]/

//将属性名转化为驼峰式属性名（str为原属性名）
//$&表示最近的一次匹配项
str.replace( /[A-Z]/g, "-$&" ).toLowerCase();

//匹配json和数组字符串
var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,

//匹配函数中的参数(匿名函数和具名函数均可匹配)
/^function\s*[^\(]*\(\s*([^\)]*)\)/m