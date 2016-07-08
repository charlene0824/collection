//merge的第二个参数可以为{'0':'c','1':'j','3':'m'，'2':'n'}类型，但是key必须能够组成连续的整数排列

var merge = function( first, second ) {
		var len = +second.length,//当seconde.length存在时 len为数值 当不存在是second.length为undefined +second.length为NaN
			j = 0,
			i = first.length;

		while ( j < len ) {
			first[ i++ ] = second[ j++ ];
		}

		// Support: IE<9
		// Workaround casting of .length to NaN on otherwise arraylike objects (e.g., NodeLists)
		// len不存在的情况
		if ( len !== len ) {
			while ( second[j] !== undefined ) {
				first[ i++ ] = second[ j++ ];
			}
		}

		first.length = i;

		return first;
	};