// 06_Functional 

//1. map array:
function doubler(val) {
	return val * 2;
}

function map(array, operation) {
	var returnArray = [];
	for (var i = 0; i < array.length; i++) {
		returnArray.push(operation(Number(array[i])));
	}

	return returnArray;
}


//2. filter array:
function filter(collection, boolFunction) {
	var returnCollection = [];
	for (var i = 0; i < collection.length; i++) {
		if(boolFunction(collection[i])) {
			returnCollection.push(collection[i]);
		}
	}
	return returnCollection;
}


//3. contains array
function contains(collection, val) {
	
	for( var i in collection ) {
		//work for both objects and arrays:
	    if (collection.hasOwnProperty(i)){
	          if(collection[i] === val) return true;
	    }
	}
	//if value was not found:
	return false;
}


//4. countWords
function countWords(str) {
	return str.split(' ').length;
}


//5. reduce:
function reduce(array, startVal, reducerFunction) {
	var currentVal = startVal;
	for (var i = 0; i < array.length; i++) {
		currentVal = reducerFunction(array[i], currentVal);
	}
	return currentVal;
}

function countWordsInReduce(str, currentVal) {
	return currentVal + countWords(str); 
}

function sum(array) {
	return reduce(array, 0, function(val1, val2) {
		return val1 + val2;
	});
}


//6. every:
function every(array, boolFunction) {
	for (var i = 0; i < array.length; i++) {
		if (boolFunction(array[i]) == false) {
			return false;
		}
	}
	return true;
}


//7. any:
function any() {
	//if (typeof(arguments[1]) === 'function') {
		for (var i = 0; i < arguments[0].length; i++) {
			if(arguments[1](arguments[0][i]) === true) {
				return true;
			}
		}
	//}
	return false;
}