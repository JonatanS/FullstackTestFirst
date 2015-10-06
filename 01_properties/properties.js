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
	}
};

// function setPropertiesOnFunctionObj(fun) {
// 	fun.functionObject = function() {
// 		return "I am a function object, all functions are objects! Function can have their own properties too!");
// 	}
// };

function setPropertiesOnFunctionObj(fun) {
	console.dir(fun);
	// fun.functionObject = function() {
	// 	return "yo";
	// };

	fun.year = 2015;
	fun.divideByTwo = function(num) {
		return num/2;
	}

	fun.prototype.helloWorld = function() {
		return "Hello World";
	};
};

