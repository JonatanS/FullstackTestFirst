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
		val+=1;;
	}
	obj.tensIncrementer = function() {
		val +=10;
	}
	return obj;
}



/////
function three(funcToExecuteThrice) {
	var Counter = 0;
	return function(){
		if (Counter < 3) {
			Counter++;
			return funcToExecuteThrice();
		} 
	}
}