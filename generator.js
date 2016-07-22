// 通过一个yield关键字，来表明这里是异步执行的

/*var fs = require('fs');
function* unname(){
	var data1 = yield fs.readFile('test.txt',function(err,data){
		if(err){
			gen.throw(err);
		}
		gen.next(data);
	})
	console.log(data1);

	var data2 = yield fs.readFile('text1.txt',function(err,data){
		if(err){
			gen.throw(err);
		}
		gen.next(data);
	})
	console.log(data2);
}
var gen = unname();*/


/*利用 generator 来实现异步回调的实质就是把gen.next() 放入回调函数中，
 thunk 化之后，可以得到一个只接受 callback 的函数，
 换句话说，函数中除了 callback 其他都参数都已经传入了，
 callback 里的内容就可以交给 Co 去决定！*/
var fs = require('fs');
co(function* (){
	var data1 = yield readFile('test.txt');

	var data2 = yield readFile('test1.txt');

})

// Thunk 化就是将多参数函数，将其替换成单参数只接受回调函数作为唯一参数的版本 
function readFile( path ){
	return function(callback){
		fs.readFile(path,callback);
	}
}

function co(fn){
	var gen = fn();
	function next(err,data){
		console.log(data)
		var result = gen.next(data);
		if(!result.done){
			result.value(next);
		}
	}
	next();
}


//generator与Promise结合
//创建promise对象
function getFoo(){
	return new Promise(function(reslove,reject){
		resolve('foo');
	})
}
//建立generator生成器函数
var g = function* (){
	try{
		//执行创建promise对象的函数 
		var foo = yield getFoo();
		console.log(foo);
	}catch(e){
		console.log(e);
	}
}

function run(generator) {
	var it = generator();

	function go (result){
		if(result.done){
			return result.value;
		} 
		return result.value.then(function(value){
			return go(it.next(value));
		},function(error){
			return go(it.throw(error));
		})
	}
	go(it.next());
}

run(g);