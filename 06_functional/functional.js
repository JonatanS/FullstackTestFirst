// 06_Functional 

function doubler(val) {
	return val * 2;
}

function map(arr, func) {
	var newArr = arr.map(func);
	return newArr;
}


function filter(arr, func) {
	var newArr = arr.filter(func);
	return newArr;
}


var contains = function(arr, val) {
	for (var i in arr) {
		if (arr[i] === val) {
			return true;
		}
	}
	return false;
}


function countWords(words) {
	return words.split(' ').length;
}


function reduce(arr, startVal, func) {

	//base case
	if(arr.length === 0) return startVal;

	//call reduce recursively:
	var result = func(arr[arr.length - 1], startVal);
	console.log(result);
	arr.pop();
	return reduce(arr, result, func);
}


function countWordsInReduce(words, prevVal) {
	return countWords(words) + prevVal;
}


//use reduce function to sum numbers in array
function sum(arr) {
	return reduce(arr, 0, function(a,b){return a + b;});
}


function every(arr, func) {
	for(var i in arr) {
		if(!func(arr[i])) {
			return false;
		}
	}
	return true;
	//return arr.every(func);
}

function any(arr, func) {
	for (var i in arr) {
		if (func(arr[i])) {
			return true;
		}
	}
	return false;
}