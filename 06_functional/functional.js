function doubler(val) {return val * 2;}


function map(arr, func) {
	var newArr = arr.map(func);
	return newArr;
}


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
	var returnValue = true;
	for (var i in arr) {
		if (!func(arr[i])) {
			returnValue = false;
		}
	}
	return returnValue;
}



function any(arr, func) {
	for (var i in arr) {
		if (func(arr[i])) {
			return true;
		}
	}
	return false;
}

/*
0: 1 returns false
1: 11 returns false
2: 29 returns false
0: 1 returns false
1: 10 returns true
2: 29 returns false
*/


/////////////////////////////////week 3 challenge exercises:
/*
Create a function called "reject" that accepts an array and a function as arguments.
The 'reject' function returns the values in the array that return "false" after the
function (second argument) is called on each element of the Array. Notice, all the
'odd' values in the initial array are returned since the expression in the function
returns false for odd numbers.
Example:
var reject = function(arr, func){}; // pseudocode for the reject
function
var odds = reject([1,2,3,4,5,6], function(num){return num % 2 ==
0; });
// odds = [1,3,5]
*/

function reject(arr, func) {
	var newArr = [];
	for(var i in arr) {
		if(!func(arr[i])) {
			newArr.push(arr[i]);
		}
	}
	return newArr;
}


/*
Create the function `recSmallestInt` that accepts an array as an argument and
returns the smallest integer in the array. Do NOT use a for/while loop in your
solution, solve the problem Recursively!
Example:
- INPUT: recSmallestInt([22,1000,10,5,6,9]);
- OUTPUT: 5
*/
function recSmallestInt(arr, val) {
	var smallestValue = val || arr[arr.length - 1];

	//base case:
	if(arr.length === 0) {
		return smallestValue;
	}

	if(arr[arr.length -1] < smallestValue) {
		smallestValue = arr[arr.length -1];
	}

	arr.pop();
	return recSmallestInt(arr, smallestValue);
}



/*
Create the the function "newObj" that takes a constructor function as a parameter .
The constructor function will have additional properties on its `.prototype` property.
The `newObj` function returns an empty object. The internal prototype (__proto__)
of the empty object will be the constructor function's `.prototype` object. Note:
.__proto__ should NOT be used in your solution.
Example:
function hello(){
this.hello = "hello";
}
hello.prototype.sayHello = "Hello";
INPUT: var returnValue = newObj(hello);
OUTPUT:
// returnValue === {};
// returnValue's internal prototype aka __proto__ is: {sayHello:
"Hello"}
Note: The Hackerrank Test will look at the empty object's
*/
function newObj(ConstructorFunction) {
	return new ConstructorFunction();
}
