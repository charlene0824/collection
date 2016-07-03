/*
 * 检测对象是否是空对象(不包含任何可读属性)。
 * 方法既检测对象本身的属性，也检测从原型继承的属性(因此没有使hasOwnProperty)。
 */
function isEmpty(obj){
  for (var name in obj) {
      return false;
  }
  return true;
};


/*
 * 检测对象是否是空对象(不包含任何可读属性)。
 * 方法只既检测对象本身的属性，不检测从原型继承的属性。
 */
function isOwnEmpty(obj){
  for(var name in obj){
      if(obj.hasOwnProperty(name))
      {
          return false;
      }
  }
  return true;
};