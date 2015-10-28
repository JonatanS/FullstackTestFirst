function doubler(val) {return val * 2;}

function map(arr, func) {
	for(var i in arr) {
		arr[i] = func(arr[i]);
	}
	return arr;
}

//alternative function using map directly
function mapEfficient(arr, func) {
	return arr.map(func);
}


// function filter(arr, func) {
// 	var newArr = [];
// 	for (var i in arr) {
// 		//console.log(!func(arr[i]));
// 		if(func(arr[i])) {
// 			newArr.push(arr[i]);
// 		}
// 	}
// 	return newArr;
// }


function filter(arr, func) {
	var newArr = arr.filter(func);
	return newArr;
}


function contains(arr, val) {
	for(var i in arr) {
		if (arr[i] === val) {
			return true;
		}
	}
	return false;
}

function countWords(str) {
	return str.split(" ").length;
}


function reduce(arr, val, func) {
	if(arr.length === 0) {
		return val;
	}

	val = func(arr[arr.length -1], val);
	arr.pop();
	return reduce(arr, val, func);
}

function countWordsInReduce(sentence, wordCounter) {
	return wordCounter + countWords(sentence);
}

function sum(arr) {
	return reduce(arr, 0, function(a, b) {
		return a + b;
	});
}

function every(arr, func) {
	var returnValue = true;
	for (var i in arr) {
		if (!func(arr[i])) {
			returnValue = false;
		}
	}
	return returnValue;
}

function any(arr, func) {
	var returnValue = false;
	arr.forEach(function(e, index){
		if(func(e)) returnValue = true;
		console.log(index + ": " + e + " returns " + func(e));
	});
	return returnValue;
}
/*
0: 1 returns false
1: 11 returns false
2: 29 returns false
0: 1 returns false
1: 10 returns true
2: 29 returns false
*/