// Functions.js

function concat_string() {
	var res = "";
	for (var i in arguments) {
		res+=arguments[i]; 
	}
	return res;
}

function concat_string() {
	var outString = "";
	for(var i in arguments) {
		outString += arguments[i];
	}
	return outString;
}

function yourFunctionRunner() {
	var outString = "";
	for(var i in arguments) {

		if (typeof(arguments[i]) === 'function')
		{
			//call it:
			outString += arguments[i]();
		}
	}
	return outString;
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

function makeAdder(val) {
	return function(anotherVal) {
		return val + anotherVal;
	};
}



function once(funcToExecuteOnce) {
	var Counter = 0;
		return function() {	
			if (Counter === 0) {
				Counter++;
				return funcToExecuteOnce();
		};
	}
}


//return an object with 3 functions
function createObjectWithTwoClosures() {
	//create variable here!!!
	var val = 0;

	var obj = {};
	obj.getValue = function(){
		return val;
	}
	obj["oneIncrementer"] = function() {
		val+=1;
	}
	obj.tensIncrementer = function() {
		val +=10;
	}
	return obj;
}



function three(funcToExecuteThrice) {
	var Counter = 0;
	return function(){
		if (Counter < 3) {
			Counter++;
			return funcToExecuteThrice();
		} 
	}
}