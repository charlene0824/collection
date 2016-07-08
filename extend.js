function extend(){
		var target,len,i,deep,clone;
		i = 1;
		deep = false;

		len = arguments.length
		target = arguments[0];
		if(typeof arguments[0] === "boolean"){
			deep = arguments[0];
			target = arguments[1];
		}
		if(typeof target ==="object" || typeof target === "fucntion") {
			for (; i < len; i++) {
				var options = arguments[i];
				for(name in options){
					var copy = options[name];
					var src = target[name];
					if(deep && options && (copy instanceof Array||copy.isPlainObject)){
						if( copy instanceof Array ){
							clone = src && src instanceof Array?src:[];
						} else{
							clone = src && src.isPlainObject?src:{};
						}
						target[ name ] = extend( deep, clone, copy );
					} else if(copy != undefined) {
						target[name] = options[name];
					}
				}

			}
		}
		return target;
	}