function factorialIterative(num) {
	var val = num;

	// for (var i = num - 1; i > 0; i--) {
	// 	val *= i;
	// };

	//same as for loop above:
	while (num > 1) {
		num -=1;
		val *= num;
	};

	return val;
}


function factorial(num) {
	//chose <= instead of === to account for negative num
	if (num <= 0) {
		return 1;
	}

	return num * factorial(num -1);
}


function fib(num) {
	
	//basecase: fib(0) and fib(1) = 1
	if (num < 2) {
		return 1;
	};

	return fib(num - 1) + fib(num - 2);
}


function type(obj) {
	var o = {};
	//return o.toString.call(obj).split(' ')[1];
	// \"[" and an all lowercase word and \s (whitespace character)
	return o.toString.call(obj).replace(/\[\b[a-z]+\b\s/,  '').replace(/\]/, '');
};

//would have never guessed to use String() - thanks to this discussion:
// http://discuss.fullstackacademy.com/t/08-recursion-stringify-casting-input-as-a-string/232
function stringify(obj) {
	var argsCounter = arguments.length;
	//base case: no more incrementing:
	if (argsCounter === 1) {
		//console.log("Entering "+ String(obj));

		var result = String(type(obj)).toLowerCase();

		if(result === 'string') {
			result = '"' + obj+ '"';
		}
		else if (result === 'object') {
			//do sth
			debugger;
			console.log(Object.keys(obj).length);
			for(var ii = 0; ii < Object.keys(obj).length; ii++) {
				stringify(obj[ii]);
			}
		}
		else if(result === 'array') {
			console.log(obj.length);
			for(var ii = 0; ii < obj.length; ii++) {
				stringify(obj[ii]);
			}
		}
		else {
				result = String(obj);
		}
		return result;
	}

	else {
		console.log("Number of arguments: " + argsCounter);
		var retVal = stringify()
		arguments.pop(0);
		return retVal;
	}
}





