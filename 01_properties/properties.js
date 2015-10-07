function setPropertiesOnObjLiteral(obj) {
	obj.x = 7;
	obj.y = obj.x + 1;
	obj.onePlus = function(val) {
		return val +1;
	};
};

function setPropertiesOnArrayObj(arr) {
	arr.hello = function() {
		return "Hello!";
	};
	arr['full'] = "stack";
	arr.push(5);
	arr.twoTimes = function(num) {
		return num * 2;
	};
};

function setPropertiesOnFunctionObj(fun) {
	//console.dir(fun);

	fun.year = 2015;
	fun.divideByTwo = function(num) {
		return num/2;
	};

	fun.prototype.helloWorld = function() {
		return "Hello World";
	};
};
