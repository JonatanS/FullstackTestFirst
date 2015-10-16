// Functions.js

//use Array.prototype.slice.call(arguments) to retreive arguments as array.
function concat_string() {
	return Array.prototype.slice.call(arguments).join('');
}

//use () after arguments[i] to call the function
function yourFunctionRunner() {
	var returnArr = [];
	for (var i = 0; i < arguments.length; i++) {
		if (isFunction(arguments[i])) {
			returnArr.push(arguments[i]());
		}
	};
	return returnArr.join('');
}


var makeAdder = function(A) {
	var numInClosure = A;	//this was the trick. Set the number equal to makeAdder(arg) first time around, not to 0!
	var newFunc = function(A) {
		//debugger;
		console.log('num: ', numInClosure);
		if(!isNaN(A)) {
			numInClosure += A;
		}
		return numInClosure;
	}
	return newFunc;
}


var once = function(func) {
	var ranBefore = false; //thanks to http://discuss.fullstackacademy.com/t/trouble-with-once/280/13?u=jonatan_schumacher
    var newFunc = function() {
        
        if(!ranBefore) func();
        ranBefore = true;
    }
    return newFunc;
}


var createObjectWithTwoClosures = function()
{
	var val = 0;
	var obj = {};
	obj.oneIncrementer = function() {
			val++;
		}
	obj.tensIncrementer = function() {
		val+=10;
	}
	obj.getValue = function(){
		return val;
	};
	return obj;
}





/*************************
*****  OTHER STUFF  ******
*************************/

//http://stackoverflow.com/questions/5999998/how-can-i-check-if-a-javascript-variable-is-function-type
function isFunction(functionToCheck) {
 var getType = {};
 return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
}

