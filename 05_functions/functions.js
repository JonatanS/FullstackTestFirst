// Functions.js

function concat_string() {
	var res = "";
	for (var i in arguments) {
		res+=arguments[i]; 
	}
	return res;
}


function yourFunctionRunner() {
	var res = "";

	for (var i in arguments) {
		res += arguments[i]();
	}
	return res;
}

function makeAdder(A) {
	return function(B) {
		return A + B;
	};
}

function once(functionToRunOnce) {
	var counter = 0;
	return function() {
		if (counter === 0) {
			counter++;
			return functionToRunOnce();
		}
	}
}

function createObjectWithTwoClosures() {
	var value = 0;
	return {
		oneIncrementer : function() {value ++;},
		tensIncrementer : function() {value +=10;},
		getValue : function() {return value;}
	};
}