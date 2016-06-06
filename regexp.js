//整理常用正则表达式
/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/  //匹配整数 浮点数和指数

//匹配任何可见字符
var rnotwhite = (/\S+/g)；
console.log(('we are family').match(rnotwhite));//['we','are','family']