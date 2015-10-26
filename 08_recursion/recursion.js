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

//would not have guessed to use String() - thanks to this discussion:
// http://discuss.fullstackacademy.com/t/08-recursion-stringify-casting-input-as-a-string/232
function stringify(obj) {
	var argsCounter = arguments.length;
	var result = '';
	//base case: no more incrementing:
	if (argsCounter === 1) {
		//console.log("Entering "+ String(obj));

		var objectType = String(type(obj)).toLowerCase();

		if(objectType === 'string') {
			result += '"' + obj+ '"';
		}

		else if(objectType === 'array') {
			console.log(obj.length);
			result += "["
			for(var i = 0; i < obj.length; i++) {
				result += stringify(obj[i]);
				result += ",";
			}
			//replace last ',' with ']':
			result = replaceLastChar(result, "]");
		}

		else if (objectType === 'object') {
			console.log(Object.keys(obj).length);
			result +="{";
			for(var i in obj) {
				//result += stringify(i) + ": " + stringify(obj[i]) + ",";
				result += '"' + i + '"' + ": " + stringify(obj[i]) + ",";
			}

			result = replaceLastChar(result, "}");
		}

		else {
				result += String(obj);
		}

		return result;
	}

	//recursive function:
	else {
		console.log("Number of arguments: " + argsCounter);
		var retVal = stringify()
		arguments.pop(0);
		return retVal;
	}
}


//helper Function:
function replaceLastChar(str, newChar) {
	var temp = str.substr(0,str.length-1) + newChar;
	console.log("temp: " + temp);
	return temp;
}


